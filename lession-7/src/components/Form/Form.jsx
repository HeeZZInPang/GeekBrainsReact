import React, { useState, useRef, useEffect } from 'react';
import { Button, Input } from '@mui/material';
import './Form.styles.css';

export const Form = ({ onSubmit, width = "100%" }) => {
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
            <Input
                type="text"
                value={value}
                onChange={handleChange}
                inputRef={inputRef}
                style={{ width: width }}
            />
            <Button type="submit" variant="outlined" >Send</Button>
        </form>
    );
};