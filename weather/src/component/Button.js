import React from 'react';
import "../assets/styles/components/Button.css";

const Button = ({ text }) => {
    return (
        <button className="button" >{text}</button>
    )
}

export default Button;