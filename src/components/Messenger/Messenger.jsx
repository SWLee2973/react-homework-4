import { useState, useEffect } from 'react';
import { Login } from '../';

function Messenger() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <section className="bg-[#eee7d7] w-96 h-[720px] flex items-center flex-col px-24 py-36">
      <h2 className="sr-only">Sang Messenger</h2>
      {isLogin ? '' : <Login isLogin={isLogin} changeState={setIsLogin}/>}
    </section>
  );
}

export default Messenger;
