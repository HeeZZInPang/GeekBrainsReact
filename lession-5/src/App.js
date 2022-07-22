import './App.css';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Chat } from './screens/Chat/Chat';
import { ChatList } from './components/ChatList/ChatList';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Profile } from './components/Profile/Profile';
import { ThemeContext } from './utils/ThemeContext';
import { store } from './store';

const Home = () => (
  <h4>Home page</h4>
)

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Provider store={store}>
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
              <Route path="/chat" element={<ChatList />} >
                <Route path=":id" element={<Chat />} />
              </Route>
              <Route path="#" element={<h4>404</h4>} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ ThemeContext.Provider >
    </Provider>
  );
}

export default App;
