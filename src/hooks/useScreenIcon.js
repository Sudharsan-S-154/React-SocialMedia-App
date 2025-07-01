import React, { useEffect, useState } from "react";

function useScreenIcon() {
  const [windowSize, setWindowSize] = useState({
    width: null,
    heigth: null,
  });

  useEffect(() => {
    const windowResize = () => {
      setWindowSize({
        width: window.innerWidth,
        heigth: window.innerHeight,
      });
    };
    windowResize();
    window.addEventListener("resize", windowResize);
  }, []);

  return windowSize;
}

export default useScreenIcon;
