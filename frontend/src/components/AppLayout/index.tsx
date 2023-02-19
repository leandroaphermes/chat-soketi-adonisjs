import { Outlet } from "react-router-dom";

import MenuAside from "components/MenuAside";

export default function AppLayout() {
  return (
    <div className="h-full flex justify-center items-center p-10">
      <div className="flex justify-center items-stretch w-full h-full rounded bg-zinc-900">
        <div className="w-1/4  p-4 bg-stone-800 rounded-l rounded-bl">
          <MenuAside />
        </div>
        <div className="w-full p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
