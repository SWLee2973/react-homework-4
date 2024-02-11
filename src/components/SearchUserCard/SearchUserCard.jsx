import { memo } from 'react';
import { Button } from '../';

function SearchUserCard({ userInfo, handleStartChat }) {
  return (
    <li className="w-80 bg-slate-500">
      <Button
        styleClass="w-full outline-none focus:text-yellow-400 focus:bg-slate-800 hover:text-yellow-400 hover:bg-slate-800 text-white p-2 flex items-center justify-between"
        onClick={handleStartChat}
      >
        <span className="text-xl">{userInfo.username}</span>
        <span className="text-sm">대화하기</span>
      </Button>
    </li>
  );
}

export default memo(SearchUserCard);
