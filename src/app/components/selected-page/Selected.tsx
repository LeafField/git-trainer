"use client";
import React from "react";
import Selector from "./select/Selector";

const Selected = () => {
  return (
    <main className="min-h-[calc(100vw - 45px)] w-full ">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mt-[5%]">
        難易度選択
      </h1>
      <div className="mt-[8%]">
        <Selector title="初級編:GitHub Flow" url="flow" />
        <Selector title="中級編:制作中" url="dummy" />
        <Selector title="上級編:制作中" last={true} url="dummy" />
      </div>
    </main>
  );
};

export default Selected;
