import React from "react";
import styled from "styled-components";

const StyledNotificationTip = styled.div`
    margin: 24px auto;
    padding: 16px;
    background: ${({ theme }) => theme.colors.fadeGreen};
    border-left: 5px solid ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
`;

const NotificationTip = ({ className, children }) => {
    return (
        <StyledNotificationTip className={className}>
            <strong>Pro Tip:</strong> {children}
        </StyledNotificationTip>
    );
};

export default NotificationTip;
