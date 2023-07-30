"use client";
import React, { useReducer } from "react";
import Selector from "./select/Selector";
import NowLoading from "../nowloading/NowLoading";

const Selected = () => {
  const [loading, dispatch] = useReducer(() => true, false);

  return (
    <main className="min-h-[calc(100svh - 45px)] relative w-full">
      {loading && (
        <div className="absolute inset-0 flex items-end justify-end bg-background  pr-16">
          <NowLoading />
        </div>
      )}
      <h1 className="mt-[5%] text-center text-4xl font-bold text-white md:text-5xl">
        難易度選択
      </h1>
      <div className="mt-[8%]">
        <Selector title="初級編:GitHub Flow" url="flow" callback={dispatch} />
        <Selector
          title="中級編:Other Commands"
          url="other"
          callback={dispatch}
          last={true}
        />
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
