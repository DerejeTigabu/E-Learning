import React from 'react';

const Button = ({ classes, text, onClick, type = 'button' }) => {
    return (
        <button className={`btn ${classes}`} onClick={onClick} type={type}>
            {text}
        </button>
    );
};

export default Button;