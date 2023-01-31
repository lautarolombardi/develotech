import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import ItemsListContainer from '../pages/ItemsListContainer';
import ItemDetailContainer from '../pages/ItemDetailContainer';
import CartContainer from "../pages/CartContainer";
import Checkout from "../pages/CheckoutContainer";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<ItemsListContainer/>}></Route>
          <Route path='/category/:category' element={<ItemsListContainer/>}></Route>
          <Route path='/brand/:brand' element={<ItemsListContainer/>}></Route>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<CartContainer/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;