export const GoodsCard = ({ product }) => {
  return (
    <div className="goods-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
    </div>
  );
};
