import React, { FC } from "react";

type Props = {
  title: string;
};

const PageTitle: FC<Props> = ({ title }) => {
  return (
    <h1 className="text-4xl text-white row-start-1 col-start-2 col-end-4 self-center">
      {title}
    </h1>
  );
};

export default PageTitle;
