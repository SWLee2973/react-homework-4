import { useState } from 'react';
import { LoginForm, RegisterForm, } from '../';
import { useEffect } from 'react';

function Login({ isLogin, changeState }) {
  const [page, setPage] = useState('');

  const displayPage = () => {
    switch (page) {
      case 'register':
        return <RegisterForm />
      default:
        return <LoginForm register={handleRegister} />
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
