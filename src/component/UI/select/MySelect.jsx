import React from 'react';
import cl from './MySelect.module.css'

const MySelect = ({options, defaultOption, value,onChange,className}) => {
    return (
        <select
            className={cl[className]}
            value={value}
            onChange={event=> onChange(event.target.value)}>
            <option disabled value={''} hidden>{defaultOption}</option>
            {options.map(option =>
            <option key={option.value} value={option.value}>{option.text}</option>
            )}
        </select>
    );
};

export default MySelect;