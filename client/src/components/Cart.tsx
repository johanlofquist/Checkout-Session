import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { RenderCartItem } from "./RenderCartItem";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useUser } from "../context/UserContext";
import { checkout } from "../services/stripeService";
import postnord from "../assets/postnord.webp";
import { ChangeEvent, useState } from "react";
import { findServiceCenter } from "../services/postNordService";

interface ICart {
  toggleCart: () => void;
}

export const Cart = (props: ICart) => {
  const { cart, totalPrice } = useCart();
  const { isLoggedIn, user } = useUser();
  const [postalCodeInput, setPostalCodeInput] = useState("");
  const [serviceCenters, setServiceCenter] = useState();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostalCodeInput(e.target.value);
  };

  const handleClick = async () => {
    console.log(postalCodeInput);
    let serviceCenters = await findServiceCenter(postalCodeInput);
    setServiceCenter(serviceCenters);
  };

  const handleCheckout = async () => {
    const response = await checkout(cart, user?.stripeId);
    localStorage.setItem("sessionId", JSON.stringify(response.sessionId));
    window.location = response.url;
  };
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      exit={{ x: 500 }}
      className="fixed right-0 top-0 bg-[#f2f2f2] h-[100dvh] w-[500px] z-50 border border-black black-shadow p-5 pt-14 flex flex-col gap-5"
    >
      <MdOutlineKeyboardArrowRight
        className="absolute top-1 right-1 text-5xl cursor-pointer"
        onClick={props.toggleCart}
      />
      {cart.map((cartItem) => (
        <RenderCartItem CartItem={cartItem} />
      ))}
      {cart.length > 0 ? (
        <div className="absolute bottom-10 self-center">
          <p>Total: {totalPrice}:-</p>
          {isLoggedIn ? (
            <>
              <div className="bg-white p-4 w-[400px] my-4 flex flex-col gap-5 border border-black black-shadow">
                <p>Find your nearest service center</p>
                <img src={postnord} className="w-[100px]" />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Postalcode"
                    className="border border-black p-2"
                    value={postalCodeInput}
                    onChange={handleInputChange}
                  />
                  <button
                    className="py-2 px-4 border border-black black-shadow"
                    onClick={handleClick}
                  >
                    Find
                  </button>
                </div>
              </div>
              <button
                className="bg-green-300 black-shadow p-5 border border-black"
                onClick={handleCheckout}
              >
                CHECKOUT
              </button>
            </>
          ) : (
            <p className="bg-white black-shadow p-5 border border-black">
              Please sign in to checkout
            </p>
          )}
        </div>
      ) : (
        "Your cart is empty"
      )}
    </motion.div>
  );
};
