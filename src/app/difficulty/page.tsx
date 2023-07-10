import React from "react";
import Selected from "../components/selected-page/Selected";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "難易度選択 | Git Empty",
  description:
    "Gitコマンドを手軽に空打ちできるサイトです。Git学習後の練習にどうぞ",
};

const DifficultyPage = () => {
  return <Selected />;
};

export default DifficultyPage;
