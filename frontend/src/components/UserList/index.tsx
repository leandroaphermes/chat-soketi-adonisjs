import LinkChat from "components/LinkChat";
import UserLabel from "components/UserLabel";

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
    <ul className="flex flex-col gap-1">
      {items.map((user) => (
        <li key={user.id}>
          <LinkChat
            userId={user.id}
            className="p-1 hover:bg-neutral-700 rounded cursor-pointer"
          >
            <UserLabel isOnline={user.online} name={user.name} size="small" />
          </LinkChat>
        </li>
      ))}
    </ul>
  );
}
