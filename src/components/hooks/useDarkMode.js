import { useEffect, useState } from "react";
import { DayIcon, NightIcon } from "../admin/Navbar/NavbarComponents";

const DarkMode = () => {
  const [isSwitch, setSwitch] = useState(true);
  const [isDarkMode, setDarkMode] = useState('dark');
  const setTheme = isDarkMode === 'light' ? 'dark' : 'light';
  const body = document.body;
  const root = window.document.documentElement;
  const themeData = JSON.parse(window.localStorage.getItem('themeMode'));
  
  

  useEffect(() => {

    if(themeData === 'light'){
      root.classList.add('dark')
      body.classList.remove(isDarkMode);
    }else if(themeData === 'dark'){
      root.classList.add('light')
          body.classList.remove(isDarkMode);
    }
    }, []);
  


  useEffect(() => {
    body.classList.add(isDarkMode);
    body.classList.remove(setTheme);
    console.log('mode: ' + isDarkMode)
    }, [isDarkMode]);

  useEffect(() => {

    if(isSwitch === true){
      setDarkMode('light');
      window.localStorage.setItem('themeMode', JSON.stringify(isDarkMode));
      root.classList.remove(themeData);
    } else if(isSwitch === false){
      setDarkMode('dark');
      window.localStorage.setItem('themeMode', JSON.stringify(isDarkMode));
      root.classList.remove(themeData);
    }
    }, [isSwitch]);

  return (
    <button
      onClick={() => setSwitch(!isSwitch)}
      type="button"
      className="ml-6 p-2 flex items-center rounded-full bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700"
    >
      {isSwitch ? <NightIcon /> : <DayIcon />}
    </button>
  );
}

export default DarkMode