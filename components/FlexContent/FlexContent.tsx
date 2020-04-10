import React from "react";
import styled from "styled-components";
import Content from "components/Content";

const StyledContent = styled.section`
    display: flex;
    flex-flow: row wrap;
`;

interface Props {
    children: JSX.Element | JSX.Element[] | string | null;
    className?: string;
}

const FlexContent: React.FC<Props> = ({ children, className }) => {
    return (
        <Content>
            <StyledContent className={className}>{children}</StyledContent>
        </Content>
    );
};

export default FlexContent;
