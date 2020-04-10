import React from "react";
import styled from "styled-components";

const StyledTopicBody = styled.div`
    font-size: 1.025rem;
    line-height: 2rem;
    color: black;
`;

interface Props {
    children: JSX.Element | JSX.Element[] | string | null;
    className?: string;
}

const TopicBody: React.FC<Props> = ({ children, className }) => {
    return <StyledTopicBody className={className}>{children}</StyledTopicBody>;
};

export default TopicBody;
