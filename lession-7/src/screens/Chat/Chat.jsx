import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";

export function Chat({ messages, sendMessage }) {
  return (
    <div className="App">
      <div>
        <MessageList messages={messages} />
        <Form onSubmit={sendMessage} />
      </div>
    </div>
  );
}