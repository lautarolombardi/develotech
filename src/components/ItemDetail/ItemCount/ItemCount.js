import { useState } from "react"

import { CountControlBtn, Main } from "./styles";

const ItemCount = ({initial, stock, onAdd}) => {
  const [counter, setCounter] = useState(initial);

  return (
    <Main>
      <div>
        <CountControlBtn disabled={ counter <= 1 } onClick={()=>{ setCounter(counter - 1) }}>-</CountControlBtn>
        <b className="counter">{counter}</b>
        <CountControlBtn disabled={counter >= stock} onClick={()=>{ setCounter(counter + 1) }}>+</CountControlBtn>
      </div>

      <button className="btn" disabled={stock <= 0} onClick={()=> { onAdd(counter) }}>Agregar al carrito</button>
    </Main>
  )
}

export default ItemCount;
