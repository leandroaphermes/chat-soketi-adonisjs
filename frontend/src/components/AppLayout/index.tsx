import { Outlet } from "react-router-dom";

import MenuAside from "components/MenuAside";

export default function AppLayout() {
  return (
    <div className="h-full flex justify-center items-center p-10">
      <div className="flex justify-center w-full h-full rounded bg-zinc-900">
        <div className="min-w-[200px] w-full max-w-[300px] p-4 bg-stone-800 rounded-l rounded-bl">
          <MenuAside />
        </div>
        <div className="flex-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
