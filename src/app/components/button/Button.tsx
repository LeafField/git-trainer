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
      className={`text-white block w-fit text-base md:text-2xl rounded-[2.8125rem] py-2 px-5 md:py-4 md:px-10
      font-normal hover:after:content-[""] hover:after:bg-white after:transition-all after:block
      after:h-[1px] after:w-full after:scale-0 hover:after:scale-100
      ${color === "primary" && "bg-primary"} ${
        color === "secondary" && "border-white border"
      }`}
      href={`${link}`}
    >
      {title}
    </Link>
  );
};

export default Button;
