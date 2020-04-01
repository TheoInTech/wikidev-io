import React from "react";
import styled from "styled-components";

const StyledNotificationNote = styled.div`
    margin: 24px auto;
    padding: 16px;
    background: ${({ theme }) => theme.colors.fadeBlue};
    border-left: 5px solid ${({ theme }) => theme.colors.blue};
    font-size: 1rem;
`;

const NotificationNote = ({ className, children }) => {
    return (
        <StyledNotificationNote className={className}>
            <strong>Take Note:</strong> {children}
        </StyledNotificationNote>
    );
};

export default NotificationNote;
