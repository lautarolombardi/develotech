import { useEffect } from "react";

import { useLoader } from "../hooks/useLoader";

import Loader from "../components/Loader/Loader";
import Checkout from "../components/Checkout/Checkout";

const CheckoutContainer = () => {
  const { loading, setLoading } = useLoader(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [setLoading]);

  return <>{loading ? <Loader /> : <Checkout />}</>;
};

export default CheckoutContainer;
