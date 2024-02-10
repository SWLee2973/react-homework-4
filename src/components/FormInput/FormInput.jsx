

function FormInput({id, ...restProps}) {

  return (
    <>
      <label htmlFor={id} className="sr-only">
        {id}
      </label>
      <input
        id={id}
        className="w-60 h-8 rounded-sm text-sm ps-2"
        {...restProps}
      />
    </>
  )
}

export default FormInput;