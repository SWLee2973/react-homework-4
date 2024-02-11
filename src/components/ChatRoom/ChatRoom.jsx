import { ChatRoomHeader, Message } from '../';
import { useState, useEffect } from 'react';
import { usePb } from '/src/hooks';

const CHAT_DATA = {
  currentUser: '',
  otherUser: '',
  messages: [],
};

const getMessages = async (chatRoomId, me) => {
  const pb = usePb();

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

function ChatRoom({ closer, chatRoomId, me }) {
  const [chatRoomInfo, updateChatRoomInfo] = useState(CHAT_DATA);

  useEffect(() => {
    getMessages(chatRoomId, me).then((item) => {
      const { data: message, otherUser, currentUser } = item;
      const messages = message.expand ? message.expand.messages : '';

      updateChatRoomInfo({
        messages,
        otherUser: otherUser.name,
        currentUser: currentUser.username,
      });
    });
  }, []);

  return (
    <section className="absolute z-10 w-full h-full bg-slate-200">
      <h3 className="sr-only">{chatRoomInfo.otherUser} 채팅방</h3>
      <ChatRoomHeader closeHandler={closer} user={chatRoomInfo.otherUser} />
      <section className="p-4 w-full h-[500px] overflow-y-scroll scrollbar-hide">
        {chatRoomInfo.messages &&
          chatRoomInfo.messages.toReversed().map((item) => {
            return (
              <Message
                key={item.id}
                item={item}
                currentUser={chatRoomInfo.currentUser}
              />
            );
          })}
      </section>
      <section className="w-full h-[140px] relative">
        <textarea
          className="outline-none border-solid border-zinc-200 border-2 size-full resize-none p-3 scrollbar-hide"
          name=""
          id=""
        ></textarea>
        <button className="absolute bottom-2 right-2 bg-slate-100 py-1 px-3">
          전송
        </button>
      </section>
    </section>
  );
}

export default ChatRoom;
