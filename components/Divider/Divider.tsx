import React from "react";
import styled from "styled-components";

const StyledDivider = styled.hr`
    border: 0;
    border-bottom: 1px dashed #dfdfdf;
    margin: 40px auto;
`;

const Divider: React.FC = () => {
    return <StyledDivider />;
};

export default Divider;
