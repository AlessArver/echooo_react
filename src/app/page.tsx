"use client";

import { TextArea } from "@/components/TextArea";
import { ChangeEvent, useEffect, useState } from "react";

interface IMessage {
  type: string;
  text: string;
}
const MESSAGE_DEFAULT_VALUE: IMessage = {
  type: "message",
  text: "",
};

export default function Home() {
  const [value, setValue] = useState<IMessage>(MESSAGE_DEFAULT_VALUE);
  const ws = new WebSocket("ws://localhost:8000/ws");

  const handleChangeValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = { type: "message", text: event.target.value };
    setValue(newMessage);
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(newMessage));
    } else {
      console.error("WebSocket is not open. Ready state is:", ws.readyState);
    }
  };

  useEffect(() => {
    ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    ws.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setValue(newMessage);
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };
  }, []);

  return (
    <div>
      <TextArea value={value.text} onChange={handleChangeValue} />
    </div>
  );
}
