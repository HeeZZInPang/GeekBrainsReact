import './Message.styles.css';

export const Message = ({author, text}) => {
    return ( 
    <div className="message">
        <span className="author">{author}: </span>
        <span>{text}</span>
    </div>
    );
} 