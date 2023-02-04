import { Link } from "react-router-dom";
import { Button } from "../../app/styles";

import { useCartContext } from "../../contexts/CartProvider";
import ItemCart from "./ItemCart/ItemCart";

import { Main, Empty } from "./styles";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length !== 0) {
    return (
      <Main>
        <h2>Carrito de compras</h2>
        {cart.map((product) => (
          <ItemCart key={product.id} product={product} />
        ))}
        <div className="fin">
          <p className="total">
            Total: <b>${totalPrice()}</b>
          </p>
          <Link to="/checkout">
            <Button className="btn-fin">Finalizar compra</Button>
          </Link>
        </div>
      </Main>
    );
  } else {
    return (
      <Empty>
        <p>No hay elementos en el carrito</p>
        <Link to="/">
          <Button>Comprar</Button>
        </Link>
      </Empty>
    );
  }
};

export default Cart;
