import React, { FC, ReactNode } from "react";
import HowToHeader from "../components/layout/HowToHeader";
import Footer from "../components/layout/Footer";

type Props = {
  children: ReactNode;
};

const HowToLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <HowToHeader />
      {children}
      <Footer />
    </>
  );
};

export default HowToLayout;
