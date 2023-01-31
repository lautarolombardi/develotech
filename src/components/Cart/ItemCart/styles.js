import styled from "styled-components";

import { colors } from "../../../app/styles";

export const Row = styled.div`
    height: 200px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid ${colors.main};

    @media (min-width: 768px){
        height: 150px;

        border: none;
    }
`;

export const Grid = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, max-content);
    place-items: center;
    row-gap: 5px;

    @media (min-width: 768px){
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: unset;
    }

    figure{
        max-width: 100px;

        img{
            width: 100%;
        }
    }

    h4{
        margin-bottom: 5px;

        font-size: 1.7rem;

        @media (min-width: 768px){
            font-size: 1.8rem;
        }
    }

    p{
        font-size: 1.6rem;
    }

    button{
        padding: 5px 10px;
    }
`;
