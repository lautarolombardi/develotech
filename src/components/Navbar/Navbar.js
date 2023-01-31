import { useCartContext } from "../../contexts/CartProvider";

import logo from "../../assets/img/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Brand, Cart, Container, Main } from "./styles";

const Navbar = () => {
  const { totalProducts } = useCartContext();

  return (
    <Main>
      <Container className="container">
        <Brand to="/">
          <img src={logo} alt="Logo" title="Logo" />
        </Brand>

        <Cart to="/cart">
          <FaShoppingCart />
          <b>{ totalProducts() || "" }</b>
        </Cart>
      </Container>
    </Main>
  );
};

export default Navbar;
