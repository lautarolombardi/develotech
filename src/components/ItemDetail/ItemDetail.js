import { useState } from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../../contexts/CartProvider";

import { useLoader } from "../../hooks/useLoader";

import ItemCount from "./ItemCount/ItemCount";

import { Button } from "../../app/styles";
import { Card, Flex, Main } from "./styles";

import loader from "../../assets/loader.svg";

const ItemDetail = ({ product }) => {
  const { addProduct } = useCartContext();

  const { loading, setLoading } = useLoader(true);
  const [viewCartBtn, setViewCartBtn] = useState(false);

  const onAdd = (quantity) => {
    setViewCartBtn(true);
    addProduct(product, quantity);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  };

  return (
    <Main>
      <h2>Detalle del producto</h2>
      <Flex>
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
            <p className="price">Precio: <b>${product.price}</b></p>
            {viewCartBtn ? (
              loading ? (
                <div className="loader"><img src={loader} alt="Loader" /></div>
              ) : (
                <Link to="/cart">
                  <Button type="button" className="view-cart-btn">
                    Ver carrito
                  </Button>
                </Link>
              )
            ) : (
              <ItemCount onAdd={onAdd} initial={1} stock={product.stock} />
            )}
            <p className="stock">
              Stock: <strong>{product.stock}</strong> unidades
            </p>
          </div>
        </Card>
      </Flex>
    </Main>
  );
};

export default ItemDetail;
