import ChatRoomCard from './ChatRoomCard';
import '/src/styles/tailwind.css';

export default {
  title: 'Components/ChatRoomCard',
  component: ChatRoomCard,
};

export const Default = {
  args: {
    item: {
      "expand": {
        "messages": [
          {
            "created": "2024-02-10 16:30:19.964Z",
            "expand": {
              "users": {
                "name": "kek2973"
              }
            },
            "message": "테스트 메시지 입니다."
          }
        ]
      },
  
      "id": "y8h7h0g5h9fzxiu",
      "users": [
        "s9dflut7ji8ht4h",
        "7zuj8c6yd1moeft"
      ]
    },
    me: "7zuj8c6yd1moeft",
  }
}
Default.storyName = '채팅방 리스트 아이템'