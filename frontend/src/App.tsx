import ChatContainer from "./components/ChatContainer";
import MenuAside from "./components/MenuAside";

export default function App() {
  return (
    <div className="h-full flex justify-center items-center p-10">
      <div className="flex justify-center items-stretch gap-2 w-full h-full rounded-xl bg-zinc-900 p-1">
        <div className="w-3/12">
          <MenuAside />
        </div>
        <div className="w-9/12">
          <ChatContainer />
        </div>
      </div>
    </div>
  );
}
