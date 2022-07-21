import React, {useState, useRef, useEffect} from 'react';
import {Button, Input} from '@mui/material';
import './Form.styles.css';

export const Form = ({onSubmit}) => {
    const [value, setValue] = useState('');
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        inputRef.current?.focus();
    });

    return (
        <form onSubmit={handleSubmit}>
            <Input value={value} onChange={handleChange} type="text" inputRef={inputRef} />
            <Button type="submit" variant="outlined" >Send</Button>
        </form>
    );
};