import { memo } from "react";

const displayTime = (time) => time.split(' ')[1].slice(0, 5);

function Message({ item, currentUser }) {
  const talker = item.expand.users.name;

  return (
    <>
      {talker === currentUser ? (
        <div className="flex justify-end items-end gap-1 my-1">
          <span className="text-xs font-semibold text-slate-600">
            {displayTime(item.created)}
          </span>
          <span className="bg-yellow-300 px-2 py-1 rounded-md text-sm">
            {item.message}
          </span>
        </div>
      ) : (
        <figure className="flex gap-3 w-full items-start justify-stretch py-1 my-1">
          <img
            src="/assets/user.jpg"
            alt="thumbnail"
            className="w-12 rounded-full"
          />
          <div>
            <figcaption className="font-semibold">
              {item.expand.users.name}
            </figcaption>
            <div className="flex items-end gap-1">
              <span className="bg-slate-50 px-2 py-1 rounded-md text-sm">{item.message}</span>
              <span className="text-xs font-semibold text-slate-600">{displayTime(item.created)}</span>
            </div>
          </div>
        </figure>
      )}
    </>
  );
}

export default memo(Message);
