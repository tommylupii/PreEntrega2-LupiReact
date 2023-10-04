import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
  const [quantity, setQuantity] = useState(initial)

  const sumar = () => {
    if (quantity < stock) {
      setQuantity (quantity + 1)
    }
  }

  const restar = () => {
    if (quantity > 1) {
      setQuantity (quantity - 1)
    }
  }

  return (
    <div>
      <button onClick={restar}>-</button>
      <h4>{quantity}</h4>
      <button onClick={sumar}>+</button>
      <button onClick={()=> onAdd(quantity)} disabled={!stock}>Agreagar al carrito</button>
    </div>
  )
}

export default ItemCount