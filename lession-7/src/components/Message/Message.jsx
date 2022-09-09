import './Message.styles.css';
import PropTypes from 'prop-types'
import { ThemeContext } from '../../utils/ThemeContext';
import { useContext } from 'react';

export const Message = ({ author, text }) => {
    const theme = useContext(ThemeContext);
    console.log(theme)
    return (
        <div className="message">
            <span className="author">{author}: </span>
            <span>{text}</span>
        </div>
    );
}

Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string,
}