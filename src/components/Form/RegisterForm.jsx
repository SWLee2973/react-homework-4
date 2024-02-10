
import { FormInput, Button } from '../';

function RegisterForm() {

  return (
    <form className="relative flex flex-col gap-1 h-full">
      <h3 className='text-center font-bold mb-3'>회원가입</h3>
      <FormInput id="email" type="email" placeholder="your@company.io" />
      <FormInput id="password" type="password" placeholder="password" />
      <FormInput id="confirm" type="password" placeholder="confirm password" />
      
      <Button type="register" styleClass="absolute bottom-0" >
        Register
      </Button>
    </form>
  )
}

export default RegisterForm;