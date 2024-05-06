"use client";

// REACT
import { FormEvent, useState } from "react";

// HOOKS
import { useCreateMessage } from "@/app/hooks/useMessage";

export default function Chat() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const { createMessage, isPending } = useCreateMessage();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    createMessage(text);
    setMessages(prevMessages => [...prevMessages, text]);
    setText("");
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr, auto]">
      <div>
        {messages.map((message, i) => (
          <div
            key={i}
            className="bg-base-200 flex p-6 mx-8 px-8 text-xl leading-loose border-b border-base-300"
          >
            <p className="max-w-3xl">{message}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl pt-[42rem]">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Message GeniusGPT"
            className="input input-bordered join-item w-full"
            value={text}
            required
            onChange={e => setText(e.target.value)}
          />
          <button className="btn btn-primary join-item" type="submit">
            {isPending ? "Please wait..." : "Ask Question"}
          </button>
        </div>
      </form>
    </div>
  );
}
