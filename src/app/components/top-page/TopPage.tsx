import React from "react";
import Title from "./top-title/Title";
import Button from "../button/Button";
import Footer from "../layout/Footer";

const TopPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Title />
      <div className="mt-32 flex justify-center gap-16 md:mt-[12.6rem] md:gap-[9.12rem] ">
        <Button title="Let's Play!" link="/difficulty" color="primary" />
        <Button title="How to use" link="/howto" color="secondary" />
      </div>
      <div className="absolute bottom-3">
        <Footer />
      </div>
    </div>
  );
};

export default TopPage;
