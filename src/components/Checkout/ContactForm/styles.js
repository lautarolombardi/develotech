import styled from "styled-components";

export const Main = styled.form`
  width: 100%;
  max-width: 80vw;

  @media (min-width: 992px){
    max-width: unset;
    flex-basis: 60%;
  }
`;

export const Row = styled.div`
  margin-bottom: 20px;

  input {
    height: 40px;
    width: 100%;
    margin-top: 10px;
    padding: 5px;

    display: block;

    font-size: 1.6rem;

    &:focus {
      outline: none;
    }
  }

  .valid {
    border: 1px solid #198754;
  }

  .invalid{
    border: 1px solid #d9534f;
  }
`;

export const Btns = styled.div`
  margin-top: 30px;

  .reset{
    margin-right: 10px;

    @media (min-width: 992px){
      margin-right: 20px;
    }
  }
`;
