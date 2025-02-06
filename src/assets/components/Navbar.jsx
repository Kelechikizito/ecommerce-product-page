import { useState, createContext } from "react";
import MenuIcon from "../images/icon-menu.svg?react";
import CloseIcon from "../images/icon-close.svg?react";
import LogoIcon from "../images/logo.svg?react";
import CartIcon from "../images/icon-cart.svg?react";
import ImageAvatar from "../images/image-avatar.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="flex flex-row justify-between py-10">
        <div className="flex justify-between gap-16">
          <div className="flex gap-4">
            <div className="md:hidden flex justify-center items-center">
              <button onClick={toggleMenu}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>

            <a href="#" className="flex justify-center items-center">
              <LogoIcon />
            </a>
          </div>

          <div className="flex justify-center items-center">
            <ul className={`md:flex md:gap-10 ${isOpen ? "block" : "hidden"}`}>
              <li className="relative flex cursor-pointer flex-col items-center font-sans font-normal leading-[26px] text-[#69707d] hover:text-[#1d2026] after:absolute after:-bottom-[46px] after:h-1 after:w-full after:bg-[#ff7e1b] after:opacity-0 after:transition-opacity after:duration-200 after:ease-out after:content-[''] hover:after:opacity-100">
                <a href="#features" className="">
                  Collections
                </a>
              </li>
              <li className="relative flex cursor-pointer flex-col items-center font-sans font-normal leading-[26px] text-[#69707d] hover:text-[#1d2026] after:absolute after:-bottom-[46px] after:h-1 after:w-full after:bg-[#ff7e1b] after:opacity-0 after:transition-opacity after:duration-200 after:ease-out after:content-[''] hover:after:opacity-100">
                <a href="#team" className="">
                  Men
                </a>
              </li>
              <li className="relative flex cursor-pointer flex-col items-center font-sans font-normal leading-[26px] text-[#69707d] hover:text-[#1d2026] after:absolute after:-bottom-[46px] after:h-1 after:w-full after:bg-[#ff7e1b] after:opacity-0 after:transition-opacity after:duration-200 after:ease-out after:content-[''] hover:after:opacity-100">
                <a href="#blog" className="">
                  Women
                </a>
              </li>
              <li className="relative flex cursor-pointer flex-col items-center font-sans font-normal leading-[26px] text-[#69707d] hover:text-[#1d2026] after:absolute after:-bottom-[46px] after:h-1 after:w-full after:bg-[#ff7e1b] after:opacity-0 after:transition-opacity after:duration-200 after:ease-out after:content-[''] hover:after:opacity-100">
                <a href="#contact" className="">
                  About
                </a>
              </li>
              <li className="relative flex cursor-pointer flex-col items-center font-sans font-normal leading-[26px] text-[#69707d] hover:text-[#1d2026] after:absolute after:-bottom-[46px] after:h-1 after:w-full after:bg-[#ff7e1b] after:opacity-0 after:transition-opacity after:duration-200 after:ease-out after:content-[''] hover:after:opacity-100">
                <a href="#getTemplate" className="">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="flex justify-center items-center">
            <CartIcon />
          </div>
          <div className="flex justify-center items-center">
            <img src={ImageAvatar} alt="" className="size-12" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// So I will be using statemanagement and usecontext in this project
