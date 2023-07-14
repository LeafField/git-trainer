import React from "react";

const Spinner = () => {
  return (
    <div className="my-16 flex justify-center">
      <div
        className={`h-10 w-10 rounded-full animate-spin border-4 border-t-gray-200 border-gray-500`}
      ></div>
    </div>
  );
};

export default Spinner;
