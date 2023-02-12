import UserList, { UserListProps } from "../UserList";

const userItems: UserListProps["items"] = [
  {
    id: "b12a470b-cef8-4a6e-b978-5a79dfd0a821",
    name: "Hamaro",
    online: true,
  },
  {
    id: "db40dc42-502e-45fb-9f31-d4f761bb90ea",
    name: "Nesha",
    online: true,
  },
  {
    id: "2fd734c6-4acb-4e9c-b675-8c9b0696cfb3",
    name: "Baraunas",
    online: false,
  },
];

export default function FriendsList() {
  return (
    <div>
      <UserList items={userItems} />
    </div>
  );
}
