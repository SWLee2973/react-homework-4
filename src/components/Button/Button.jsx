import { memo } from 'react';

const buttonTheme = {
  zinc: 'w-72 h-10 hover:bg-zinc-900  bg-zinc-700 text-white',
  white: 'w-72 h-10 hover:bg-slate-300  bg-white text-zinc-700',
};

function Button({
  type = 'button',
  styleClass,
  theme,
  children,
  ...restProps
}) {
  return (
    <button
      type={type}
      className={`rounded-sm text-md ${styleClass} ${buttonTheme[theme]}`}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default memo(Button);
