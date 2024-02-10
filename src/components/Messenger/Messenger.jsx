import { useState, useEffect } from 'react';
import { ChatRoomList, Login } from '../';
import { usePb } from '/src/hooks';
import { memo } from 'react';

function Messenger() {
  const [isLogin, setIsLogin] = useState(false);
  const pb = usePb();
  const token = pb.authStore.token;
  const sessionToken = sessionStorage.getItem('token')

  useEffect(() => {
    if(pb.authStore.isValid && token === sessionToken) {
      setIsLogin(true);
    }
  }, [token])

  const changeLoginState = (bool) => {
    setIsLogin(bool);
  }

  return (
    <section className="bg-[#eee7d7] w-96 h-[720px] flex items-center flex-col">
      <h2 className="sr-only">Sang Messenger</h2>
      {isLogin ? <ChatRoomList userInfo={token} /> : <Login isLogin={isLogin} changeState={changeLoginState}/>}
    </section>
  );
}

export default memo(Messenger);
