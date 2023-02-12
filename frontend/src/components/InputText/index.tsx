import React, { forwardRef } from "react";

const InputText = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      ref={ref}
      placeholder="Say"
      className="bg-transparent hover:bg-teal-900 shadow-lg rounded py-1 px-2 w-full"
      {...props}
    />
  );
});

export default InputText;
