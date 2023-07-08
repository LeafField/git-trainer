"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import backImage from "../../../../public/Arrow.png";

const BackButton = () => {
  return (
    <Link
      className="w-[8.5625rem] h-[2.8125rem] flex justify-center items-center border border-white"
      href="/"
    >
      <figure className="w-[74px] h-[23px] relative transition-all hover:translate-x-[-10px] hover:scale-x-[1.1]">
        <Image
          src={backImage}
          alt="トップページに戻るボタン"
          style={{ objectFit: "cover" }}
          fill
        />
      </figure>
    </Link>
  );
};

export default BackButton;
