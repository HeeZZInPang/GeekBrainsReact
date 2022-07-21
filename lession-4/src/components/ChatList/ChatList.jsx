import { NavLink, Outlet } from 'react-router-dom';
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

export const ChatList = () => (
    <>
        <div className="chat-list">
            {chats.map((chat) => (
                <NavLink to={`/chat/${chat.id}`} key={chat.id} style={({isActive}) => ({ color: isActive ? "#1976d2" : "#494949" })} >
                    {chat.name}
                </NavLink>
            ))}
        </div>
        <Outlet />
    </>
)