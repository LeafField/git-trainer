"use client";
import React, { FC, useEffect, useReducer, useState } from "react";
import PageTitle from "./page-title/PageTitle";
import Aside from "./inner-how-to-use/Aside";
import ConsoleView from "./console-view/Console-view";
import { FetchData } from "../../../libs/fetcher";
import Humbarger from "../button/Humbarger";

type Props = {
  data: FetchData[];
  title: string;
};

const MainPage: FC<Props> = ({ data, title }) => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [isHidden, HumbargerDispatch] = useReducer(
    (state: boolean) => !state,
    true,
  );
  const [finished, setFinished] = useState<boolean>(false);

  const nextCallback: (roop?: boolean) => void = (roop = false) => {
    if (roop) {
      setQuestionNumber(0);
      setFinished(false);
    } else {
      setQuestionNumber(questionNumber + 1);
    }
  };

  useEffect(() => {
    if (questionNumber === data.length) {
      setFinished(true);
    }
  }, [finished, questionNumber, data]);

  return (
    <div className="mx-auto grid h-[calc(100svh-2.81rem)] max-w-[120rem] grid-rows-[auto_1fr] gap-x-9 gap-y-8  overflow-hidden px-7 lg:grid-cols-[minmax(0,25rem)_1fr_1fr] lg:gap-y-[7rem]">
      <PageTitle title={title} />
      <Humbarger HumbargerOpen={HumbargerDispatch} isHidden={isHidden} />
      <Aside isHidden={isHidden} />
      <ConsoleView
        question={
          questionNumber === data.length ? "" : data[questionNumber].question
        }
        answer={
          questionNumber === data.length ? "" : data[questionNumber].answer
        }
        nextCallback={nextCallback}
        finished={finished}
      />
    </div>
  );
};

export default MainPage;
