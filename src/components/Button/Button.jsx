

const buttonStyle = {
  login: 'hover:bg-zinc-900  bg-zinc-700 text-white',
  register: 'hover:bg-slate-300  bg-white text-zinc-700'
}

function Button({type, styleClass, children, ...restProps}) {


  return (
    <button
      type="button"
      className={`w-60 h-8 rounded-sm text-sm ${styleClass} ${buttonStyle[type]}`}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button;