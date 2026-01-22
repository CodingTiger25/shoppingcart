import React, { use } from "react";
import { useEffect, useState } from "react";

export function Product() {

  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState(0);


  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const goProductPage = (id) => {
    // Logic to navigate to product detail page
  }

  const onChange = (e, id) => {
    for(let i = 0; i < products.length; i++) {
      if(products[i].id === id) {
        products[i].quantity = e.target.value;
      }
    }  
   // setQuantity(e.target.value);
  }

  const goToProductView = (id) => {
    // Logic to navigate to product view page

    window.location.href = `/productview/${id}`;
  }

  const increment = (e) => {
    // Logic to increment product quantity in cart
    setQuantity(quantity + 1);
  }

const decrement = (id) => {
    // Logic to decrement product quantity in cart
    setQuantity(quantity - 1);
  }

  const displayProducts = () => {
    return products.map((product) => (
      <div key={product.id} className="product-list">
        <h2 onClick={() => goToProductView(product.id)}>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button>Add to Cart</button>
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
  )

}