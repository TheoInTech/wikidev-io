import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    background: white;
    padding: 20px;
    border: 1px solid #ececec;
    box-sizing: border-box;
    width: 100%;
    font-size: 18px;

    &::placeholder {
        color: #b2b2b2;
    }

    &:hover,
    &:active,
    &:focus {
        border-color: #b2b2b2;
        outline: none;
    }
`;

interface Props {
    className?: string;
    id: number | string;
    name: string;
    placeholder: string;
}

const Input: React.FC<Props> = (
    { id, name, placeholder, className },
    props
) => {
    return (
        <StyledInput
            id={id}
            name={name}
            placeholder={placeholder}
            className={className}
            {...props}
        />
    );
};

export default Input;
