import { useParams } from "react-router-dom";

import ChatFooter from "components/ChatFooter";
import ChatHeader from "components/ChatHeader";
import ChatMessageList from "components/ChatMessageList";

import users from "../../mocks/users";

export default function ChatContainer() {
  const { chatId } = useParams<{ chatId: string }>();

  const user = users.find((user) => user.id === chatId);
  console.log(chatId, user);

  return (
    <section className="h-full flex items-stretch flex-col">
      <ChatHeader isOnline={user?.online!} name={user?.name!} />
      <ChatMessageList />
      <ChatFooter />
    </section>
  );
}
