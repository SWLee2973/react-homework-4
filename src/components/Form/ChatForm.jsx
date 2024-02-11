import { useState, useRef } from 'react';
import { usePb } from '/src/hooks';

const fetchMessage = async (currentChat, message, roomId, userId) => {
  try {
    const pb = usePb();
    const messageData = {
      "message": `${message}`,
      "chats": `${roomId}`,
      "users": `${userId}`
    }
    
    if(currentChat === '') currentChat = currentChat.split('');

    const currentMessageId = currentChat.map(item => item.id)
    pb.collection('messages').create(messageData)
      .then(data => {
        const chatData = {
          "messages": [...currentMessageId, data.id]
        }
        pb.collection('chats').update(roomId, chatData)
      });
  } catch (error) {
    console.error(error);
  }
};

function ChatForm({ currentChat, currentRoom, sender }) {
  const [message, setMessage] = useState('');
  const chatMessage = useRef(null);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleChatMessage = (e) => {
    e.preventDefault();

    fetchMessage(currentChat, chatMessage.current.value, currentRoom, sender);
    setMessage('');
  };

  const handleKeySubmit = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter' && e.shiftKey) return;

    if (e.key === 'Enter') handleChatMessage(e);
  };

  return (
    <section className="w-full h-[140px] relative">
      <form
        onKeyDown={handleKeySubmit}
        className="size-full"
        onSubmit={handleChatMessage}
      >
        <label htmlFor="chatInput" className="sr-only">
          채팅입력창
        </label>
        <textarea
          ref={chatMessage}
          className="outline-none border-solid border-zinc-200 border-2 size-full resize-none p-3 scrollbar-hide"
          name="chatInput"
          id="chatInput"
          value={message}
          onChange={handleChange}
        ></textarea>
        <button
          className="disabled:bg-slate-100 absolute bottom-2 right-2 bg-yellow-200 py-1 px-3"
          disabled={!message.length}
        >
          전송
        </button>
      </form>
    </section>
  );
}

export default ChatForm;
