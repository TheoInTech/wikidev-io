import React from "react";
import styled from "styled-components";

const StyledNotificationTip = styled.div`
    margin: 24px auto;
    padding: 8px 16px;
    line-height: 1.825rem;
    background: ${({ theme }) => theme.colors.fadeGreen};
    border-left: 5px solid ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
`;

interface Props {
    children: JSX.Element | JSX.Element[] | string | null;
    className?: string;
}

const NotificationTip: React.FC<Props> = ({ className, children }) => {
    return (
        <StyledNotificationTip className={className}>
            <strong>Pro Tip:</strong> {children}
        </StyledNotificationTip>
    );
};

export default NotificationTip;
