"use client";
import React, { FC } from "react";

type Props = {
  title: string;
  last?: boolean;
  clickHandler: () => void;
};

const Selector: FC<Props> = ({ title, last = false, clickHandler }) => {
  return (
    <div
      className={`border-t ${
        last ? "border-b" : ""
      } border-white text-white text-center text-3xl md:text-4xl py-[2.94rem] cursor-pointer transition-colors hover:text-gray-400`}
      onClick={clickHandler}
    >
      {title}
    </div>
  );
};

export default Selector;
