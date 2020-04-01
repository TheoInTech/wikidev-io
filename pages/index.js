import React from "react";
import styled from "styled-components";
import MainLayout from "components/MainLayout";
import CategoryCard from "components/CategoryCard";
import FlexContent from "components/FlexContent";
import Searchbox from "components/Searchbox";
import Sidebar from "components/Sidebar";
import Wrapper from "components/Wrapper";
import SidebarCard from "components/SidebarCard";
import AdSkyscraper from "components/AdSkyscraper";

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin-top: 48px;
`;

const Heading = styled.h1`
    font-size: 3em;
    font-weight: 400;
    margin: 16px auto 32px;
`;

export default () => {
    return (
        <MainLayout>
            <Container>
                <Heading>Want to learn Software Development?</Heading>
                <Searchbox />
                <Wrapper>
                    <Sidebar>
                        <SidebarCard
                            title="Popular Topics"
                            links={[
                                {
                                    href: "/learn-html",
                                    label: "Learn HTML"
                                },
                                {
                                    href: "/",
                                    label: "Topic 2"
                                },
                                {
                                    href: "/",
                                    label: "Topic 3"
                                },
                                {
                                    href: "/",
                                    label: "Topic 4"
                                },
                                {
                                    href: "/",
                                    label: "Topic 5"
                                }
                            ]}
                        />
                        <SidebarCard
                            title="What's New?"
                            links={[
                                {
                                    href: "/",
                                    label: "Topic 1"
                                },
                                {
                                    href: "/",
                                    label: "Topic 2"
                                },
                                {
                                    href: "/",
                                    label: "Topic 3"
                                },
                                {
                                    href: "/",
                                    label: "Topic 4"
                                },
                                {
                                    href: "/",
                                    label: "Topic 5"
                                }
                            ]}
                        />
                        <SidebarCard
                            title="Top Contributors"
                            links={[
                                {
                                    href: "/",
                                    label: "Contributor 1"
                                },
                                {
                                    href: "/",
                                    label: "Contributor 2"
                                },
                                {
                                    href: "/",
                                    label: "Contributor 3"
                                },
                                {
                                    href: "/",
                                    label: "Contributor 4"
                                },
                                {
                                    href: "/",
                                    label: "Contributor 5"
                                },
                                {
                                    href: "/",
                                    label: "Contributor 6"
                                },
                                {
                                    href: "/",
                                    label: "Contributor 7"
                                }
                            ]}
                        />
                    </Sidebar>
                    <FlexContent>
                        <CategoryCard
                            icon="search"
                            title="Learn HTML"
                            link="/"
                        />
                        <CategoryCard
                            icon="search"
                            title="Learn HTML"
                            link="/"
                        />
                        <CategoryCard
                            icon="search"
                            title="Learn HTML"
                            link="/"
                        />
                        <CategoryCard
                            icon="search"
                            title="Learn HTML"
                            link="/"
                        />
                        <CategoryCard
                            icon="search"
                            title="Learn HTML"
                            link="/"
                        />
                        <CategoryCard
                            icon="search"
                            title="Learn HTML"
                            link="/"
                        />
                        <CategoryCard
                            icon="search"
                            title="Learn HTML"
                            link="/"
                        />
                        <CategoryCard
                            icon="search"
                            title="Learn HTML"
                            link="/"
                        />
                        <CategoryCard
                            icon="search"
                            title="Learn HTML"
                            link="/"
                        />
                    </FlexContent>
                    <Sidebar>
                        <AdSkyscraper />
                    </Sidebar>
                </Wrapper>
            </Container>
        </MainLayout>
    );
};
