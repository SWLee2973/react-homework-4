

const buttonStyle = {
  login: 'hover:bg-zinc-900 w-48 h-6 rounded-sm bg-zinc-700 text-white text-sm',
  register: 'hover:bg-slate-300 w-48 h-6 rounded-sm bg-white text-zinc-700 text-sm'
}

function Button({type, styleClass, children, ...restProps}) {


  return (
    <button
      type="button"
      className={`${styleClass} ${buttonStyle[type]}`}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button;