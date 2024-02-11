import { useState, useEffect, memo } from 'react';
import { usePb } from '/src/hooks';

const getOtherUser = async (item, me) => {
  const pb = usePb();
  const otherUserId = item.users.filter(v => v != me)
  
  const data = await pb.collection('users').getOne(otherUserId[0]);

  return data;
};

const printDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth()+1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function ChatRoomCard({ item, me, opener }) {
  const [otherUser, setOtherUser] = useState('');
  const today = printDate(new Date());

  const last = item.expand ? item.expand.messages[0] : '';
  const lastChatTime = last && (
    last.created.split(' ')[0] === today ?
    last.created.split(' ')[1].slice(0, 5)
    : last.created.split(' ')[0].slice(5)
  );

  const lastMessage = last ? last.message : '아직 대화가 없습니다.'

  useEffect(() => {
    getOtherUser(item, me)
      .then(data => setOtherUser(data.name));
  }, []);

  return (
    <a
      href="#"
      className="hover:bg-gray-200 w-full min-h-16 bg-gray-100 flex items-center gap-5"
      onClick={opener}
    >
      <img
        src="/assets/user.jpg"
        alt="thumbnail"
        className="ms-5 w-10 rounded-full"
      />
      <div className="flex flex-col max-w-48">
        <strong className="truncate">{otherUser}</strong>
        <span className="truncate">
          {lastMessage}
        </span>
      </div>
      <span className="ms-auto me-5">
        {lastChatTime}
      </span>
    </a>
  );
}

export default memo(ChatRoomCard);
