import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>

      <h2>{product.title}</h2>
      <div className="product-price">${product.price}</div>
      <span className="product-tag">{product.category}</span>
    </article>
  );
};