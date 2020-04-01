import App from "next/app";
import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import SegoeUI from "assets/fonts/Segoe UI.woff";
import SegoeUIBold from "assets/fonts/Segoe UI Bold.woff";
import SegoeUIItalic from "assets/fonts/Segoe UI Italic.woff";
import SegoeUIBoldItalic from "assets/fonts/Segoe UI Bold Italic.woff";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Segoe UI Regular';
        font-style: normal;
        font-weight: normal;
        src: url(${SegoeUI}) format('woff');
    }


    @font-face {
        font-family: 'Segoe UI Italic';
        font-style: normal;
        font-weight: normal;
        src: url(${SegoeUIItalic}) format('woff');
    }


    @font-face {
        font-family: 'Segoe UI Bold';
        font-style: normal;
        font-weight: normal;
        src: url(${SegoeUIBold}) format('woff');
    }


    @font-face {
        font-family: 'Segoe UI Bold Italic';
        font-style: normal;
        font-weight: normal;
        src: url(${SegoeUIBoldItalic}) format('woff');
    }

    html, body {
        margin: 0;
        padding: 0;
        font-family: "Segoe UI";
        background: ${({ theme }) => theme.colors.offwhite};
    }

    * {
        transition-duration: 300ms;
    }
`;

const theme = {
    colors: {
        offwhite: "#FAFAFA",
        primary: "#ff8d00",
        secondary: "#ff8d0033"
    }
};

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}
