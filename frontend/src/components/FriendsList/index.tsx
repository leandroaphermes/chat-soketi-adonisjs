import UserList, { UserListProps } from "../UserList";

import usersMock from "mocks/users";

const userItems: UserListProps["items"] = usersMock;

export default function FriendsList() {
  return (
    <div>
      <UserList items={userItems} />
    </div>
  );
}
