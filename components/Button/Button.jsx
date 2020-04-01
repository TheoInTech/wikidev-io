import React from "react";

const Button = ({ children, name, onClick, type, id, className }, props) => {
    return (
        <button
            className={className}
            name={name}
            id={id}
            type={type}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
