import Loader from "../components/Loader/Loader";
import ItemDetail from "../components/ItemDetail/ItemDetail";

import { useGetProducts } from "../hooks/useGetProducts";

const ItemDetailContainer = () => {
  const {loading, productsList} = useGetProducts();

  return (
    <>
      { loading ? <Loader/> : <ItemDetail product={productsList}/>}
    </>
  )
}

export default ItemDetailContainer