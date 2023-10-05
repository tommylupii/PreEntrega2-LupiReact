import React from "react";
import ItemCount from "../components/ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <article className="item-detail">
      <header>
        <h2 className="item-detail-header">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="item-detail-image" />
      </picture>
      <section className="item-detail-section">
        <p className="item-detail-category">Categoría: {category}</p>
        <p className="item-detail-description">Descripción: {description}</p>
        <p className="item-detail-price">Precio: ${price}</p>
      </section>
      <footer>
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
      </footer>
    </article>
  );
};

export default ItemDetail;
