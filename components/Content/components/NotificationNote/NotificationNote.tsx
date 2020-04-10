import React from "react";
import styled from "styled-components";

const StyledNotificationNote = styled.div`
    margin: 24px auto;
    padding: 8px 16px;
    line-height: 1.825rem;
    background: ${({ theme }) => theme.colors.fadeBlue};
    border-left: 5px solid ${({ theme }) => theme.colors.blue};
    font-size: 1rem;
`;

interface Props {
    children: JSX.Element | JSX.Element[] | string | null;
    className?: string;
}

const NotificationNote: React.FC<Props> = ({ className, children }) => {
    return (
        <StyledNotificationNote className={className}>
            <strong>Take Note:</strong> {children}
        </StyledNotificationNote>
    );
};

export default NotificationNote;
