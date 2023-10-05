import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="item">
      <header>
        <h2 className="item-title">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="item-image" />
      </picture>
      <section>
        <p className="item-price">Precio: ${price}</p>
        <p>Stock disponible: {stock}</p>
      </section>
      <footer>
        <Link to={`/item/${id}`}>Ver detalle</Link>
      </footer>
    </article>
  );
};

export default Item;