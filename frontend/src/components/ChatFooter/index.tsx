import React from "react";

export default function ChatFooter() {
  return (
    <footer className="p-2 bg-neutral-800 rounded cursor-pointer flex gap-2">
      <button className="bg-transparent hover:bg-teal-900 rounded p-1">
        😄
      </button>
      <input
        placeholder="Say"
        className="bg-transparent hover:bg-teal-900 shadow-lg rounded py-1 px-2 w-full"
      />
      <button className="bg-transparent hover:bg-teal-900 rounded p-1">
        📨
      </button>
    </footer>
  );
}
