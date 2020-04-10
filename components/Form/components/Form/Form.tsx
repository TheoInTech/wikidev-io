import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    margin: 0 0 24px 0;

    &:last-child {
        margin-bottom: 0;
    }
`;

interface Props {
    children: JSX.Element | JSX.Element[] | string | null;
    className?: string;
    onSubmit?: () => object | boolean | null;
    id: number;
}

const Form: React.FC<Props> = ({ children, onSubmit, id, className }) => {
    return (
        <StyledForm onSubmit={onSubmit} id={id} className={className}>
            {children}
        </StyledForm>
    );
};

export default Form;
