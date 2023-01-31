import { Card } from "./styles"

const Item = ({product}) => {  
  return (
    <Card to={`/detail/${product.id}`}>
      <div>
        <h3>{product.name} {product.brand}</h3>
        <h4>{product.model}</h4>
        <figure>
          <img src={product.img} alt={product.name}/>
        </figure>
        <p>Precio: <b>${product.price}</b></p>
        <p className="stock">Stock disponible: <b>{product.stock}</b></p>
      </div>
    </Card>
  )
}

export default Item