"use client";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  title: string;
  last?: boolean;
  url: string;
  callback: () => void;
};

const Selector: FC<Props> = ({ title, last = false, url, callback }) => {
  return (
    <Link
      href={`/difficulty/${url}`}
      className={`block border-t ${
        last ? "border-b" : ""
      }  cursor-pointer border-white text-center text-3xl text-white transition-colors hover:text-gray-400 md:text-4xl`}
    >
      <span className="block h-full w-full py-[2.94rem]" onClick={callback}>
        {title}
      </span>
    </Link>
  );
};

export default Selector;
