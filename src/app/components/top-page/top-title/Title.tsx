import React, { FC } from "react";

const Title: FC = () => {
  return (
    <div className="mx-auto flex flex-col gap-5 md:gap-[2.375rem]">
      <p className="text-center text-base text-white md:text-2xl ">
        Gitコマンドを手軽に空打ちできるサイト
      </p>
      <h1 className="text-center text-4xl font-bold text-white md:text-8xl ">
        Git Empty
      </h1>
    </div>
  );
};

export default Title;
