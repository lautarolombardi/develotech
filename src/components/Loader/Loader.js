import { Container } from "./styles";

import loader from "../../assets/loader.svg";

const Loader = () => {
  return (
    <Container>
      <img src={loader} title="Loader" alt="Loader"/>
    </Container>
  )
}

export default Loader