import React, { FC } from "react";

type Props = {
  title: string;
};

const PageTitle: FC<Props> = ({ title }) => {
  return <h1 className="text-4xl text-white">{title}</h1>;
};

export default PageTitle;
