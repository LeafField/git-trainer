import React, { FC } from "react";
import HowToHeader from "../components/layout/HowToHeader";

type Props = {
  children: React.ReactNode;
};

const DifficultyLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <HowToHeader />
      {children}
    </>
  );
};

export default DifficultyLayout;
