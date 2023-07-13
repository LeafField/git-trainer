import React from "react";
import HowToPage from "../components/how-to-page/HowToPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to use | Git Empty",
  description:
    "Gitコマンドを手軽に空打ちできるサイトです。Git学習後の練習にどうぞ",
};

const HowTo = () => {
  return <HowToPage />;
};

export default HowTo;
