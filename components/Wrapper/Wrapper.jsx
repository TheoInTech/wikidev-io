import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    position: relative;
    margin: 24px auto;
`;

const Wrapper = ({ children, className }) => {
    return <StyledWrapper className={className}>{children}</StyledWrapper>;
};

export default Wrapper;
