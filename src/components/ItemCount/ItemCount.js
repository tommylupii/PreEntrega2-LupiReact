import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const sumar = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const restar = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-count-container">
      <button
        className="action-button"
        onClick={restar}
        disabled={quantity === 1}
      >
        -
      </button>
      <h4 className="quantity">{quantity}</h4>
      <button
        className="action-button"
        onClick={sumar}
        disabled={quantity === stock}
      >
        +
      </button>
      <button
        className={`action-button ${quantity === stock ? "disabled-button" : ""}`}
        onClick={() => onAdd(quantity)}
        disabled={!stock}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;