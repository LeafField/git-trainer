"use client";
import React, { FC } from "react";

type Props = {
  title: string;
};

const PageTitle: FC<Props> = ({ title }) => {
  return (
    <h1 className="text-3xl lg:text-4xl pt-[3.62rem] text-white row-start-1 lg:col-start-2 lg:col-end-4 self-center ">
      {title}
    </h1>
  );
};

export default PageTitle;
