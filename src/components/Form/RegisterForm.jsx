import { FormInput, Button } from '../';
import { useState, useEffect } from 'react';
import { useInput } from '/src/hooks';

function RegisterForm({ backPage }) {
  const [inputInfo, handleInput] = useInput();

  const handleCancel = () => {
    backPage('');
  };

  const handleRegister = () => {

  }

  return (
    <form className="relative flex flex-col gap-1 h-full">
      <h3 className="text-center font-bold mb-3">회원가입</h3>
      <FormInput
        id="email"
        type="email"
        placeholder="your@company.io"
        value={inputInfo.email}
        onChange={handleInput}
      />
      <FormInput
        id="password"
        type="password"
        placeholder="password"
        value={inputInfo.password}
        onChange={handleInput}
      />
      <FormInput
        id="confirm"
        type="password"
        placeholder="confirm password"
        value={inputInfo.confirm}
        onChange={handleInput}
      />

      <Button theme="white" styleClass="absolute bottom-2" onClick={handleRegister}>
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
