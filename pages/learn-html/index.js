import React from "react";
import styled from "styled-components";
import MainLayout from "components/MainLayout";
import Searchbox from "components/Searchbox";
import Content from "components/Content";
import Sidebar from "components/Sidebar";
import Wrapper from "components/Wrapper";
import SidebarCard from "components/SidebarCard";

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin-top: 48px;
`;

const Heading = styled.h1`
    flex: 1;
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
                            title="HTML Basic"
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
                            title="HTML Advanced"
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
                            title="HTML5 Features"
                            links={[
                                {
                                    href: "/",
                                    label: "Feature 1"
                                },
                                {
                                    href: "/",
                                    label: "Feature 2"
                                },
                                {
                                    href: "/",
                                    label: "Feature 3"
                                },
                                {
                                    href: "/",
                                    label: "Feature 4"
                                },
                                {
                                    href: "/",
                                    label: "Feature 5"
                                },
                                {
                                    href: "/",
                                    label: "Feature 6"
                                },
                                {
                                    href: "/",
                                    label: "Feature 7"
                                }
                            ]}
                        />
                        <SidebarCard
                            title="Popular Examples"
                            links={[
                                {
                                    href: "/",
                                    label: "Example 1"
                                },
                                {
                                    href: "/",
                                    label: "Example 2"
                                },
                                {
                                    href: "/",
                                    label: "Example 3"
                                },
                                {
                                    href: "/",
                                    label: "Example 4"
                                },
                                {
                                    href: "/",
                                    label: "Example 5"
                                },
                                {
                                    href: "/",
                                    label: "Example 6"
                                },
                                {
                                    href: "/",
                                    label: "Example 7"
                                }
                            ]}
                        />
                    </Sidebar>
                    <Content>
                        <h2>Learn HTML</h2>
                    </Content>
                    <Sidebar></Sidebar>
                </Wrapper>
            </Container>
        </MainLayout>
    );
};
