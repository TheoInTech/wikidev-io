import React from "react";
import styled from "styled-components";

const StyledContent = styled.section`
    flex: 4 0 60%;
    display: flex;
    flex-flow: row wrap;
    padding: 24px;
    background: white;
    border: 1px solid #dfdfdf;
    border-top: none;
`;

const Content = ({ children }) => {
    return <StyledContent>{children}</StyledContent>;
};

export default Content;
