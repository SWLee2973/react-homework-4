import { useEffect, useState, memo } from 'react';

import { usePb } from '/src/hooks';
import base64 from 'base-64';
import { ChatRoom, Header } from '../';

const useJWTToken = (userInfo) => {
  const payload = userInfo.split('.')[1];
  const userData = base64.decode(payload);

  return JSON.parse(userData);
};

const useSetInfo = async (id, setUserName) => {
  const pb = usePb();
  const data = await pb.collection('users').getOne(id);

  setUserName(data.username);
};

const fetchChatRoom = async (userId) => {
  const pb = usePb();
  try {
    const roomData = await pb.collection('chats').getFullList({
      fields:
        'id, users, expand.messages.message, expand.messages.expand.users.name, expand.messages.created',
      filter: `users.id ?= "${userId}"`,
      expand: 'messages, messages.users',
    });

    return roomData;
  } catch (error) {
    console.log(error);
  }
};

const setSubscribeChat = (userId, setChatList) => {
  const pb = usePb();
  pb.collection('chats').subscribe('*', async () => {
    fetchChatRoom(userId).then((data) => {
      console.log('executed');
      setChatList([...data]);
    });
  })
}

function ChatRoomList({ userInfo, changeState }) {
  const { id: userId } = useJWTToken(userInfo);
  const [userName, setUserName] = useState('');
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    useSetInfo(userId, setUserName)
    fetchChatRoom(userId).then((data) => {
      setChatList([...data]);
    });
    setSubscribeChat(userId, setChatList);
  }, []);

  useEffect(() => {

  }, [])

  const handleLogout = () => {
    const pb = usePb();
    if (confirm('로그아웃 하시겠습니까?')) {
      pb.authStore.clear();
      sessionStorage.removeItem('token');
      changeState(false);
      pb.collection('chats').unsubscribe('*');
    }
  };

  return (
    <>
      <Header userName={userName} handleLogout={handleLogout} />
      <section className="p-3 size-full flex flex-col gap-3 overflow-y-scroll scrollbar-hide">
        <h3 className="sr-only">채팅방 리스트</h3>
        {chatList && chatList.map(item => {
          return (<ChatRoom key={item.id} item={item} me={userId}/>)
        })}
      </section>
    </>
  );
}

export default memo(ChatRoomList);
