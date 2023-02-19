import UserLabel, { UserLabelProps } from "components/UserLabel";

export type ChatHeaderProps = Pick<UserLabelProps, "isOnline" | "name">;

export default function ChatHeader({ isOnline, name }: ChatHeaderProps) {
  return (
    <header className="p-2 drop-shadow hover:bg-zinc-800 rounded cursor-pointer">
      <UserLabel isOnline={isOnline} name={name} />
    </header>
  );
}
