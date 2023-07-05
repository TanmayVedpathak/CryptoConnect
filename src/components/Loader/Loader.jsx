import React from "react";
import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loaderContainer">
      <FadeLoader color="#239ef0" />
    </div>
  );
};

export default Loader;
