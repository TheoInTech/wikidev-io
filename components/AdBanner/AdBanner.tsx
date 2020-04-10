import React from "react";
import styled from "styled-components";

const StyledAdBanner = styled.div`
    width: 728px;
    height: 90px;
    background: #428bca;
    color: #fff;
    line-height: 90px;
    text-align: center;
    margin: auto;
`;

const AdBanner: React.FC = () => {
    return <StyledAdBanner>Ad Banner</StyledAdBanner>;
};

export default AdBanner;
