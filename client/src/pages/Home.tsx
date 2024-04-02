import arcade from "../assets/arcade.png";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LiaToolsSolid } from "react-icons/lia";
import { LiaGamepadSolid } from "react-icons/lia";

export const Home = () => {
  return (
    <div className="madimi-one-regular">
      <div className="flex items-center justify-center gap-16 pt-10 bg-[--mustard] border-b border-black">
        <div className="flex flex-col gap-3">
          <h1 className="madimi-one-regular text-5xl">
            Welcome to James Arcades!
          </h1>
          <p className="text-center madimi-one-regular">
            We sell only the finest arcade games, please check out our webshop!
          </p>
        </div>
        <img
          src={arcade}
          className="w-[251px] bg-[--pink] border border-black black-shadow relative top-10"
        />
      </div>
      <div className="flex justify-around items-center py-36 max-w-[1300px] mx-auto">
        <div className="bg-[--pink] w-1/4 h-[300px] mx-10 flex flex-col gap-2 items-center justify-center black-shadow border border-black ml-20">
          <h2 className="text-4xl">Fast shipping!</h2>
          <p className="text-xl">We deliver worldwide</p>
          <LiaShippingFastSolid className="text-8xl" />
        </div>
        <div className="bg-[--blue] w-1/4 h-[300px] flex flex-col gap-2 items-center justify-center black-shadow border border-black">
          <h2 className="text-4xl">24/7 Support</h2>
          <p className="text-xl">Call our amazing support</p>
          <LiaToolsSolid className="text-8xl" />
        </div>
        <div className="bg-[--yellow] w-1/4 h-[300px] mx-10 flex flex-col gap-2 items-center justify-center black-shadow border border-black mr-20">
          <h2 className="text-4xl">Fully Loaded</h2>
          <p className="text-1xl">With the best games</p>
          <LiaGamepadSolid className="text-8xl"/>
        </div>
      </div>
    </div>
  );
};
