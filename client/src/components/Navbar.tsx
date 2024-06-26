import { BsCart4 } from "react-icons/bs";
import seal from "../assets/seal.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Cart } from "./Cart";
import { useCart } from "../context/CartContext";

export const Navbar = () => {
  const [isCartOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  const toggleCart = () => {
    setIsOpen(!isCartOpen);
  };
  return (
    <>
      <AnimatePresence>
        {isCartOpen ? <Cart toggleCart={toggleCart} /> : ""}
      </AnimatePresence>
      <div className="bg-[--mustard] w-full h-[150px] madimi-one-regular flex justify-center items-center">
        <img
          src={seal}
          className="absolute left-8 top-8 -rotate-12 w-[120px]"
        />
        <NavLink to="/" className="relative">
          <div className="bg-black absolute w-[90px] h-[50px] top-[4px] left-[4px]"></div>
          <button className="bg-white w-[90px] h-[50px] relative top-[0px] left-[0px] border border-black text-xl active:top-[4px] active:left-[4px] transition-all">
            HOME
          </button>
        </NavLink>
        <NavLink to="/shop" className="relative">
          <div className="bg-black absolute w-[90px] h-[50px] top-[4px]"></div>
          <button className="bg-white w-[90px] h-[50px] relative top-[0px] border border-black text-xl active:top-[4px] transition-all">
            SHOP
          </button>
        </NavLink>
        <NavLink to="/signin" className="relative z-10">
          <div className="bg-black absolute w-[90px] h-[50px] top-[4px]"></div>
          <button className="bg-white w-[90px] h-[50px] relative top-[0px] border border-black text-xl active:top-[4px] transition-all">
            USER
          </button>
        </NavLink>
        <div className="relative">
          <div className="bg-black absolute w-[90px] h-[50px] top-[4px] right-[3px]"></div>
          <button
            onClick={toggleCart}
            className="bg-white w-[90px] h-[50px] relative top-[0px] right-[0px] border border-black text-xl active:top-[4px] active:right-[3px] transition-all flex justify-center items-center"
          >
            <BsCart4 className="text-3xl" />
            {cart.length > 0 ? (
              <p className="absolute bg-black rounded-full p-1 text-white text-sm top-1 right-4 w-[25px] h-[25px]">
                {cart.length}
              </p>
            ) : (
              ""
            )}
          </button>
        </div>
      </div>
    </>
  );
};
