import { Toaster } from "react-hot-toast";

import ChatContainer from "./components/ChatContainer";
import MenuAside from "./components/MenuAside";

export default function App() {
  return (
    <div className="h-full flex justify-center items-center p-10">
      <div className="flex justify-center items-stretch w-full h-full rounded bg-zinc-900">
        <div className="w-1/4  p-4 bg-stone-800 rounded-l rounded-bl">
          <MenuAside />
        </div>
        <div className="w-full p-4">
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
