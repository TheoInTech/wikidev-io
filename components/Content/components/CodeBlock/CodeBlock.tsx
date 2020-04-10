import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwlLight";
import styled from "styled-components";

const Pre = styled.pre`
    text-align: left;
    margin: 1em 0;
    border: ${({ theme }) => theme.border};
    border-left: 5px solid ${({ theme }) => theme.colors.primary};

    & .token-line {
        line-height: 1.3em;
        height: 1.3em;
        padding: 0.25em;

        &:nth-child(even) {
            background: #f1f1f1;
        }

        &:nth-child(odd) {
            background: #fdfdfd;
        }
    }
`;

const LineNo = styled.span`
    display: inline-block;
    width: 2em;
    user-select: none;
    opacity: 0.3;
`;

interface Props {
    children: string | null;
    language: Language;
}

const CodeBlock: React.FC<Props> = ({ children, language }) => {
    return (
        <Highlight
            {...defaultProps}
            code={children}
            language={language}
            theme={theme}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            <LineNo>{i + 1}</LineNo>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </Pre>
            )}
        </Highlight>
    );
};

export default CodeBlock;
