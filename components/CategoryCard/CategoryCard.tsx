import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Svg from "components/Svg";

const CategoryLink = styled.a`
    flex: 0 0 33.33%;
    position: relative;
    z-index: 1;
    cursor: pointer;
`;

const StyledCategoryCard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 40px;

    &:hover {
        background: ${({ theme }) => theme.colors.offwhite};
        box-shadow: 0 3px 5px 0 #00000011;
    }

    svg {
        width: 40px;
        fill: ${({ theme }) => theme.colors.primary};
    }

    > p {
        font-size: 18px;
    }
`;

interface Props {
    link: string;
    target?: string;
    title: string;
    icon: string;
}

const CategoryCard: React.FC<Props> = ({ link, target, title, icon }) => {
    return (
        <Link href={link}>
            <CategoryLink>
                <StyledCategoryCard>
                    <Svg icon={icon} />
                    <p>{title}</p>
                </StyledCategoryCard>
            </CategoryLink>
        </Link>
    );
};

export default CategoryCard;
