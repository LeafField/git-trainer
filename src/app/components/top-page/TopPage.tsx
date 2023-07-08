import React from "react";
import Title from "./top-title/Title";
import Button from "../button/Button";

const TopPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <Title />
      <div className="flex mt-32 md:mt-[12.6rem] justify-center gap-16 md:gap-[9.12rem] ">
        <Button title="Let's Play!" link="/" color="primary" />
        <Button title="How to use" link="/howto" color="secondary" />
      </div>
    </div>
  );
};

export default TopPage;
