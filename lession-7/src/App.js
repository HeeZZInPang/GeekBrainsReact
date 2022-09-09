import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { ChatListContainer } from './components/ChatList/ChatListContainer';
import { ChatContainer } from './screens/Chat/ChatContainer';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Profile } from './screens/Profile/Profile';
import { ThemeContext } from './utils/ThemeContext';
import { Home } from './screens/Home/Home';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }} >
      <BrowserRouter>
        <AppBar color="primary" enableColorOnDark>
          <Toolbar className="container">
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "white" : "lightgrey" })}>Home</NavLink>
            <NavLink to="/profile" style={({ isActive }) => ({ color: isActive ? "white" : "lightgrey" })}>Profile</NavLink>
            <NavLink to="/chat" style={({ isActive }) => ({ color: isActive ? "white" : "lightgrey" })}>Chat</NavLink>
          </Toolbar>
        </AppBar>
        <Box className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<ChatListContainer />} >
              <Route path=":id" element={<ChatContainer />} />
            </Route>
            <Route path="#" element={<h4>404</h4>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ ThemeContext.Provider >
  );
}

export default App;
