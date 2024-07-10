import React from "react";
import useScreenType from "../hooks/useScreenSize";

const ScreenSize: React.FC = () => {
  const screenType = useScreenType();

  return (
    <div>
      <h1>Screen Size: {screenType}</h1>
    </div>
  );
};

export default ScreenSize;
