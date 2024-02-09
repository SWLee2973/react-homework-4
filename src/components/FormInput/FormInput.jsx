

function FormInput({type, placeholder}) {

  return (
    <>
      <label htmlFor={type} className="sr-only">
        {type}
      </label>
      <input
        type={type}
        id={type}
        className="w-48 h-6 rounded-sm text-xs ps-2"
        placeholder={placeholder}
      />
    </>
  )
}

export default FormInput;