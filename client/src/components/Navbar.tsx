import { BsCart4 } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="bg-[--mustard] w-full h-[120px] madimi-one-regular flex justify-center items-center">
      <div className="relative">
        <div className="bg-black absolute w-[90px] h-[50px] top-[4px] left-[4px]"></div>
        <button className="bg-white w-[90px] h-[50px] relative top-[0px] left-[0px] border border-black text-xl active:top-[4px] active:left-[4px] transition-all">
          HOME
        </button>
      </div>
      <div className="relative">
        <div className="bg-black absolute w-[90px] h-[50px] top-[4px]"></div>
        <button className="bg-white w-[90px] h-[50px] relative top-[0px] border border-black text-xl active:top-[4px] transition-all">
          SHOP
        </button>
      </div>
      <div className="relative z-10">
        <div className="bg-black absolute w-[90px] h-[50px] top-[4px]"></div>
        <button className="bg-white w-[90px] h-[50px] relative top-[0px] border border-black text-xl active:top-[4px] transition-all">
          SIGN IN
        </button>
      </div>
      <div className="relative">
        <div className="bg-black absolute w-[90px] h-[50px] top-[4px] right-[3px]"></div>
        <button className="bg-white w-[90px] h-[50px] relative top-[0px] right-[0px] border border-black text-xl active:top-[4px] active:right-[3px] transition-all flex justify-center items-center">
          <BsCart4 className="text-3xl"/>
        </button>
      </div>
    </div>
  );
};
