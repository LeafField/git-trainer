"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import backImage from "../../../../public/Arrow.png";

const BackButton = () => {
  return (
    <Link
      className="flex h-[2.8125rem] w-[8.5625rem] items-center justify-center border border-white"
      href="/"
    >
      <figure className="relative h-[23px] w-[74px] transition-all hover:translate-x-[-10px] hover:scale-x-[1.1]">
        <Image
          src={backImage}
          alt="トップページに戻るボタン"
          style={{ objectFit: "cover", transition: "all 0.25s ease-in-out" }}
          fill
          sizes="72px"
          priority
          placeholder="blur"
          className="transition-all"
        />
      </figure>
    </Link>
  );
};

export default BackButton;
