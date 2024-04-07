import { motion } from "framer-motion";

export const Cart = () => {
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      exit={{ x: 500 }}
      className="absolute right-0 top-0 bg-[#f2f2f2] h-[100dvh] w-[500px] z-50 border border-black black-shadow"
    ></motion.div>
  );
};
