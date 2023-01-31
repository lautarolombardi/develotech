import styled from "styled-components";
import { colors } from "../../app/styles";

export const Main = styled.div`
  h2 {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 10px;

    span {
      margin-right: 10px;

      b {
        color: ${colors.main};
      }
    }
  }
`;

export const ContactSpan = styled.span`
  opacity: ${({ payStep }) => (payStep ? ".3" : "1")};
`;

export const PaySpan = styled.span`
  opacity: ${({ payStep }) => (payStep ? "1" : ".3")};
`;

export const Container = styled.div`
  margin: 20px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: unset;
  }

  .loader {
    height: calc(100vh - 349px);
    width: 100%;
    max-width: 80vw;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 992px) {
      max-width: unset;
      flex-basis: 60%;
    }
  }
`;

export const Modal = styled.div`
  height: 100vh;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);

  text-align: center;

  div {
    height: max-content;
    width: 90%;
    max-width: 450px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: white;

    .icon {
      margin-bottom: 10px;

      font-size: 5rem;
      color: ${colors.main};
    }

    h4 {
      font-size: 1.8rem;
    }

    p{
      margin: 20px 0;

      line-height: 3rem;
    }
  }
`;
