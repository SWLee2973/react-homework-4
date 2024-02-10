

function ChatRoom() {
  
  return (
    <a
      href="#"
      className="hover:bg-gray-200 w-full min-h-16 bg-gray-100 flex items-center gap-5"
    >
      <img
        src="/assets/user.jpg"
        alt="thumbnail"
        className="ms-5 w-10 rounded-full"
      />
      <div className="flex flex-col max-w-48">
        <strong className='truncate'>sang2973</strong>
        <span className='truncate'>대충채팅내용</span>
      </div>
      <span className='ms-auto me-5'>12:57</span>
    </a>
  )
}

export default ChatRoom;