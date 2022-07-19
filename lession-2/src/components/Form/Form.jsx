import React, {useState} from 'react';
import './Form.styles.css';

export const Form = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={handleChange} type="text" />
            <button type="submit">Send</button>
        </form>
    );
};