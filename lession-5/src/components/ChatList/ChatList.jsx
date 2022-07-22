import { Button } from '@mui/material';
import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ThemeContext } from '../../utils/ThemeContext';
import './ChatList.styles.css';

const chats = [{
    id: "chat1",
    name: "Chat 1",
}, {
    id: "chat2",
    name: "Chat 2",
}, {
    id: "chat3",
    name: "Chat 3",
}];

export const ChatList = () => {

    const { changeTheme } = useContext(ThemeContext);

    return (
        <>
            <div className="chat-list">
                {chats.map((chat) => (
                    <NavLink to={`/chat/${chat.id}`} key={chat.id} style={({ isActive }) => ({ color: isActive ? "#1976d2" : "#494949" })} >
                        {chat.name}
                    </NavLink>
                ))}
                <NavLink to="#" onClick={changeTheme}>Change theme</NavLink>
            </div>
            <Outlet />
        </>
    );
}