import { useEffect, useState, memo } from 'react';
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

function ChatRoomList({ userInfo }) {
  const [userName, setUserName] = useState('');
  const { id: userId } = useJWTToken(userInfo);

  useEffect(() => {
    useSetInfo(userId, setUserName);
  }, []);

  return (
    <>
      <section className='w-full flex'>
        <h3 className="sr-only">닉네임</h3>
        <figure className='flex gap-3  items-center self-start ms-6 my-6'>
          <img src='/assets/user.jpg' alt='thumbnail' className='w-16 rounded-full' />
          <figcaption className='font-bold'>{userName}</figcaption>
        </figure>
        <Button>로그아웃</Button>
      </section>
    </>
  );
}

export default memo(ChatRoomList);
