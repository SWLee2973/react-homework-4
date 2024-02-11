
// import { usePb } from '/src/hooks';
import { useEffect } from 'react';


const useSetInfo = async (id, setUserName, pb) => {
  const data = await pb.collection('users').getOne(id);

  setUserName(data.username);
};

const fetchChatRoom = async (userId, pb) => {
  
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

const setSubscribeChat = (userId, setChatList, pb) => {
  pb.collection('chats').subscribe('*', async () => {
    fetchChatRoom(userId, pb).then((data) => {
      setChatList([...data]);
    });
  });
};


function useChatUpdate(userId, setUserName, setChatList, pb) {

  useEffect(() => {
    useSetInfo(userId, setUserName, pb);
    fetchChatRoom(userId, pb).then((data) => {
      setChatList([...data]);
    });
    setSubscribeChat(userId, setChatList, pb);
  }, []);
}

export default useChatUpdate;