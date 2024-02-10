import { Button, FormInput } from '../';
import { useInput, usePb } from '/src/hooks';
import { useRef } from 'react';

async function fetchAuth(email, password) {
  try {
    const pb = usePb();
    const data = await pb.collection('users').authWithPassword(email, password);

    return [pb, data];
  } catch (error) {
    alert('이메일 혹은 비밀번호가 틀렸습니다.');
    return;
  }
}

function LoginForm({ register, onLogin }) {
  const [inputInfo, handleInput] = useInput();
  const inputRef = useRef({});

  const handleLogin = async () => {
    const { email, password } = inputRef.current;

    fetchAuth(email.value, password.value)
      .then(([pb]) => {
        sessionStorage.setItem('token', pb.authStore.token);
      })
      .then(() => {
        sessionStorage.getItem('token') && onLogin(true)
      })
      .catch(error => error && onLogin(false));
  };

  return (
    <form className="relative flex flex-col gap-1 h-full py-36">
      <FormInput
        id="email"
        type="email"
        ref={(element) => (inputRef.current['email'] = element)}
        placeholder="your@company.io"
        value={inputInfo.email}
        onChange={handleInput}
      />
      <FormInput
        id="password"
        type="password"
        ref={(element) => (inputRef.current['password'] = element)}
        placeholder="password"
        value={inputInfo.password}
        onChange={handleInput}
      />
      <Button theme="zinc" styleClass="mt-2" onClick={handleLogin}>
        Log in
      </Button>
      <div className="flex gap-1">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember" className="text-xs">
          Remember me
        </label>
      </div>
      <Button theme="white" styleClass="absolute bottom-36" onClick={register}>
        Create Account
      </Button>
    </form>
  );
}

export default LoginForm;
