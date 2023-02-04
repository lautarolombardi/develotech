import { Link } from "react-router-dom";

import styled from "styled-components";

import { colors } from "../../../app/styles";

export const Aside = styled.aside`
  height: 100%;
  margin-top: 20px 0;

  h3 {
    height: max-content;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2rem;

    span {
      margin-left: 5px;

      display: flex;
      align-items: center;
      justify-content: center;

      @media (min-width: 992px) {
        display: none;
      }
    }
  }

  hr {
    width: 70%;
    margin: 0 auto;

    @media (min-width: 992px) {
      width: 100%;
      margin: unset;
    }
  }
`;

export const Arrow = styled.span`
  height: max-content;

  display: flex;
  align-items: center;

  font-size: 1.6rem;

  transform: ${({ openFilter }) => (openFilter ? "rotateZ(-180deg)" : "0")};
  transition: all 500ms;
`;

export const Acordeon = styled.div`
  height: ${({ openFilter }) => (openFilter ? "50vh" : "0")};
  overflow: auto;

  transition: all 500ms;

  @media (min-width: 992px) {
    height: 100%;
  }

  hr {
    width: 50%;
    margin: 0 auto;

    @media (min-width: 992px) {
      width: 100%;
    }
  }
`;

export const Category = styled.div`
  margin: 20px 0;

  h4 {
    margin-bottom: 10px;
  }
`;

export const Brand = styled.div`
  margin: 20px 0;

  div {
    margin: 20px 0;

    h4 {
      margin-bottom: 10px;
    }
  }
`;

export const FilterLink = styled(Link)`
  margin-bottom: 5px;

  display: inline-block;

  color: ${colors.main};
  font-weight: 700;

  transition: all 300ms;

  &:hover {
    color: ${colors.second};
  }
`;
