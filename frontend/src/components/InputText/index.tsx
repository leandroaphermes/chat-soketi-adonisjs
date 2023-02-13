import React, { forwardRef } from "react";

const InputText = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      ref={ref}
      placeholder="Say"
      className="bg-transparent hover:bg-stone-900 drop-shadow rounded py-1 px-2 w-full"
      {...props}
    />
  );
});

export default InputText;
