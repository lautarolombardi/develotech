import { Button } from "../../../app/styles";
import { useCartContext } from "../../../contexts/CartProvider";

import { Grid, Row } from "./styles";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();

  return (
    <Row>
      <Grid>
        <figure>
          <img src={product.img} alt={product.name} />
        </figure>
        <div>
          <h4>
            {product.name} {product.brand}
          </h4>
          <p>{product.model}</p>
        </div>
        <div>
          <p>
            Cantidad: <b>{product.quantity}</b>
          </p>
          <p>
            <b>${product.price * product.quantity}</b>
          </p>
        </div>
        <div>
          <Button
            onClick={() => {
              removeProduct(product);
            }}
          >
            Eliminar
          </Button>
        </div>
      </Grid>
    </Row>
  );
};

export default ItemCart;
