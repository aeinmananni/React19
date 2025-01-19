type ProductItemProps = {
  productName: string;
};

const ProductItem = ({ productName }: ProductItemProps) => {
  return <>{<span>{productName}</span>}</>;
};

export default ProductItem;
