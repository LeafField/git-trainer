"use client";
import React, { FC } from "react";

type Props = {
  title: string;
};

const PageTitle: FC<Props> = ({ title }) => {
  return (
    <h1 className="row-start-1 pt-8 text-3xl text-white lg:col-start-2 lg:col-end-4 lg:self-center lg:pt-[3.62rem] lg:text-4xl ">
      {title}
    </h1>
  );
};

export default PageTitle;
