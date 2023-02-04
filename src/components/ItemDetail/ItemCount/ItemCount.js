import { useState } from "react"

import { Button } from "../../../app/styles";
import { ControlBtns, Main } from "./styles";

const ItemCount = ({initial, stock, onAdd}) => {
  const [counter, setCounter] = useState(initial);

  return (
    <Main>
      <ControlBtns>
        <Button disabled={ counter <= 1 } onClick={()=>{ setCounter(counter - 1) }}>-</Button>
        <b className="counter">{counter}</b>
        <Button disabled={counter >= stock} onClick={()=>{ setCounter(counter + 1) }}>+</Button>
      </ControlBtns>

      <Button disabled={stock <= 0} onClick={()=> { onAdd(counter) }}>Agregar al carrito</Button>
    </Main>
  )
}

export default ItemCount;
