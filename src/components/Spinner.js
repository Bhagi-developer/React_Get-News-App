import React from "react";
import loading from "./loading-splash.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img
        src={loading}
        alt="loading"
        style={{ height: "250px", margin: "0" }}
      />
    </div>
  );
};

export default Spinner;
