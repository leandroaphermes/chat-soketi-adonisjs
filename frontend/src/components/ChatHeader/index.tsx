import UserLabel from "../UserLabel";

export default function ChatHeader() {
  return (
    <header className="p-2 drop-shadow hover:bg-zinc-800 rounded cursor-pointer">
      <UserLabel isOnline name="Hamaro" />
    </header>
  );
}
