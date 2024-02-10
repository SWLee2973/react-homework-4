

function FormInput({id, ...restProps}) {

  return (
    <>
      <label htmlFor={id} className="sr-only">
        {id}
      </label>
      <input
        id={id}
        className="w-48 h-6 rounded-sm text-xs ps-2"
        {...restProps}
      />
    </>
  )
}

export default FormInput;