"use client";
import React, { FC, useEffect, useReducer, useState } from "react";
import PageTitle from "./page-title/PageTitle";
import Aside from "./inner-how-to-use/Aside";
import ConsoleView from "./console-view/Console-view";
import { FetchData } from "../../../libs/fetcher";

type Props = {
  data: FetchData[];
  title: string;
};

const MainPage: FC<Props> = ({ data, title }) => {
  const [questionNumber, dispatch] = useReducer(
    (state: number) => state + 1,
    0
  );
  const [finished, setFinished] = useState<boolean>(false);

  useEffect(() => {
    if (questionNumber === data.length) {
      setFinished(true);
    }
  }, [finished, questionNumber, data]);

  return (
    <div className="grid xl:grid-cols-[minmax(0,25rem)_1fr_1fr] gap-x-9  grid-rows-[auto 1fr]  h-[calc(100vh-2.81rem)] px-7 max-w-[120rem] mx-auto">
      <PageTitle title={title} />
      <Aside />
      <ConsoleView
        question={
          questionNumber === data.length ? "" : data[questionNumber].question
        }
        answer={
          questionNumber === data.length ? "" : data[questionNumber].answer
        }
        nextCallback={dispatch}
        finished={finished}
      />
    </div>
  );
};

export default MainPage;
