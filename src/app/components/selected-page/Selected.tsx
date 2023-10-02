"use client";
import React, { useReducer } from "react";
import Selector from "./select/Selector";

const Selected = () => {
  return (
    <main className="min-h-[calc(100svh - 45px)] relative w-full">
      <h1 className="mt-[5%] text-center text-4xl font-bold text-white md:text-5xl">
        難易度選択
      </h1>
      <div className="mt-[8%]">
        <Selector title="初級編:GitHub Flow" url="flow" />
        <Selector title="中級編:Other Commands" url="other" last={true} />
        {/* <Selector
          title="上級編:制作中"
          last={true}
          url="dummy"
          callback={dispatch}
        /> */}
      </div>
    </main>
  );
};

export default Selected;
