import React, { FC } from "react";

const Title: FC = () => {
  return (
    <div className="mx-auto flex flex-col gap-[2.375rem]">
      <p className="text-xl md:text-2xl text-white text-center ">
        Gitコマンドを手軽に空打ちできるサイト
      </p>
      <h1 className="text-4xl font-bold md:text-8xl text-white text-center ">
        Git Empty
      </h1>
    </div>
  );
};

export default Title;
