import Header from './Header';
import '/src/styles/tailwind.css';

export default {
  title: 'Components/Header',
  component: Header,
};

export const Default = {
  args: {
    userName: 'kek2973'
  }
}
Default.storyName = '채팅 리스트 헤더'