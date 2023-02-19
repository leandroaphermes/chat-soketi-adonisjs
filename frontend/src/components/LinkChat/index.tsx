import React from "react";
import { NavLink } from "react-router-dom";

export type LinkChatProps = {
  userId: string;
  children: React.ReactNode;
  className?: string;
};

export default function LinkChat({
  children,
  userId,
  className,
}: LinkChatProps) {
  return (
    <NavLink
      to={`/chat/${userId}`}
      className={({ isActive }) =>
        `block ${className} ${isActive ? "bg-neutral-700" : ""}`
      }
    >
      {children}
    </NavLink>
  );
}
