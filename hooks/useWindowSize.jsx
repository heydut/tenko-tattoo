import { useEffect, useState } from "react";

// ✨ //////////////////////////////

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!windowSize.width) return null;

  return {
    sm: windowSize.width < 640,
    md: windowSize.width < 768,
    lg: windowSize.width < 1024,
    xl: windowSize.width < 1280,
  };
}
