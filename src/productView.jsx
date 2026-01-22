import React, { use } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export function ProductView() {

  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [cart, setCart] = useState(0); 


    const getProducts = async () => { 
    try {
      const win = await window.location.pathname;
      const id =  await win.substring(win.lastIndexOf('/') + 1);
      const response = await fetch('https://fakestoreapi.com/products/' + id);
      
      const data = await response.json();
      console.log("This is the " + data);
      setProducts(data);
      
    }

    catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const displayProduct = () => {
    return (
      <div key={products.id} className="product-detail">
        <h2>{products.title}</h2>
        <p>{products.description}</p>
        <p>${products.price}</p>
      </div>
    );
  }
  
  
  useEffect(() => {
    getProducts();
  }, []);



  return (
    <div>
      <h1>Product Detail View</h1>
      {displayProduct()}

    </div>
  );
}