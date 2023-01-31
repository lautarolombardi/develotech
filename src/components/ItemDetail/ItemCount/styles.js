import styled from "styled-components";

import { colors } from "../../../app/styles";

export const Main = styled.div`
  margin: 20px 0;

  div {
    margin: 20px 0;
  }
`;

export const CountControlBtn = styled.button`
  margin: 0 10px;
  padding: 8px 15px;

  border: none;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : colors.main)};

  color: ${({ disabled }) => (disabled ? colors.main : "#ccc")};

  cursor: pointer;
  transition: all 300ms;

  &:hover {
    background-color: ${colors.second};
    color: white;
  }
`;
