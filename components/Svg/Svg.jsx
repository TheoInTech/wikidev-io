import React from "react";
import SVG from "react-inlinesvg";
import styled from "styled-components";
import icons from "./svgManifest";

const StyledSvg = styled(SVG)`
    display: inline-block;
    width: 16px;

    svg {
        display: block;
        width: 100%;
        height: auto;
    }
`;

const Svg = ({ icon }) => {
    if (icon && icon !== "") return <StyledSvg src={icons[icon]} />;
    return null;
};

export default Svg;
