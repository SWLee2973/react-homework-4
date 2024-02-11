
import { usePb } from '/src/hooks';
import { useEffect } from 'react';


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
      setChatList([...data]);
    });
  });
};


function useChatUpdate(userId, setUserName, setChatList) {

  useEffect(() => {
    useSetInfo(userId, setUserName);
    fetchChatRoom(userId).then((data) => {
      setChatList([...data]);
    });
    // setSubscribeChat(userId, setChatList);
  }, []);
}

export default useChatUpdate;