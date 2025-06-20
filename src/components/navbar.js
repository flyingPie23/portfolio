import React, { useEffect, useRef, useState } from "react";


function Tabs(props) {
  const handleClick = () => {
    const section = document.getElementById(props.tab);
    console.log(section)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-white hover:text-light-blue focus:text-light-blue focus:underline underline-offset-[4px]"
    >
      <strong className="text-light-blue mr-[12px]">{props.order}</strong>
      {props.tab}
    </button>
  );
}

function Icon(props) {
  return (
    <button className="material-symbols-outlined text-white font-bold text-[50px] hover:text-light-blue">
      code
    </button>
  );
}

function Navbar(props) {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY.current) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="bg-dark-blue p-[24px] shadow-md grid gap-4 grid-cols-3 grid-rows-1 items-center justify-items-center font-header">
        <div className="grid gap-[32px] grid-cols-2 grid-rows-1 items-center justify-items-center">
          <Tabs order="1." tab="About" aboutRef={props.aboutRef} />
          <Tabs order="2." tab="Experience" />
        </div>
        <Icon />
        <div className="grid gap-[32px] grid-cols-2 grid-rows-1 items-center justify-items-center">
          <Tabs order="3." tab="Work" />
          <Tabs order="4." tab="Contact" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
