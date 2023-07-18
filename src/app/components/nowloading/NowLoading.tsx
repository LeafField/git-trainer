import React, { FC } from "react";

const NowLoading: FC = () => {
  return (
    <div
      className="w-fit animate-pulse text-3xl font-bold text-white"
      data-testid="nowloading"
    >
      ...NowLoading
    </div>
  );
};

export default NowLoading;
