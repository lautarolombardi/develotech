import { Link } from "react-router-dom";

import styled from "styled-components";

import { colors } from "../../../app/styles";

export const Card = styled(Link)`
  height: 100%;
  width: 100%;
  max-width: 280px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px solid ${colors.main};

  color: black;

  transition: all 500ms;

  &:hover {
    box-shadow: 0 0 10px #444;
  }

  @media (min-width: 768px){
    max-width: 100%;
  }

  h3 {
    margin-bottom: 5px;
  }

  h4, p{
    font-weight: 400;
  }

  figure {
    width: 120px;
    margin: 30px auto;

    img {
      width: 100%;
    }
  }

  .stock{
    margin-top: 5px;
  }
`;
