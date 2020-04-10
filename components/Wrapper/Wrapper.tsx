import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    position: relative;
    margin: 24px auto;
`;

interface Props {
    children: JSX.Element | JSX.Element[] | string | null;
    className?: string;
}

const Wrapper: React.FC<Props> = ({ children, className }) => {
    return <StyledWrapper className={className}>{children}</StyledWrapper>;
};

export default Wrapper;
