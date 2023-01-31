import styled from "styled-components";

import { colors } from "../../app/styles";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-height: 800px) and (min-width: 992px){
    height: calc(100vh - 140px);
  }
`;

export const Card = styled.div`
  max-width: 400px;
  padding: 20px;

  border: 2px solid ${colors.main};

  text-align: center;

  @media (min-width: 992px) {
    height: 380px;
    max-width: 630px;

    display: grid;
    grid-template-columns: 40% 60%;
    place-items: center;
    gap: 20px;
  }

  figure {
    margin: 0 auto;

    img{
      width: 70%;
      max-width: 170px;
      margin-bottom: 20px;

      @media (min-width: 992px){
        width: 90%;
        max-width: unset;
        margin-bottom: unset;
      }
    }
  }

  .content {
    h3 {
      margin-bottom: 5px;

      font-size: 2rem;
    }

    .model{
      font-size: 1.6rem;
    }

    .detail {
      margin-top: 20px;

      line-height: 30px;
    }

    .btn-view-cart {
      margin: 20px 0;
    }
  }
`;
