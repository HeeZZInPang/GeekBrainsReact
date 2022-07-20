import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import {MessageList} from './components/MessageList/MessageList';
import {UserList} from './components/UserList/UserList';
import {Form} from './components/Form/Form';
import {AUTHORS} from './utils/constants'

const msgs = [];

function App() { 
  const [messages, setMessages] = useState(msgs);

  const timeout = useRef();

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  }

  const sendMessage = (text) => {
    addMessage({ 
      id: `msg-${Date.now()}`,
      author: AUTHORS.human, 
      text,
    });
  }
  
  useEffect(() => {
    if(messages[messages.length - 1]?.author === AUTHORS.human){
      timeout.current = setTimeout(() => addMessage({
        id: `msg-${Date.now()}`,
        author: AUTHORS.robot,
        text: "hello" 
      }), 1500);
    }

    return () => clearTimeout(timeout.current);
  });

  return (
    <div className="App">
      <UserList />
      <div>
        <MessageList messages={messages} />
        <Form onSubmit={sendMessage} />
      </div>
    </div>
  );
}

export default App;
