import './App.css';
import React, {useState, useEffect} from 'react';
import {MessageList} from './components/MessageList/MessageList';
import {Form} from './components/Form/Form';
import {AUTHORS} from './utils/constants'

const msgs = [];

function App() { 
  const [messages, setMessages] = useState(msgs);

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  }

  const sendMessage = (text) => {
    addMessage({ author: AUTHORS.human, text });
  }
  
  useEffect(() => {
    let timeout;
    if(messages[messages.length - 1]?.author === AUTHORS.human){
      timeout = setTimeout(() => addMessage({ author: AUTHORS.robot, text: "hello" }), 1500);
    }

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <div className="App">
      <MessageList messages={messages} />
      <Form onSubmit={sendMessage} />
    </div>
  );
}

export default App;
