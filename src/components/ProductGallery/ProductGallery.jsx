import { useEffect, useState } from 'react';
import { GoodsCard } from '../GoodsCard/GoodsCard';
import { getProducts } from '../../helper/api';
import './ProductGallery.css';

export const ProductGallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => {
        console.log(response)
        setProducts(response)
      });
  }, []);

  return (
    <div className="product-gallery">
      {products.map((product, index) => (
        <GoodsCard key={index} product={product} />
      ))}
    </div>
  );
};