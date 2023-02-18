import FriendsList from "../FriendsList";
import UserLabel from "../UserLabel";

export default function MenuAside() {
  return (
    <div className="h-full flex justify-between flex-col">
      <div className=" p-2">
        <UserLabel isOnline name="Hamaro" size="large" showOnline={false} />
      </div>
      <div className="flex-1 overflow-x-auto">
        <FriendsList />
      </div>
      <div>
        <button
          title="Settings"
          className="p-2 shadow-lg hover:bg-stone-800 rounded"
        >
          🔧
        </button>
        <span className="text-zinc-500 text-xs" title="Versão">
          v: 0.0.0
        </span>
      </div>
    </div>
  );
}
