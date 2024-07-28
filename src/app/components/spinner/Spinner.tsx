import React from "react";

const Spinner = () => {
  return (
    <div className="my-16 flex justify-center">
      <div
        className={`h-10 w-10 animate-spin rounded-full border-4 border-gray-500 border-t-gray-200`}
      ></div>
    </div>
  );
};

export default Spinner;
