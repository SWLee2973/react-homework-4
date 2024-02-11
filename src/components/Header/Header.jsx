import { ReactComponent as Logout } from '/src/assets/logout.svg';
import { ReactComponent as Finder } from '/src/assets/finder.svg';
import { Button, SearchUser } from '../';
import { memo, useState } from 'react';

function Header({ userName, userId, handleLogout }) {
  const [searchUser, displaySearchUser] = useState(false);

  const searchHandler = () => {
    displaySearchUser(v => !v);
  }

  return (
    <section className="w-full flex justify-center relative">
      <h3 className="sr-only">닉네임</h3>
      <figure className="flex gap-3 w-full items-center justify-stretch mx-6 my-6">
        <img
          src="/assets/user.jpg"
          alt="thumbnail"
          className="w-16 rounded-full"
        />
        <figcaption className="font-bold">{userName}</figcaption>
        <div className='ms-auto flex gap-4'>
          <Button
            styleClass="w-8"
            aria-label="상대찾기"
            title='상대찾기'
            onClick={searchHandler}
          >
            <Finder />
          </Button>
          <Button
            styleClass="w-8"
            aria-label="로그아웃"
            title='로그아웃'
            onClick={handleLogout}
          >
            <Logout />
          </Button>
        </div>
      </figure>
      {searchUser && <SearchUser currentUser={userId} closeHandler={searchHandler} />}
    </section>
  );
}

export default memo(Header);