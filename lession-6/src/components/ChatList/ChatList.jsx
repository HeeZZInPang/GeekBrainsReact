import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectChats } from '../../store/chats/selectors';
import { clearMessages, initMessages } from '../../store/messages/actions';
import { addChat, deleteChat } from '../../store/chats/actions';
import { Form } from '../Form/Form';
import './ChatList.styles.css';

export const ChatList = () => {
    const chats = useSelector(selectChats, shallowEqual);
    const dispatch = useDispatch();

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`
        };

        dispatch(addChat(newChat));
        dispatch(initMessages(newChat.id));
    };

    const removeChat = (id) => {
        dispatch(deleteChat(id));
        dispatch(clearMessages(id));
    };

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
                <Form onSubmit={handleSubmit} />
            </div>
            <Outlet />
        </>
    );
}