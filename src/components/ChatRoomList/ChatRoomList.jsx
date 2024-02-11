import { useState, memo } from 'react';

import { usePb, useChatUpdate } from '/src/hooks';
import base64 from 'base-64';
import { ChatRoom, ChatRoomCard, Header } from '../';

const useJWTToken = (userInfo) => {
  const payload = userInfo.split('.')[1];
  const userData = base64.decode(payload);

  return JSON.parse(userData);
};

function ChatRoomList({ userInfo, changeState }) {
  const { id: userId } = useJWTToken(userInfo);
  const [userName, setUserName] = useState('');
  const [chatList, setChatList] = useState([]);
  const [chatRoom, openChatRoom] = useState('');
  const pb = usePb();
  pb.autoCancellation(false);

  useChatUpdate(userId, setUserName, setChatList, pb);

  const handleLogout = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      pb.authStore.clear();
      sessionStorage.removeItem('token');
      changeState(false);
      pb.collection('chats').unsubscribe();
    }
  };

  const handleOpenChatRoom = (chatRoomId) => {
    return (e) => {
      e.preventDefault();
      openChatRoom(chatRoomId);
    };
  };

  const handleCloseChatRoom = () => {
    openChatRoom('');
  };

  return (
    <>
      <Header userName={userName} userId={userId} handleLogout={handleLogout} searchOpen={openChatRoom} />
      <section className="p-3 size-full flex flex-col gap-3 overflow-y-scroll scrollbar-hide">
        <h3 className="sr-only">채팅방 리스트</h3>
        {chatList.length > 0 ? (
          chatList.map((item) => {
            return (
              <ChatRoomCard
                key={item.id}
                item={item}
                me={userId}
                opener={handleOpenChatRoom(item.id)}
                pb={pb}
              />
            );
          })
        ) : (
          <span className="grid place-items-center h-4/5">
            대화중인 상대가 없습니다
          </span>
        )}
      </section>
      {chatRoom.length > 0 && (
        <ChatRoom closer={handleCloseChatRoom} chatRoomId={chatRoom} me={userId} pb={pb} />
      )}
    </>
  );
}

export default memo(ChatRoomList);
