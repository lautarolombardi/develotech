import { createContext, useContext } from "react"

import { updateProduct } from "../services/products";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
  const [cart, setCart] = useLocalStorage('cart', []);

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

  const removeProduct = (product) => {
    setCart(cart.filter(i => i.id !== product.id));
    updateProduct(product.id, {stock: product.stock});
  }  

  const addProduct = (item, quantity) =>{
    if(isInCart(item.id)){
      setCart(cart.map(product => {
        return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
      }))
    } else{    
      setCart([...cart, {...item, quantity}]);
    }
    updateProduct(item.id, {stock: item.stock -= quantity});
  }

  const totalPrice = () => cart.reduce((prev, act) => prev + act.quantity * act.price, 0);

  const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

  return (
    <CartContext.Provider value={{cart, clearCart, isInCart, removeProduct, addProduct, totalPrice, totalProducts}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;