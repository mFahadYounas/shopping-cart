import currencyFormatter from "../../utils/currencyFormatter";
import axios from "../../api/axios";
import Card from "../Card/Card";
import "./ProductGrid.css";
import { useEffect, useState } from "react";

const PRODUCTS_URL = "products";

type productsType = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  brand: string;
  storage: string;
  resolution: string;
  games_included: number;
  [id: string]: string | number;
};

function ProductGrid() {
  const [products, setProducts] = useState<productsType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(PRODUCTS_URL, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="productGrid">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          imgSrc={product.image}
          productInfo={product.name}
          productPrice={currencyFormatter(product.price)}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
