import { ICartItem, useCart } from "../context/CartContext";
import { PiTrashThin } from "react-icons/pi";

interface IRenderCartItem {
  CartItem: ICartItem;
}

export const RenderCartItem = (props: IRenderCartItem) => {
  const { removeFromCart } = useCart();
  return (
    <div className="flex bg-white p-3 border border-black gap-1 relative">
      <button onClick={() => removeFromCart(props.CartItem.product)}>
        <PiTrashThin className="text-xl" />
      </button>
      <p>{props.CartItem.product.name}</p>
      <p className="font-bold absolute right-2">{props.CartItem.quantity}st</p>
    </div>
  );
};
