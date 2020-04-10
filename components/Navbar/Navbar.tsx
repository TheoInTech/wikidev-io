import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledNavbar = styled.div`
    position: relative;
    top: 0;
    width: inherit;
    height: 80px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 0px 8%;
`;

const Logo = styled.div`
    justify-self: flex-start;
`;

const Menus = styled.div`
    justify-self: flex-end;
`;

const MenuLinks = styled.ul`
    padding: 0;
    list-style: none;
`;

const MenuLink = styled.li`
    display: inline-block;

    &:not(:last-child) {
        margin-right: 32px;
    }
`;

const MenuButton = styled.li`
    display: inline-block;

    &:not(:last-child) {
        margin-right: 8px;
    }
`;

const NavLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #000;

    &:active,
    &:hover,
    &__active {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const ButtonLink = styled.a`
    cursor: pointer;
    padding: 6px 32px 10px;
    display: inline-block;
    min-width: 50px;
    text-align: center;

    &:hover {
        filter: brightness(1.2);
    }
`;

const SignupLink = styled(ButtonLink)`
    background: ${({ theme }) => theme.colors.primary};
    color: white;
`;

const LoginLink = styled(ButtonLink)`
    background: ${({ theme }) => theme.colors.gray};
    color: white;
`;

const Navbar: React.FC = () => {
    return (
        <StyledNavbar>
            <Logo>
                <Link href="/">
                    <a>
                        <h2>Logo</h2>
                    </a>
                </Link>
            </Logo>
            <Menus>
                <MenuLinks>
                    <MenuLink>
                        <Link href="/">
                            <NavLink>Home</NavLink>
                        </Link>
                    </MenuLink>
                    <MenuLink>
                        <Link href="/about">
                            <NavLink>About</NavLink>
                        </Link>
                    </MenuLink>
                    <MenuLink>
                        <Link href="/forum">
                            <NavLink>Forum</NavLink>
                        </Link>
                    </MenuLink>
                    <MenuLink>
                        <Link href="/about">
                            <NavLink>Blog</NavLink>
                        </Link>
                    </MenuLink>
                    <MenuLink>
                        <Link href="contact">
                            <NavLink>Contact</NavLink>
                        </Link>
                    </MenuLink>
                    <MenuButton>
                        <Link href="signup">
                            <SignupLink>Sign up</SignupLink>
                        </Link>
                    </MenuButton>
                    <MenuButton>
                        <Link href="login">
                            <LoginLink>Login</LoginLink>
                        </Link>
                    </MenuButton>
                </MenuLinks>
            </Menus>
        </StyledNavbar>
    );
};

export default Navbar;
