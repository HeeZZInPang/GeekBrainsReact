import { NavLink, Outlet } from 'react-router-dom';
import { Form } from '../Form/Form';
import './ChatList.styles.css';

export const ChatList = ({ chats, handleSubmit, removeChat }) => {
    return (
        <>
            <div className="chat-list">
                {chats.map((chat) => (
                    <div key={chat.id}>
                        <NavLink to={`/chat/${chat.id}`} style={({ isActive }) => ({ color: isActive ? "#1976d2" : "#494949" })} >
                            {chat.name}
                        </NavLink>
                        <span onClick={() => removeChat(chat.id)}>Delete</span>
                    </div>
                ))}
                <Form onSubmit={handleSubmit} width="100px" />
            </div>
            <Outlet />
        </>
    );
}