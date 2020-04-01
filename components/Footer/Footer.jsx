import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledFooter = styled.footer`
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    bottom: 0;
    width: 100%;
    margin-top: 40px;
`;

const Appeal = styled.section`
    flex: 1;
    background: ${({ theme }) => theme.colors.primary};
    padding: 8px;
    text-align: center;

    > p {
        color: white;

        a {
            color: ${({ theme }) => theme.colors.offwhite};
        }
    }
`;

const FooterInner = styled.section`
    flex: 1;
    background: #0c240a;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: center;
    padding: 16px 10%;
`;

const FooterInnerBox = styled.div`
    flex: 1;

    > h4 {
        font-weight: 700;
        color: white;
        text-transform: uppercase;
    }

    > ul {
        list-style: none;
        padding-left: 0;

        > li {
            margin-top: 8px;
            margin-bottom: 8px;

            a {
                color: #ffffff99;
                text-decoration: none;

                &:hover {
                    color: #ffffff;
                }
            }
        }
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Appeal>
                <p>
                    Is this website helpful to you? Please give us a like, or
                    share your feedback to help us improve. Connect with us on{" "}
                    <Link href="#">
                        <a>Facebook</a>
                    </Link>{" "}
                    and{" "}
                    <Link href="#">
                        <a>Twitter</a>
                    </Link>{" "}
                    for the latest updates.
                </p>
            </Appeal>
            <FooterInner>
                <FooterInnerBox>
                    <h4>About Us</h4>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Our Story</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Terms of Use</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Privacy Policy</a>
                            </Link>
                        </li>
                    </ul>
                </FooterInnerBox>
                <FooterInnerBox>
                    <h4>About Us</h4>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Our Story</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Terms of Use</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Privacy Policy</a>
                            </Link>
                        </li>
                    </ul>
                </FooterInnerBox>
                <FooterInnerBox>
                    <h4>Topics</h4>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>HTML</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>CSS</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Javascript</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Python</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Data Structures</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Algorithms</a>
                            </Link>
                        </li>
                    </ul>
                </FooterInnerBox>
                <FooterInnerBox>
                    <h4>Follow Us</h4>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Facebook</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Twitter</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>LinkedIn</a>
                            </Link>
                        </li>
                    </ul>
                </FooterInnerBox>
                <FooterInnerBox>
                    <h4>Logo</h4>
                </FooterInnerBox>
            </FooterInner>
        </StyledFooter>
    );
};

export default Footer;
