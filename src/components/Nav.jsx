import { headerLogo } from "../assets/images";
import { hamburger, close } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          {/* <img
                 src={headerLogo}
                  alt="Logo"
                  width={130} 
                  height={29}
                  className='m-0 w-[129px] h-[29px]'
                  /> */}
          <p className="text-2xl m-0 w-[129px] h-[29px] font-bold">
            SHOP<span className="text-coral-red">SNICKERS</span>
          </p>
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>

        
        <div className="hidden max-lg:block  justify-end items-center">
          <img
            src={toggle ? close : hamburger}
            alt="toggle icon"
            className="w-[28px] h-[28] object-contain"
            onClick={() => setToggle((prevState) => !prevState)}
          />

           <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-white  absolute top-20 right-0 mx-1 min-w-[140px] rounded-xl flex flex-col sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((item) => (
              <li key={item.label}
               className="py-2 px-4 hover:bg-coral-red/70 rounded-lg text-2xl font-semibold "
               onClick={() => setToggle(false)}
               >
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex-col  gap-2 text-lg leading-normal font-semibold font-montserrat hidden max-lg:inline-flex wide:mr-24">
            <a
            className="py-2 px-4 rounded-lg hover:bg-coral-red/70"
            href="/"
            onClick={() => setToggle(false)}
            >
                Sign in
            </a>

            <a 
            className="py-2 px-4 rounded-lg hover:bg-coral-red/70"
            href="/"
            onClick={() => setToggle(false)}
            >
                Explore now
            </a>
          </div>
        </div>

       
        </div>
      </nav>
    </header>
  );
};

export default Nav;
