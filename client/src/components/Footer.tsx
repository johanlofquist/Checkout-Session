import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-[--mustard]">
      <div className="h-[230px] flex justify-around items-start py-10 text-slate-700 max-w-[1300px] m-auto">
        <div className="flex flex-col gap-1">
          <h3 className="mb-2 text-black">INFO</h3>
          <p>Media</p>
          <p>Pricing</p>
          <p>FAQ</p>
          <p>Status</p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="mb-2 text-black">COMPANY</h3>
          <p>About us</p>
          <p>Terms of Service</p>
          <p>Privacy</p>
        </div>
        <div className="flex flex-col mt-5 gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-black">Subscribe to our newsletter</p>
            <div className="flex gap-3">
              <input
                type="text"
                className="black-shadow py-1 px-2 text-black border border-black"
              />
              <button className="border border-black py-1 px-2 bg-white text-black black-shadow">
                Submit
              </button>
            </div>
          </div>
          <div className="flex flex-col text-black">
            <p>Follow us</p>
            <div className="flex gap-1 text-2xl">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
