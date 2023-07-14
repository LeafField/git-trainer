import React from "react";
import { NextPage } from "next";
import TopPage from "./components/top-page/TopPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Git Empty",
  description:
    "Gitコマンドを手軽に空打ちできるサイトです。Git学習後の練習にどうぞ",
};

const Home: NextPage = () => {
  return <TopPage />;
};

export default Home;
