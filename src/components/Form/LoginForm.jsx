
import { Button, FormInput } from '../';

function LoginForm({ register }) {

  return (
    <form className="relative flex flex-col gap-1 h-full">
      <FormInput id="email" type="email" placeholder="your@company.io" />
      <FormInput id="password" type="password" placeholder="password" />
      <Button type="login" styleClass="mt-2">
        Log in
      </Button>
      <div className="flex gap-1">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember" className="text-xs">
          Remember me
        </label>
      </div>
      <Button type="register" styleClass="absolute bottom-0" onClick={register}>
        Create Account
      </Button>
    </form>
  )
}

export default LoginForm;