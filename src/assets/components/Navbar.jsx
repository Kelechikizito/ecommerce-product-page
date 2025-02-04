import { useState, createContext } from "react";
import MenuIcon from '../images/icon-menu.svg?react'; 
import CloseIcon from '../images/icon-close.svg?react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0A0D10] p-4 text-white">
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="flex justify-between">
          <a href="#">
            SNEAKERS
          </a>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <CloseIcon className="h-6 w-6 text-white" />
              ) : (
                <MenuIcon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        <div>
          <ul
            className={`text-center md:flex md:items-center md:space-x-6 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <li>
              <a href="#features" className="block py-2 m-5 md:py-0 md:m-0">
                Features
              </a>
            </li>
            <li>
              <a href="#team" className="block py-2 m-5 md:py-0 md:m-0">
                Team
              </a>
            </li>
            <li>
              <a href="#blog" className="block py-2 m-5 md:py-0 md:m-0">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 m-5 md:py-0 md:m-0">
                Contact
              </a>
            </li>
            <li className="md:hidden">
              <a href="#getTemplate" className="block py-2 m-5 md:py-0 md:m-0">
                Get Template
              </a>
            </li>
          </ul>
        </div>

        <div>
          <a
            href="#getTemplate"
            className="hidden md:block py-2 m-5 md:py-0 md:m-0"
          >
            Get Template
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// So I will be using statemanagement and usecontext in this program
