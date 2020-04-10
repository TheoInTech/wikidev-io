import React from "react";

interface Props {
    children: JSX.Element | JSX.Element[] | string | null;
    name: string;
    onClick: () => object | boolean | null;
    type: string;
    id: string | number;
    className?: string;
}

const Button: React.FC<Props> = (
    { children, name, onClick, type, id, className },
    props
) => {
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
