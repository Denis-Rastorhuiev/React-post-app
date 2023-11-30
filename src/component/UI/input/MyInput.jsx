import React from 'react';
import classes from "./MyInput.module.css";

const MyInput = ({ type, placeholder, value, onChange,className }) => {
    return (
        <input
            className={classes[className]}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={event=> onChange(event.target.value)}
        />
    );
};

export default MyInput;