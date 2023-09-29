import { useEffect, useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`padding-x py-8 fixed z-20 w-full ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul
          id="navLinks"
          className={`flex-1 flex justify-center items-center gap-16 max-lg:gap-10 max-md:flex-col max-md:absolute max-md:bg-white max-md:z-auto max-md:w-full max-md:right-16 max-md:items-end transition-all duration-500 ease-in ${
            open ? "max-md:top-20" : "max-md:top-[-250px]"
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label} onClick={() => setOpen(false)}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black hover:font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="hidden max-md:block cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <i className={`fa-solid fa-${open ? "xmark" : "bars"} fa-2x`}></i>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
