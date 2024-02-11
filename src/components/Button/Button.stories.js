import Button from './Button'
import '/src/styles/tailwind.css';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
}

export const Login = {
  args: {
    theme: 'zinc',
    children: 'Log in',
  }
}
Login.storyName = '로그인'

export const Register = {
  args: {
    theme: 'white',
    children: 'Create Account',
    styleClass: "absolute bottom-32",
  }
}
Register.storyName = '회원가입'

