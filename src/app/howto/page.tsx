import React from "react";
import HowToPage from "../components/how-to-page/HowToPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to use | Git Empty",
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

const HowTo = () => {
  return <HowToPage />;
};

export default HowTo;
