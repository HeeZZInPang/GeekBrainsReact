import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectMessagesByChatId } from '../../store/messages/selectors';
import { addMessageWithReply } from '../../store/messages/actions';
import { AUTHORS } from "../../utils/constants";
import { Chat } from "./Chat";

export function ChatContainer() {
    const { id } = useParams();
    const getMessages = useMemo(() => selectMessagesByChatId(id), [id])
    const messages = useSelector(getMessages);
    const dispatch = useDispatch();

    const sendMessage = (text) => {
        dispatch(
            addMessageWithReply({
                author: AUTHORS.human,
                text,
                id: `msg-${Date.now()}`,
            },
                id
            )
        );
    };

    if (!messages) {
        return <Navigate to="/chat" replace />
    }

    return (
        <Chat
            messages={messages}
            sendMessage={sendMessage}>
        </Chat>
    );
}