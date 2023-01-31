import { Link } from "react-router-dom";

import { useCartContext } from "../../contexts/CartProvider";
import ItemCart from "./ItemCart/ItemCart";

import { CartMain, Empty } from "./styles";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length !== 0) {
    return (
      <CartMain>
        {cart.map((product) => (
          <ItemCart key={product.id} product={product} />
        ))}
        <div className="fin">
          <p className="total">
            Total: <b>${totalPrice()}</b>
          </p>
          <Link to="/checkout">
            <button className="btn btn-fin">Finalizar compra</button>
          </Link>
        </div>
      </CartMain>
    );
  } else {
    return (
      <Empty>
        <p>No hay elementos en el carrito</p>
        <Link to="/">
          <button className="btn">Comprar</button>
        </Link>
      </Empty>
    );
  }
};

export default Cart;
