import styled from 'styled-components';

export const Main = styled.form`
  width: 100%;
  max-width: 80vw;

  @media (min-width: 992px){
    max-width: unset;
    flex-basis: 40%;
  }
`;