import styled from "styled-components";

export const CartMain = styled.div`
  .fin {
    margin-top: 20px;

    text-align: center;

    .btn-fin {
      margin-top: 20px;
    }
  }
`;

export const Empty = styled.div`
  height: calc(100vh - 220px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 20px;
  }
`;
