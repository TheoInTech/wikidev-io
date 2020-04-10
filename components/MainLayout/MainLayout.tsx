import React from "react";
import styled from "styled-components";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import AdBanner from "components/AdBanner";
import Searchbox from "components/Searchbox";

const StyledLayout = styled.main`
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    box-sizing: border-box;
`;

const Content = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin-top: 48px;
    padding: 0px 8%;
`;

const Heading = styled.h1`
    font-size: 3em;
    font-weight: 400;
    margin: 16px auto 32px;
`;

interface Props {
    children: JSX.Element | JSX.Element[] | string | null;
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <StyledLayout>
            <Navbar />

            <Content>
                <Heading>What do you want to learn today?</Heading>
                <Searchbox />
                {children}
            </Content>
            <AdBanner />

            <Footer />
        </StyledLayout>
    );
};

export default MainLayout;
