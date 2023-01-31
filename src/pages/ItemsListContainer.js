import Loader from "../components/Loader/Loader";
import ItemsList from "../components/ItemsList/ItemsList";

import { useGetProducts } from "../hooks/useGetProducts";

const ItemsListContainer = () => {
  const { loading, productsList } = useGetProducts();

  return <>{loading ? <Loader /> : <ItemsList productsList={productsList} />}</>;
};

export default ItemsListContainer;
