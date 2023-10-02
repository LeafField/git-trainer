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
      }  cursor-pointer border-white py-[2.94rem] text-center text-3xl text-white transition-colors hover:text-gray-400 md:text-4xl`}
    >
      {title}
    </Link>
  );
};

export default Selector;
