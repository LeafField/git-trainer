"use client";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  title: string;
  last?: boolean;
  url: string;
};

const Selector: FC<Props> = ({ title, last = false, url }) => {
  return (
    <Link
      href={`/difficulty/${url}`}
      className={`block border-t ${
        last ? "border-b" : ""
      } border-white text-white text-center text-3xl md:text-4xl py-[2.94rem] cursor-pointer transition-colors hover:text-gray-400`}
    >
      {title}
    </Link>
  );
};

export default Selector;
