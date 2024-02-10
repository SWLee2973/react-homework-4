import { useState, useEffect } from 'react';
import { ChatRoomList, Login } from '../';
import { usePb } from '/src/hooks';

function Messenger() {
  const [isLogin, setIsLogin] = useState(false);
  const token = sessionStorage.getItem('token')
  const pb = usePb();

  useEffect(() => {
    if(pb.authStore.token === token && pb.authStore.isValid) {
      setIsLogin(true);
    }
  }, [token])

  const changeLoginState = () => {
    setIsLogin(true);
  }

  return (
    <section className="bg-[#eee7d7] w-96 h-[720px] flex items-center flex-col px-24 py-36">
      <h2 className="sr-only">Sang Messenger</h2>
      {isLogin ? <ChatRoomList /> : <Login isLogin={isLogin} changeState={changeLoginState}/>}
    </section>
  );
}

export default Messenger;
