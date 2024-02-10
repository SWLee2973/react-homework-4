import { useEffect, useState, memo } from 'react';

import { usePb } from '/src/hooks';
import base64 from 'base-64';
import { Header } from '../';

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
  const [userName, setUserName] = useState('');
  const { id: userId } = useJWTToken(userInfo);

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
      <section className="p-3 size-full flex flex-col gap-3">
        <h3 className="sr-only">채팅방 리스트</h3>
        <a
          href="#"
          className="hover:bg-gray-200 w-full h-16 bg-gray-100 flex items-center gap-5"
        >
          <img
            src="/assets/user.jpg"
            alt="thumbnail"
            className="ms-5 w-10 rounded-full"
          />
          <div className="flex flex-col max-w-48">
            <strong className='truncate'>sang2973</strong>
            <span className='truncate'>대충채팅내용</span>
          </div>
          <span className='ms-auto me-5'>12:57</span>
        </a>
        <a href="#" className="hover:bg-gray-200 w-full h-16 bg-gray-100"></a>
        <a href="#" className="hover:bg-gray-200 w-full h-16 bg-gray-100"></a>
      </section>
    </>
  );
}

export default memo(ChatRoomList);
