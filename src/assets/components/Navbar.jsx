import { useState } from "react";
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
    <nav>
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center">
            <ul className="md:flex md:gap-10">
              {["Collections", "Men", "Women", "About", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="relative flex cursor-pointer flex-col items-center font-sans font-normal leading-[26px] text-[#69707d] hover:text-[#1d2026] after:absolute after:-bottom-[46px] after:h-1 after:w-full after:bg-[#ff7e1b] after:opacity-0 after:transition-opacity after:duration-200 after:ease-out after:content-[''] hover:after:opacity-100"
                  >
                    <a href={item}>{item}</a>
                  </li>
                )
              )}
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

      {/* Mobile Off-Canvas Navigation */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={toggleMenu}
        />

        {/* Sidebar */}
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6">
            <button onClick={toggleMenu} className="mb-8">
              <CloseIcon />
            </button>
            <ul className="space-y-5">
              {["Collections", "Men", "Women", "About", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="text-[#1d2026] font-bold hover:text-[#ff7e1b] transition-colors"
                  >
                    <a href={item} className="block py-2">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;