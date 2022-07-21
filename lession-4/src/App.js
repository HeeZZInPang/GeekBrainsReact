import './App.css';
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Chat } from './screens/Chat/Chat';
import { ChatList } from './components/ChatList/ChatList';

const Home = () => (
  <h4>Home page</h4>
)

function App() {
  return (
    <BrowserRouter>
      <NavLink to="/" style={({isActive}) => ({ color: isActive ? "red" : "blue" })}>Home</NavLink>
      <NavLink to="/chat" style={({isActive}) => ({ color: isActive ? "red" : "blue" })}>Chat</NavLink>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatList />} >
          <Route path=":id" element={<Chat />} />
        </Route>
        <Route  path="#" element={<h4>404</h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
