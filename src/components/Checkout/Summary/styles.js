import styled from "styled-components";

import { colors } from "../../../app/styles";

export const Main = styled.section`
  height: max-content;
  width: 100%;
  max-width: 400px;
  padding: 15px;

  border: 1px solid ${colors.second};

  text-align: center;

  @media (min-width: 992px){
    max-width: unset;
    flex-basis: 35%;
  }

  h3{
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

    li {
      height: max-content;

      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
  }
`;
