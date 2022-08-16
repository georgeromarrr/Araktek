import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BrandLogo, ArrIcon, DayIcon, NightIcon } from "./NavbarComponents";
import useClickOutside from "../../hooks/useClickOutside";
import DarkMode from "../../hooks/useDarkMode";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  // const [isDark, setDark] = useState("light");
  // const [modeStatus, setDarkMode] = useDarkMode(isDark);

  // const handleDarkMode = () => {
  //   setDark("romar");
  //   setDarkMode(modeStatus);
  // };

  const useDropdown = useClickOutside(() => {
    setOpen(false);
  });

  return (
    <div className="border-b border-black shadow-sm inset-x-0 bg-white dark:bg-stone-900 w-full">
      <nav className="py-4 mx-6 flex justify-between">
        <Link to="/">
          <BrandLogo />
        </Link>

        <div className="flex self-center items-center gap-x-1">
          <p className="dark:text-white">Welcome</p>
          <div className="relative">
            <button
              ref={useDropdown}
              type="button"
              className="text-black flex items-center hover:bg-gray-200 p-2 rounded-lg"
              onClick={() => setOpen(!isOpen)}
            >
              <p className="font-semibold pr-1 dark:text-white">
                Romar George Doinog
              </p>
              <span className={isOpen ? "origin-center rotate-180" : ""}>
                <ArrIcon />
              </span>
            </button>
            {isOpen && (
              <div className="text-black absolute border border-black bg-white right-0 top-11 w-full rounded-md divide-y divide-gray-400 shadow-xl px-1">
                <p className="text-sm italic p-3">Owner</p>
                <ul className="p-2 text-sm">
                  <li className="font-semibold cursor-pointer hover:bg-gray-300 hover:text-gray-500 p-2 rounded-sm">
                    Settings
                  </li>
                  <li className="font-semibold cursor-pointer hover:bg-gray-300 hover:text-gray-500 p-2 rounded-sm">
                    Log Out
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            {/* <button
              onClick={handleDarkMode}
              type="button"
              className="ml-6 p-2 flex items-center rounded-full bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700"
            >
              {modeStatus ? <DayIcon /> : <NightIcon />}
            </button> */}

            <DarkMode />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
