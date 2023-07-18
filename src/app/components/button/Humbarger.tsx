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
      className="absolute right-1 top-1 z-50 block w-fit lg:hidden"
      aria-controls="aside"
      aria-expanded={isHidden ? "false" : "true"}
      onClick={HumbargerOpen}
      data-testid="humbarger"
    >
      {isHidden ? <Question /> : <Cross />}
    </button>
  );
};

export default Humbarger;
