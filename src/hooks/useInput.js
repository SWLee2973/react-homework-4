
import { useState } from 'react';

const INITIAL_INPUT_INFO = {
  email: '',
  password: '',
  confirm: '',
};

function useInput() {
  const [inputInfo, setInputInfo] = useState(INITIAL_INPUT_INFO);

  const handleInput = (e) => {
    setInputInfo({
      ...inputInfo,
      [e.target.id]: e.target.value,
    });
  };

  return [inputInfo, handleInput]
}

export default useInput;