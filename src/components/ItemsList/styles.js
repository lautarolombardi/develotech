import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    text-align: center;

    @media (min-width: 992px){
        flex-direction: row;
        justify-content: space-around;
    }
`;

export const ItemsListLayout = styled.div`
    flex-basis: 85%;

    display: grid;
    place-items: center;
    gap: 20px;

    @media (min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 992px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1200px){
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: max-content;
    }
`;