import { ChatRoomHeader } from '../';
import { useState, useEffect } from 'react';

const CHAT_DATA = {
  otherUser: '',
  messages: [],
}


function ChatRoom({ closer, chatRoomId }) {
  const [messages, updateMessages] = useState(chatRoomId);

  useEffect(() => {

  }, [])
  console.log(chatRoomId);

  return (
    <section className="absolute z-10 w-full h-full bg-slate-200">
      <h3 className="sr-only">sang2973 채팅방</h3>
      <ChatRoomHeader closeHandler={closer} />
      <section className="p-3 w-full h-[500px] bg-slate-400 overflow-y-scroll scrollbar-hide">
        {messages}
      </section>
      <section className="w-full h-[140px] relative">
        <textarea
          className="outline-none border-solid border-zinc-200 border-2 size-full resize-none p-3 scrollbar-hide"
          name=""
          id=""
        ></textarea>
        <button className="absolute bottom-2 right-2 bg-slate-100 py-1 px-3">
          전송
        </button>
      </section>
    </section>
  );
}

export default ChatRoom;
