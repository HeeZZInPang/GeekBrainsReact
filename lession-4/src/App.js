import './App.css';
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Chat } from './screens/Chat/Chat';
import { ChatList } from './components/ChatList/ChatList';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Profile } from './components/Profile/Profile';

const Home = () => (
  <h4>Home page</h4>
)

function App() {
  return (
    <BrowserRouter>
      <AppBar color="primary" enableColorOnDark>
        <Toolbar className="container">
          <NavLink to="/" style={({isActive}) => ({ color: isActive ? "white" : "lightgrey" })}>Home</NavLink>
          <NavLink to="/profile" style={({isActive}) => ({ color: isActive ? "white" : "lightgrey" })}>Profile</NavLink>
          <NavLink to="/chat" style={({isActive}) => ({ color: isActive ? "white" : "lightgrey" })}>Chat</NavLink>
        </Toolbar>
      </AppBar>
      <Box className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<ChatList />} >
            <Route path=":id" element={<Chat />} />
          </Route>
          <Route path="#" element={<h4>404</h4>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
