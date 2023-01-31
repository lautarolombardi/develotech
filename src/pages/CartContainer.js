import Loader from "../components/Loader/Loader";
import Cart from "../components/Cart/Cart";

import { useLoader } from "../hooks/useLoader";

const CartContainer = () => {
  const {loading, setLoading} = useLoader(true);

  setTimeout(()=> {
    setLoading(false);
  }, 1000);

  return (
    <>
      { loading ? <Loader/> : <Cart/> }
    </>
  )
}

export default CartContainer;