import React from "react";
import styled from "styled-components";

const StyledPageTitle = styled.h1`
    font-size: 2.125rem;
    line-height: 1.625rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;

interface Props {
    children: JSX.Element | JSX.Element[] | string | null;
    className?: string;
}

const PageTitle: React.FC<Props> = ({ children, className }) => {
    return <StyledPageTitle className={className}>{children}</StyledPageTitle>;
};

export default PageTitle;
