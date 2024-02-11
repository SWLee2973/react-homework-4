import { ReactComponent as Logout } from '/src/assets/logout.svg';
import { ReactComponent as Finder } from '/src/assets/finder.svg';
import { Button } from '../';
import { memo } from 'react';

function Header({ userName, handleLogout }) {
  return (
    <section className="w-full flex justify-center">
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
            // onClick={handleLogout}
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
    </section>
  );
}

export default memo(Header);