"use client";
import React, { FC } from "react";

type Props = {
  title: string;
  last?: boolean;
  clickHandler: (title: string) => void;
  url: string;
};

const Selector: FC<Props> = ({ title, last = false, clickHandler, url }) => {
  return (
    <div
      className={`border-t ${
        last ? "border-b" : ""
      } border-white text-white text-center text-3xl md:text-4xl py-[2.94rem] cursor-pointer transition-colors hover:text-gray-400`}
      onClick={() => {
        clickHandler(url);
      }}
    >
      {title}
    </div>
  );
};

export default Selector;
