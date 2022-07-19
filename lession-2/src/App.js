import './App.css';
import React, {useState, useEffect} from 'react';
import {Message} from './components/Message/Message';
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
      <div className="MessagesList">
        {messages.map((msg) => 
          <Message author={msg.author} text={msg.text} />
        )}
      </div>
      <Form onSubmit={sendMessage} />
    </div>
  );
}

export default App;
