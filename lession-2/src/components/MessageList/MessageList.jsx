import {Message} from '../Message/Message';

export const MessageList = ({ messages}) => {
    return <div className="MessageList">
        {messages.map((msg) => 
            <Message author={msg.author} text={msg.text} />
        )}
    </div>
}