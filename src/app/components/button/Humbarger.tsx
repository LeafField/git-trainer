import React, { FC } from "react";
import Question from "../icons/Question";
import Cross from "../icons/Cross";

type Props = {
  isHidden: boolean;
  HumbargerOpen: () => void;
};

const Humbarger: FC<Props> = ({ HumbargerOpen, isHidden }) => {
  return (
    <button
      className="block w-fit lg:hidden absolute top-1 right-1 z-50"
      aria-controls="aside"
      aria-expanded={isHidden ? "false" : "true"}
      onClick={HumbargerOpen}
    >
      {isHidden ? <Question /> : <Cross />}
    </button>
  );
};

export default Humbarger;
