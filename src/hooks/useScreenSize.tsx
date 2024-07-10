import { useState, useEffect } from "react";

type ScreenSize = "mobile" | "tablet" | "desktop";

const getScreenSize = (width: number): ScreenSize => {
  if (width < 768) {
    return "mobile";
  }
  if (width <= 1024) {
    return "tablet";
  }
  return "desktop";
};

const useScreenSize = (): ScreenSize => {
  const [screenType, setScreenType] = useState<ScreenSize>(
    getScreenSize(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getScreenSize(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenType;
};

export default useScreenSize;
