import { useEffect, useState } from "react";
import { getProducts } from "../services/stripeService";
import { Product } from "../models/Product";
import { RenderProduct } from "../components/RenderProduct";

export const Shop = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const loadProducts = async () => {
      const productsInStripe = await getProducts();
      setProducts(productsInStripe.data);
    };
    loadProducts();
  }, []);

  return (
    <div className="bg-[--mustard] flex flex-col justify-center items-center gap-10 py-20">
      {products?.map((product) => (
        <RenderProduct key={product.id} product={product} />
      ))}
    </div>
  );
};
