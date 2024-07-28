"use client";
import React, { FC } from "react";
import Link from "next/link";

type Props = {
  title: string;
  link: string;
  color?: "primary" | "secondary";
};

const Button: FC<Props> = ({ title, link, color = "primary" }) => {
  return (
    <Link
      className={`block w-fit rounded-[2.8125rem] px-5 py-2 text-base font-normal text-white after:block after:h-[1px]
      after:w-full after:scale-0 after:transition-all hover:after:scale-100 hover:after:bg-white
      hover:after:content-[""] md:px-10 md:py-4 md:text-2xl
      ${color === "primary" && "bg-primary"} ${
        color === "secondary" && "border border-white"
      }`}
      href={`${link}`}
    >
      {title}
    </Link>
  );
};

export default Button;
