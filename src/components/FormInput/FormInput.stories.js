import FormInput from './FormInput';
import '/src/styles/tailwind.css';

export default {
  title: 'Components/FormInput',
  component: FormInput,
  tags: ['autodocs'],
}

export const Email = {
  args: {
    id: 'email',
    type: 'email',
    placeholder: 'your@company.io'
  }
}
Email.storyName = '이메일 입력'

export const Password = {
  args: {
    id: 'password',
    type: 'password',
    placeholder: 'password'
  }
}
Password.storyName = '비밀번호 입력'

export const ConfirmPassword = {
  args: {
    id: 'confirm',
    type: 'password',
    placeholder: 'confirm password'
  }
}
ConfirmPassword.storyName = '비밀번호 확인'