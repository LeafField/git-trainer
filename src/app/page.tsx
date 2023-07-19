import React from "react";
import { NextPage } from "next";
import TopPage from "./components/top-page/TopPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Git Empty",
  description:
    "Gitコマンドを手軽に空打ちできるサイトです。Git学習後の練習にどうぞ",
  openGraph: {
    title: "Git Empty",
    description:
      "Gitコマンドを手軽に空打ちできるサイトです。Git学習後の練習にどうぞ",
    type: "website",
    url: "https://git-empty.vercel.app/",
    siteName: "Git Empty",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const Home: NextPage = () => {
  return <TopPage />;
};

export default Home;
