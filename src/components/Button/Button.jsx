import { memo } from 'react';

const buttonTheme = {
  zinc: 'hover:bg-zinc-900  bg-zinc-700 text-white',
  white: 'hover:bg-slate-300  bg-white text-zinc-700',
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
      className={`w-72 h-10 rounded-sm text-md ${styleClass} ${buttonTheme[theme]}`}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default memo(Button);
