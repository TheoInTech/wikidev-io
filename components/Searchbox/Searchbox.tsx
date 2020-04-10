import React from "react";
import styled from "styled-components";
import Form, { Input } from "components/Form";
import Svg from "components/Svg";

const SearchForm = styled(Form)`
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
`;

const SearchInput = styled(Input)`
    flex: 1;
    width: auto;
`;

const SearchButton = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
    position: absolute;
    right: 0;
    height: 100%;
    padding: 8px 24px;

    > svg {
        width: 24px;
        opacity: 0.5;
    }

    &:hover {
        > svg {
            opacity: 0.8;
        }
    }
`;

const Searchbox: React.FC = () => {
    return (
        <SearchForm onSubmit={(e) => alert(e)}>
            <SearchInput
                name="search"
                placeholder="How to use flexbox in CSS?"
            />
            <SearchButton type="submit">
                <Svg icon="search" />
            </SearchButton>
        </SearchForm>
    );
};

export default Searchbox;
