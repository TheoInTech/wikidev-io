import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
    flex: 1;

    &:first-child {
        margin-top: 24px;
    }
`;

const Header = styled.h4`
    font-weight: 600;
    font-size: 16px;
    margin: 8px 32px 8px 0;
    text-transform: uppercase;
`;

const Border = styled.div`
    border-top: 5px solid ${({ theme }) => theme.colors.primary};
    position: relative;
    top: 0;
    width: 80px;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

const ListItem = styled.li`
    margin: 8px 0;

    > a {
        color: #00000099;
        text-decoration: none;

        &:hover {
            color: #000;
        }
    }
`;

const SidebarCard = ({ title, links }) => {
    return (
        <Container>
            <Header>{title}</Header>
            <Border />
            <List>
                {links.map(link => (
                    <ListItem>
                        <Link href={link.href}>
                            <a>{link.label}</a>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default SidebarCard;
