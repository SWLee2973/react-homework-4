import { FormInput, Button } from '../';
import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { useInput } from '/src/hooks';
import { useRef } from 'react';

const END_POINT = import.meta.env.VITE_PB_URL;
const pb = new PocketBase(END_POINT)

async function fetchRegister(userData) {
  try {
    const data = await pb.collection('users').create(JSON.stringify(userData))
    return data;
  } catch(error) {
    console.log(error)
  }
}

function RegisterForm({ backPage }) {
  const [inputInfo, handleInput] = useInput();
  const inputRef = useRef({});

  const handleCancel = () => {
    backPage('');
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if(!inputRef.current.email.value) {
      alert('이메일을 입력해 주세요.')
      return;
    }
    if(inputRef.current.password.value.length < 8) {
      alert('비밀번호는 8자리 이상이어야 합니다.')
      return;
    }
    if(inputRef.current.password.value !== inputRef.current.confirm.value) {
      alert('비밀번호와 비밀번호 확인 값을 확인해주세요.')
      return;
    }

    const userData = {};
    userData["username"] = inputRef.current.email.value.split('@')[0];
    userData["email"] = inputRef.current.email.value;
    userData["password"] = inputRef.current.password.value;
    userData["passwordConfirm"] = inputRef.current.password.value;

    fetchRegister(userData)
      .then((data) => {
        console.log(data);
        alert('회원가입이 완료되었습니다. 로그인 화면으로 이동합니다.');
        backPage('');
      })
  }

  return (
    <form onSubmit={handleRegister} className="relative flex flex-col gap-1 h-full" method="POST">
      <h3 className="text-center font-bold mb-3">회원가입</h3>
      <FormInput
        id="email"
        type="email"
        ref={element => inputRef.current["email"] = element}
        placeholder="your@company.io"
        value={inputInfo.email}
        onChange={handleInput}
      />
      <FormInput
        id="password"
        type="password"
        ref={element => inputRef.current["password"] = element}
        placeholder="password"
        value={inputInfo.password}
        onChange={handleInput}
      />
      <FormInput
        id="confirm"
        type="password"
        ref={element => inputRef.current["confirm"] = element}
        placeholder="confirm password"
        value={inputInfo.confirm}
        onChange={handleInput}
      />

      <Button
        type="submit"
        theme="white"
        styleClass="absolute bottom-2"
      >
        Register
      </Button>

      <Button
        theme="zinc"
        styleClass="absolute bottom-[-40px]"
        onClick={handleCancel}
      >
        Cancel
      </Button>
    </form>
  );
}

export default RegisterForm;
