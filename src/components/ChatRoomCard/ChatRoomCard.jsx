import { useState, useEffect } from 'react';
import { usePb } from '/src/hooks';

const getOtherUser = async (item, me) => {
  const pb = usePb();
  const otherUserId = item.users.filter(v => v != me)
  
  const data = await pb.collection('users').getOne(otherUserId[0]);

  return data;
};

function ChatRoomCard({ item, me }) {
  const [otherUser, setOtherUser] = useState('');

  useEffect(() => {
    getOtherUser(item, me)
      .then(data => setOtherUser(data.name));
  }, []);

  return (
    <a
      href="#"
      className="hover:bg-gray-200 w-full min-h-16 bg-gray-100 flex items-center gap-5"
    >
      <img
        src="/assets/user.jpg"
        alt="thumbnail"
        className="ms-5 w-10 rounded-full"
      />
      <div className="flex flex-col max-w-48">
        <strong className="truncate">{otherUser}</strong>
        <span className="truncate">
          {item.expand
            ? item.expand.messages[0].message
            : '아직 대화가 없습니다.'}
        </span>
      </div>
      <span className="ms-auto me-5">12:57</span>
    </a>
  );
}

export default ChatRoomCard;
