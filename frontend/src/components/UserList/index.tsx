import React from "react";
import UserLabel from "../UserLabel";

export type UserType = {
  id: string;
  name: string;
  online: boolean;
};

export type UserListProps = {
  items: UserType[];
};

export default function UserList({ items }: UserListProps) {
  return (
    <ul>
      {items.map((user) => (
        <li
          key={user.id}
          className="p-1 hover:bg-neutral-800 rounded cursor-pointer"
        >
          <UserLabel isOnline={user.online} name={user.name} size="small" />
        </li>
      ))}
    </ul>
  );
}
