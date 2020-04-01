import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.aside`
    flex: 1 0 20%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
`;

const Sidebar = ({ children }) => {
    return <StyledSidebar>{children}</StyledSidebar>;
};

export default Sidebar;
