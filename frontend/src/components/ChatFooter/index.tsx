import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import InputText from "components/InputText";

export default function ChatFooter() {
  const focusInputNewMessage = useRef<HTMLInputElement>(null);
  const [newMessageText, setNewMessageText] = useState("");

  function handleSubmitNewMessage() {
    if (!newMessageText) return;
    toast.success("Send success");
    setNewMessageText("");
    focusInputNewMessage.current?.focus();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (String(e.key).toLowerCase() === "enter") handleSubmitNewMessage();
  }

  useEffect(() => {
    focusInputNewMessage.current?.focus();
  }, [focusInputNewMessage.current]);

  return (
    <footer className="p-2 bg-neutral-800 rounded cursor-pointer flex gap-2">
      <button className="bg-transparent hover:bg-teal-900 rounded p-1">
        😄
      </button>
      <InputText
        ref={focusInputNewMessage}
        value={newMessageText}
        onChange={(e) => setNewMessageText(e.target.value)}
        onKeyUp={handleKeyDown}
      />
      <button
        disabled={!newMessageText}
        className="bg-transparent hover:bg-teal-900 rounded p-1 disabled:opacity-10 disabled:cursor-not-allowed"
      >
        📨
      </button>
    </footer>
  );
}
