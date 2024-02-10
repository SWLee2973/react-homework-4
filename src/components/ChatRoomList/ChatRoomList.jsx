import { useEffect, useState, memo } from 'react';

import { usePb } from '/src/hooks';
import base64 from 'base-64';
import { ChatRoom, Header } from '../';

const useJWTToken = (userInfo) => {
  const payload = userInfo.split('.')[1];
  const userData = base64.decode(payload);

  return JSON.parse(userData);
};

const useSetInfo = async (id, setUserName) => {
  const pb = usePb();
  const data = await pb.collection('users').getOne(id);

  setUserName(data.username);
};

function ChatRoomList({ userInfo, changeState }) {
  const { id: userId } = useJWTToken(userInfo);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    useSetInfo(userId, setUserName);
  }, []);

  const handleLogout = () => {
    const pb = usePb();
    if (confirm('로그아웃 하시겠습니까?')) {
      pb.authStore.clear();
      sessionStorage.removeItem('token');
      changeState(false);
    }
  };

  return (
    <>
      <Header userName={userName} handleLogout={handleLogout} />
      <section className="p-3 size-full flex flex-col gap-3 overflow-y-scroll scrollbar-hide">
        <h3 className="sr-only">채팅방 리스트</h3>
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
      </section>
    </>
  );
}

export default memo(ChatRoomList);
