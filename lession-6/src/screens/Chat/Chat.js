import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { useDispatch, useSelector } from 'react-redux';
import { selectMessagesByChatId } from '../../store/messages/selectors';
import { addMessageWithReply } from '../../store/messages/actions';
import { AUTHORS } from "../../utils/constants";

export function Chat() {
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
    console.log(messages)
    return <Navigate to="/chat" replace />
  }

  return (
    <div className="App">
      <div>
        <MessageList messages={messages} />
        <Form onSubmit={sendMessage} />
      </div>
    </div>
  );
}