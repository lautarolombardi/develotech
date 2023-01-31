import CartProvider from "./contexts/CartProvider";
import Router from "./app/Router";

import { GlobalStyles } from "../src/app/styles";

const App = () => (
  <CartProvider>
    <GlobalStyles />
    <Router />
  </CartProvider>
);

export default App;
