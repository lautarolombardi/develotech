import styled from "styled-components";

import { colors } from "../../app/styles";

export const Main = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-height: 768px) and (min-width: 992px) {
    height: calc(100vh - 273px);
  }
`;

export const Card = styled.div`
  max-width: 700px;
  padding: 20px;

  border: 2px solid ${colors.second};

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  figure {
    flex-basis: 40%;

    img {
      max-width: 250px;
    }
  }

  .content{
    flex-basis: 50%;

    h3{
      margin-bottom: 10px;
    }

    .detail{
      margin: 20px 0;

      line-height: 30px;
    }

    .view-cart-btn{
      margin: 20px 0;
    }
  }
`;

