import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-orange-500 py-[40px] px-[50px] md:px-[10px] flex flex-col md:flex-row justify-between">
        <div className="flex items-center md:justify-start mb-5 md:mb-0">
          <p className="text-[24px] lg:text-[30px] font-bold">TECHNOTRONIX</p>
        </div>
        <div className="text-center md:text-left mb-5 md:mb-0">
          <h1 className="text-[18px] font-bold mb-[10px]">Useful Links</h1>
          <ul>
            <li>
              <a className="hover:text-white" href="">Home</a>
            </li>
            <li>
              <a className="hover:text-white" href="">Contact</a>
            </li>
            <li>
              <a className="hover:text-white" href="">Privacy Policy</a>
            </li>
            <li>
              <a className="hover:text-white" href="">Terms and Conditions</a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-[18px] font-bold mb-[10px]">Follow Us</h1>
          <div className="flex justify-center md:justify-start gap-5">
            <FaFacebook />
            <FaXTwitter />
            <FaSquareInstagram />
            <FaTiktok />
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-center py-[5px]">
        <p>&copy;Copyright Technotronix | All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
