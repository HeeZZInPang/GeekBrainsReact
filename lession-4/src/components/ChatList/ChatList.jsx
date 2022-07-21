import { Link, Outlet } from 'react-router-dom';
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
                <Link to={`/chat/${chat.id}`} key={chat.id}>
                    {chat.name}
                </Link>
            ))}
        </div>
        <Outlet />
    </>
)