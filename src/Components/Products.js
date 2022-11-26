import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";
import "./Products.css";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const productsdata = await data.json();
      setProducts(productsdata);
    };
    fetchdata();
  }, []);

  return (
    <div className="grid " >
      {products.map((product) => {
        return (
          <div className="grid_items" key={uuidv4()}>
            <Item
              
              title={product.title.substring(0, 32)}
              price={product.price}
              image={product.image}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Products;
