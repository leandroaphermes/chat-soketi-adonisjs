import { BrowserRouter, Route, Routes } from "react-router-dom";

import ChatEmpty from "../components/ChatEmpty";
import NoMatch from "../components/NoMatch";

import AppPrivate from "AppPrivate";

import PageChat from "../pages/chats";
import PageLogin from "../pages/login";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/login" element={<PageLogin />} />
      <Route path="/" element={<AppPrivate />}>
        <Route index element={<ChatEmpty />} />
        <Route path="chat/:chatId" element={<PageChat />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
