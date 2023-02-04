import styled from "styled-components";

import { colors } from "../../app/styles";

export const Main = styled.div`
  h2 {
    margin-bottom: 20px;
  }

  h3 {
    span {
      margin: 0 10px;

      @media (min-width: 992px){
        margin: 0;
      }

      b {
        color: ${colors.second};
      }
    }

    span:first-child{
      margin-right: 10px;
    }

    .opacity{
      opacity: .3;
    }
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 992px){
    flex-direction: row;
    justify-content: space-between;
    align-items: unset;
  }

  .loader{
    height: calc(100vh - 339px);
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 80vw;
  margin: 20px 0;

  @media (min-width: 992px){
    max-width: unset;
    flex-basis: 60%;
  }

  .btns{
    height: max-content;
    margin-top: 40px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 992px){
      justify-content: start;
    }

    .reset {
      margin-right: 20px;
    }
  }
`;

export const Row = styled.div`
  margin-bottom: 20px;

  input {
    height: 35px;
    width: 100%;
    margin-top: 10px;
    padding: 5px;

    display: block;

    font-size: 1.6rem;

    &:focus {
      border: 2px solid ${colors.main};
      outline: none;
    }
  }

  .valid {
    border: 1px solid #198754;
  }

  .invalid {
    border: 1px solid #dc3545;
  }
`;

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0,0,0,.5);

  div{
    height: 60vh;
    max-height: 270px;
    width: 90%;
    max-width: 450px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    background-color: white;

    text-align: center;

    .icon{
      margin-bottom: 10px;

      font-size: 5rem;
      color: ${colors.main};
    }

    p{
      margin-top: 10px;

      line-height: 3rem;
    }

    button{
      margin-top: 20px;
    }
  }
`;
