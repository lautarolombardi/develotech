import styled from "styled-components";

import { colors } from "../../app/styles";

export const Main = styled.footer`
    height: 70px;

    background-color: ${colors.main};
    border-top: 5px solid ${colors.second};
`;

export const Container = styled.div`
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
`;