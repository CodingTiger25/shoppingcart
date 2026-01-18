import React, { use } from "react";
import { useEffect, useState } from "react";

export function Product() {

  const [products, setProducts] = useState([]);


  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const displayProducts = () => {
    return products.map((product) => (
      <div key={product.id}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    ));
  };

  useEffect(() => {
    getProducts();
  }, []);


  
  return (
    <div>
      <h1>Welcome to the Products Page</h1>

      {displayProducts()}
    </div>
  );
}


