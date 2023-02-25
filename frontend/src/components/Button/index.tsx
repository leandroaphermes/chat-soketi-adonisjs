import React from "react";

export type ButtonProps = {
  children?: React.ReactNode;
  title?: string;
  disabled?: boolean;
  loading?: boolean;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

export default function Button({
  children,
  disabled,
  loading,
  title,
  htmlType,
}: ButtonProps) {
  return (
    <button
      type={htmlType}
      className={"p-1 bg-zinc-800 rounded disabled:opacity-70"}
      title={title}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {loading && "👀 "}
      {children}
    </button>
  );
}
