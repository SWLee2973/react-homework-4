import { ReactComponent as Close } from '/src/assets/close.svg';
import { memo, useState, useEffect } from 'react';
import { Button, SearchUserCard } from '../';
import { debounce } from '/src/util';
import { usePb } from '/src/hooks';

const INITIAL_SEARCH_STATE = {
  value: '',
  userList: [],
};

const getSearchResult = async (pb, id, query) => {
  const data = await pb.collection('users').getFullList({
    filter: `id != "${id}" && username ~ "${query}"`,
    fields: 'id, username',
  });

  console.log(data);

  return data;
};

function SearchUser({ currentUser, closeHandler }) {
  const pb = usePb();
  // const
  const [user, searchUser] = useState(INITIAL_SEARCH_STATE);

  const handleSearchInput = (e) => {
    searchUser({
      ...user,
      value: e.target.value,
    });
  };

  const handleStartChat = (e) => {
    console.log('click!');
  };

  useEffect(() => {
    getSearchResult(pb, currentUser, user.value).then((data) => {
      searchUser({
        ...user,
        userList: data,
      });
    });
  }, [user.value]);

  return (
    <section className="absolute left-0 top-0 w-full h-[720px] backdrop-blur-sm bg-white/20">
      <h4 className="sr-only">유저 검색</h4>
      <Button
        styleClass="w-6 absolute top-6 right-6"
        aria-label="검색창 닫기"
        title="검색창 닫기"
        onClick={closeHandler}
      >
        <Close />
      </Button>
      <div className="w-full absolute top-24 flex flex-col items-center gap-6">
        <span className="text-xl ">검색할 유저 ID를 입력하세요.</span>
        <input
          className="outline-none w-80 h-8 bg-sky-100 text-center border-b-2 border-solid border-zinc-700"
          type="search"
          defaultValue={user.value}
          onChange={debounce(handleSearchInput)}
        />
        <ul className="flex flex-col gap-3">
          {user.userList.length > 0 &&
            user.userList.map((item) => {
              return (
                <SearchUserCard
                  key={item.id}
                  userInfo={item}
                  handleStartChat={handleStartChat}
                />
              );
            })}
        </ul>
      </div>
    </section>
  );
}

export default memo(SearchUser);
