import { Toaster } from "react-hot-toast";

import ChatContainer from "./components/ChatContainer";
import MenuAside from "./components/MenuAside";

export default function App() {
  return (
    <div className="h-full flex justify-center items-center p-10">
      <div className="flex justify-center items-stretch gap-2 w-full h-full rounded bg-zinc-900 p-4">
        <div className="w-3/12 :w-[300]">
          <MenuAside />
        </div>
        <div className="w-9/12">
          <ChatContainer />
        </div>
      </div>
      <Toaster
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}
