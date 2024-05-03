"use client";

// REACT
import { FormEvent, useState } from "react";

// LIBRARIES
import { useMutation } from "@tanstack/react-query";

// SERVER
import { generateChatResponse } from "@/server/action";

export default function Chat() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const { mutate: createMessage } = useMutation({
    mutationFn: (message: string) => generateChatResponse(message),
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    createMessage(text);
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr, auto]">
      <div>
        <h2 className="text-5xl">Messages</h2>
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
            Ask Question
          </button>
        </div>
      </form>
    </div>
  );
}
