import { useEffect, useState, memo } from 'react';
import { ReactComponent as Logout } from '/src/assets/logout.svg';
import { usePb } from '/src/hooks';
import base64 from 'base-64';
import { Button } from '../';

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
    if(confirm('로그아웃 하시겠습니까?')) {
      pb.authStore.clear();
      sessionStorage.removeItem('token')
      changeState(false)
    }
  }

  return (
    <>
      <section className='w-full flex justify-center'>
        <h3 className="sr-only">닉네임</h3>
        <figure className='flex gap-3 w-full items-center justify-stretch mx-6 my-6'>
          <img src='/assets/user.jpg' alt='thumbnail' className='w-16 rounded-full' />
          <figcaption className='font-bold'>{userName}</figcaption>
          <Button styleClass='w-8 ms-auto' aria-label='로그아웃' onClick={handleLogout}><Logout /></Button>  
        </figure>
      </section>
    </>
  );
}

export default memo(ChatRoomList);
