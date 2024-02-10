import { forwardRef } from 'react';

function FormInput({ id, ...restProps }, ref) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {id}
      </label>
      <input
        id={id}
        ref={ref}
        className="w-72 h-10 rounded-sm text-md ps-3"
        {...restProps}
      />
    </>
  );
}

export default forwardRef(FormInput);
