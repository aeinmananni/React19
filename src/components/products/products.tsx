import { ProductItem } from "../product-item";
import products from "../../data";
import { useEffect, useState } from "react";
import { sleep } from "../../utils";

const Products = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const logData = async () => {
      await sleep(1000).then(() => {
        setIsLoading(false);
      });
    };
    logData();
  }, []);
  return (
    <>
      {isLoading ? (
        <h1>Loading Please Waite</h1>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            marginTop: 24,
          }}
        >
          {products.map((it, index) => (
            <ProductItem key={index} productName={it.name} />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
