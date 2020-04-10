import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.aside`
    flex: 1 0 15%;
    display: flex;
    flex-flow: column wrap;
    display: inline-block;
    box-sizing: border-box;
    overflow: auto;
`;

interface Props {
    children: JSX.Element | JSX.Element[] | string | null;
}

const Sidebar: React.FC<Props> = ({ children }) => {
    return <StyledSidebar>{children}</StyledSidebar>;
};

export default Sidebar;
