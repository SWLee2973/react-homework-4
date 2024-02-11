import { ReactComponent as Close } from '/src/assets/close.svg';
import { Button } from '../';

function ChatRoomHeader({closeHandler}) {
  return (
    <figure className="flex gap-3 w-full items-center justify-stretch ps-4 pe-6 py-4">
      <img
        src="/assets/user.jpg"
        alt="thumbnail"
        className="w-12 rounded-full"
      />
      <figcaption className="font-bold">sang2973</figcaption>
      <div className="ms-auto flex gap-4">
        <Button
          styleClass="w-6"
          aria-label="채팅방 닫기"
          title="채팅방 닫기"
          onClick={closeHandler}
        >
          <Close />
        </Button>
      </div>
    </figure>
  );
}

export default ChatRoomHeader;
