import { useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { AUTHORS } from "../../utils/constants";

const initMessages = {
  chat1: [],
  chat2: [],
  chat3: [],
};

export function Chat() { 
  const { id } = useParams();

  const [messages, setMessages] = useState(initMessages);

  const timeout = useRef();

  const addMessage = (newMsg) => {
    setMessages({...messages, [id]: [...messages[id], newMsg]});
  };

  const sendMessage = (text) => {
    addMessage({ 
      id: `msg-${Date.now()}`,
      author: AUTHORS.human, 
      text,
    });
  };
  
  useEffect(() => {
    const lastMessage = messages[id]?.[messages[id].length - 1];
    if(lastMessage?.author === AUTHORS.human){
      timeout.current = setTimeout(() => addMessage({
        id: `msg-${Date.now()}`,
        author: AUTHORS.robot,
        text: "hello" 
      }), 1500);
    }

    return () => clearTimeout(timeout.current);
  });

  if(!messages[id]) {
    return <Navigate to="/chat" replace />
  }

  return (
    <div className="App">
      <div>
        <MessageList messages={messages[id]} />
        <Form onSubmit={sendMessage} />
      </div>
    </div>
  );
}