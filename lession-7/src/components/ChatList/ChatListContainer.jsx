import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectChats } from '../../store/chats/selectors';
import { clearMessages, initMessages } from '../../store/messages/actions';
import { addChat, deleteChat } from '../../store/chats/actions';
import { ChatList } from './ChatList';

export const ChatListContainer = () => {
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
        <ChatList
            chats={chats}
            handleSubmit={handleSubmit}
            removeChat={removeChat}>
        </ChatList>
    );
}