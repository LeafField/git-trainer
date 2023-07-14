"use client";
import React, { FC } from "react";
import PageTitle from "./page-title/PageTitle";
import Aside from "./inner-how-to-use/Aside";
import ConsoleView from "./console-view/Console-view";

const Difficulty: FC = () => {
  return (
    <div className="grid grid-cols-[25rem_1fr_1fr] gap-x-9  grid-rows-[auto 1fr]  h-[calc(100vh-2.81rem)] px-7">
      <PageTitle title="初級編:Git Hub Flow" />
      <Aside />
      <ConsoleView
        question="リモートブランチをoriginに登録したい"
        answer="git remote add origin URL"
        nextCallback={() => {}}
      />
    </div>
  );
};

export default Difficulty;
