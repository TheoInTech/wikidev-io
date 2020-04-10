import React from "react";
import styled from "styled-components";

const StyledTopicTitle = styled.h2`
    font-size: 1.625rem;
    line-height: 1rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
`;

interface Props {
    children: JSX.Element | JSX.Element[] | string | null;
    className?: string;
}

const TopicTitle: React.FC<Props> = ({ children, className }) => {
    return (
        <StyledTopicTitle className={className}>{children}</StyledTopicTitle>
    );
};

export default TopicTitle;
