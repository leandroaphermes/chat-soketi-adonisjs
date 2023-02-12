import ChatFooter from "../ChatFooter";
import ChatHeader from "../ChatHeader";
import ChatMessageList from "../ChatMessageList";

export default function ChatContainer() {
  return (
    <section className="h-full flex items-stretch flex-col">
      <ChatHeader />
      <ChatMessageList />
      <ChatFooter />
    </section>
  );
}
