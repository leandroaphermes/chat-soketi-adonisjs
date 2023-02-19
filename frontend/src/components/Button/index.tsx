import React from "react";

export type ButtonProps = {
  children?: React.ReactNode;
  title?: string;
  disabled?: boolean;
  loading?: boolean;
} & Pick<HTMLButtonElement, "type">;

export default function Button({
  children,
  disabled,
  loading,
  title,
  type,
}: ButtonProps) {
  return (
    <button
      className="p-1 bg-zinc-800 rounded"
      title={title}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {children}
    </button>
  );
}
