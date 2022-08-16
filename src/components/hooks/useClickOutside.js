import {useEffect, useRef } from "react";

const useClickOutside = (handlerValue) => {
  const useDropdown = useRef();

  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (!useDropdown.current.contains(e.target)) {
        handlerValue();
      }
    };
    document.addEventListener("mousedown", clickOutsideHandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  });

  return useDropdown
}

export default useClickOutside