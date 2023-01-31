import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { colors } from "../../app/styles";

export const Main = styled.nav`
  height: 70px;

  background-color: ${colors.main};
  border-bottom: 5px solid ${colors.second};
`;

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled(NavLink)`
  height: 100%;

  img{
    height: 100%;
  }
`;

export const Cart = styled(NavLink)`
  height: max-content;

  display: flex;
  align-items: center;

  color: white;
  font-size: 2rem;

  b{
    margin-left: 10px;
  }
`;
