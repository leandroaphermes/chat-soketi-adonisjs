import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "../components/AppLayout";
import ChatEmpty from "../components/ChatEmpty";
import NoMatch from "../components/NoMatch";

import PageChat from "../pages/chats";
import PageLogin from "../pages/login";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PageLogin />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<ChatEmpty />} />
          <Route path="chat/:chatId" element={<PageChat />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
