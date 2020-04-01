import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px auto;
    border-top: 1px solid #dfdfdf;
`;

const Wrapper = ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
