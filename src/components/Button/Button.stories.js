import Button from './Button'
import '/src/styles/tailwind.css';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
}

export const Login = {
  args: {
    type: 'login',
    children: 'Log in',
  }
}
Login.storyName = '로그인'

export const Register = {
  args: {
    type: 'register',
    children: 'Create Account',
    styleClass: "absolute bottom-0",
  }
}
Register.storyName = '회원가입'

