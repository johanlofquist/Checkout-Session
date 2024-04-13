import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../models/Product";

export interface ICartItem {
  product: Product;
  quantity: number;
}

interface ICartContext {
  cart: ICartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  totalPrice: number;
}

const initialValues = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  totalPrice: 0,
};

const CartContext = createContext<ICartContext>(initialValues);
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState<ICartItem[]>(() => {
    const lsData = localStorage.getItem("cart");
    return lsData ? JSON.parse(lsData) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const calcTotal = () => {
      let total = 0;
      cart.map(
        (item) =>
          (total =
            total + item.product.default_price.unit_amount * item.quantity)
      );
      setTotalPrice(total / 100);
    };
    calcTotal();
  }, [cart]);

  const addToCart = (product: Product) => {
    const clonedCart = [...cart];

    const productExists = clonedCart.find(
      (item) => item.product.id === product.id
    );
    if (productExists) {
      productExists.quantity++;
      setCart(clonedCart);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
    console.log(cart);
  };

  const removeFromCart = (product: Product) => {
    const clonedCart = [...cart];
    const productExists = clonedCart.find(
      (item) => item.product.id === product.id
    );
    if (productExists) {
      setCart(clonedCart.filter((item) => item.product.id !== product.id));
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
