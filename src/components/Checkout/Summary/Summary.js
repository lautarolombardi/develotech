import { useCartContext } from "../../../contexts/CartProvider";

import { Main } from "./styles";

const Summary = () => {
  const { cart } = useCartContext();

  return (
    <Main>
      <h3>Resumen de compra</h3>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <span>{product.quantity}</span>
            <h4>{product.brand} {product.model}</h4>
            <span>${product.price * product.quantity}</span>
          </li>
        ))}
      </ul>
    </Main>
  );
};

export default Summary;
