import React, { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="container">
      <section className="section">
        <div className="container">
          <h1 className="title is-3">{greeting}</h1>
          <ItemList products={products} />
        </div>
      </section>
    </div>
  );
};

export default ItemListContainer;
