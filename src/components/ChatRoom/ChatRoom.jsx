import { ChatForm, ChatRoomHeader, Message } from '../';
import { useState, useEffect, useRef } from 'react';
import { usePb } from '/src/hooks';

const CHAT_DATA = {
  currentUser: '',
  otherUser: '',
  messages: [],
};

const getMessages = async (chatRoomId, me, pb) => {

  try {
    const messageData = await pb.collection('chats').getFullList({
      fields:
        'id, users, expand.messages.message, expand.messages.id, expand.messages.expand.users.name, expand.messages.created',
      filter: `id = "${chatRoomId}"`,
      expand: 'messages, messages.users',
    });

    const [data] = messageData;
    const [otherUserId] = data.users.filter((v) => v != me);
    const otherUser = await pb.collection('users').getOne(otherUserId);
    const currentUser = await pb.collection('users').getOne(me);

    return { data, otherUser, currentUser };
  } catch (error) {
    console.error(error);
  }
};

const useUpdateMessages = (chatRoomId, me, updateChatRoomInfo, pb) => {
  getMessages(chatRoomId, me, pb).then((item) => {
    const { data: message, otherUser, currentUser } = item;
    const messages = message.expand ? message.expand.messages : '';

    updateChatRoomInfo({
      messages,
      otherUser: otherUser.name,
      currentUser: currentUser.username,
    });
  });
};

function ChatRoom({ closer, chatRoomId, me, pb }) {
  const [chatRoomInfo, updateChatRoomInfo] = useState(CHAT_DATA);
  const scrollRef = useRef(null);

  useEffect(() => {
    useUpdateMessages(chatRoomId, me, updateChatRoomInfo, pb);

    pb.collection('chats').unsubscribe();
    pb.collection('chats').subscribe('*', async () => {
      useUpdateMessages(chatRoomId, me, updateChatRoomInfo, pb);
    });

    scrollRef.current?.scrollTo(0, 65535);
  }, []);

  const closeHandler = () => {
    pb.collection('chats').unsubscribe();
    closer();
  };

  return (
    <section className="absolute z-10 w-full h-full bg-slate-200">
      <h3 className="sr-only">{chatRoomInfo.otherUser} 채팅방</h3>
      <ChatRoomHeader
        closeHandler={closeHandler}
        user={chatRoomInfo.otherUser}
      />
      <section
        ref={scrollRef}
        className="p-4 w-full h-[500px] overflow-y-scroll scrollbar-hide"
      >
        {chatRoomInfo.messages &&
          chatRoomInfo.messages.map((item) => {
            return (
              <Message
                key={item.id}
                item={item}
                currentUser={chatRoomInfo.currentUser}
              />
            );
          })}
      </section>
      <ChatForm
        currentChat={chatRoomInfo.messages}
        currentRoom={chatRoomId}
        sender={me}
      />
    </section>
  );
}

export default ChatRoom;
