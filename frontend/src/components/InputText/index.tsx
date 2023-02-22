import React, { forwardRef } from "react";

const InputText = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      ref={ref}
      placeholder="Say"
      className="bg-stone-800 hover:bg-stone-700 drop-shadow rounded py-1 px-2 w-full"
      {...props}
    />
  );
});

export default InputText;
