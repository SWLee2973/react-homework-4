import { useState } from 'react';
import { LoginForm, RegisterForm, } from '../';

function Login({ changeState }) {
  const [page, setPage] = useState('');

  const displayPage = () => {
    switch (page) {
      case 'register':
        return <RegisterForm backPage={setPage} />
      default:
        return <LoginForm register={handleRegister} onLogin={changeState} />
    }
  }

  const handleRegister = () => {
    setPage('register');
  }

  return (
    <>
      {displayPage()}
    </>
  );
}

export default Login;
