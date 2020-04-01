import React from "react";
import styled from "styled-components";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

const StyledLayout = styled.main`
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    box-sizing: border-box;
`;

const Content = styled.div`
    padding: 0px 8%;
`;

const MainLayout = ({ children }) => {
    return (
        <StyledLayout>
            <Navbar />
            <Content>{children}</Content>
            <Footer />
        </StyledLayout>
    );
};

export default MainLayout;
