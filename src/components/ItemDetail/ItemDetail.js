import { useState } from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../../contexts/CartProvider";
import ItemCount from "./ItemCount/ItemCount";

import { Button } from "../../app/styles";
import { Card, Main } from "./styles";

const ItemDetail = ({ product }) => {
  const { addProduct } = useCartContext();

  const [viewCartBtn, setViewCartBtn] = useState(false);

  const onAdd = (quantity) => {
    setViewCartBtn(true);
    addProduct(product, quantity);
  };

  return (
    <Main>
      <Card>
        <figure>
          <img src={product.img} alt={product.name} />
        </figure>
      
        <div className="content">
          <h3>
            {product.name} {product.brand}
          </h3>
          <p className="model">{product.model}</p>
          <p className="detail">{product.details}</p>
          {viewCartBtn ? (
            <Link to="/cart">
              <Button type="button" className="btn-view-cart">
                Ver carrito
              </Button>
            </Link>
          ) : (
            <ItemCount onAdd={onAdd} initial={1} stock={product.stock} />
          )}
          <p className="stock">
            Stock: <strong>{product.stock}</strong> unidades
          </p>
        </div>
      </Card>
    </Main>
  );
};

export default ItemDetail;
