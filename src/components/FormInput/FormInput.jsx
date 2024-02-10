

function FormInput({id, ...restProps}) {

  return (
    <>
      <label htmlFor={id} className="sr-only">
        {id}
      </label>
      <input
        id={id}
        className="w-72 h-10 rounded-sm text-md ps-3"
        {...restProps}
      />
    </>
  )
}

export default FormInput;