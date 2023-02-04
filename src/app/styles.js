import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  main: "#246075",
  second: "#3690b0",
};

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    list-style: none;
    
    text-decoration: none;
    font-family: Manrope;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
  }

  .main{
    min-height: calc(100vh - 140px);
    padding: 40px 0;

    text-align: center;

    @media (min-width: 992px){
      text-align: start;
    }
  }

  .container{
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;

  display: inline-block;

  background-color: ${({ disabled }) => (disabled ? "#ccc" : colors.main)};
  border: none;

  color: ${({ disabled }) => (disabled ? colors.main : "white")};
  font-size: 1.6rem;

  cursor: pointer;
  transition: all 300ms;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : colors.second)};
  }
`;
