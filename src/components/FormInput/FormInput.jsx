

function FormInput({id, type, placeholder}) {

  return (
    <>
      <label htmlFor={id} className="sr-only">
        {id}
      </label>
      <input
        type={type}
        id={id}
        className="w-48 h-6 rounded-sm text-xs ps-2"
        placeholder={placeholder}
      />
    </>
  )
}

export default FormInput;