import { useCart } from "../context/CartContext";
import { Product } from "../models/Product";

interface IRenderProduct {
  product: Product;
}

export const RenderProduct = (props: IRenderProduct) => {
  const { addToCart } = useCart();
  return (
    <div className="flex bg-[#f2f2f2] p-4 black-shadow w-[500px] gap-4">
      <img src={props.product.images[0]} className="h-[150px]" />
      <div className="flex flex-col justify-between items-start w-full">
        <p>{props.product.name}</p>
        <p className="text-sm mt-2">{props.product.description}</p>
        <div className="flex gap-3 self-end mt-10">
          <button
            className="bg-red-300 p-2 black-shadow"
            onClick={() => addToCart(props.product)}
          >
            ADD TO CART
          </button>
          <p className="bg-red-300 p-2 black-shadow">
            {props.product.default_price.unit_amount / 100}:-
          </p>
        </div>
      </div>
    </div>
  );
};
