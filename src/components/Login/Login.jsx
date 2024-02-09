import { Button, FormInput } from '../';

function Login({ isLogin, changeState }) {
  
  return (
    <>
      <form className="relative flex flex-col gap-1 h-full">
        <FormInput type="email" placeholder="your@company.io" />
        <FormInput type="password" placeholder="password" />
        <Button type="login" styleClass="mt-2">
          Log in
        </Button>
        <div className="flex gap-1">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="text-xs">
            Remember me
          </label>
        </div>
        <Button type="register" styleClass="absolute bottom-0">
          Create Account
        </Button>
      </form>
    </>
  );
}

export default Login;
