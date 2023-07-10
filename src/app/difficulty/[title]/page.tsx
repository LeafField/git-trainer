import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    title: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  return {
    title: `${params.title} | Git Empty`,
    description:
      "Gitコマンドを手軽に空打ちできるサイトです。Git学習後の練習にどうぞ",
  };
};

const page = ({ params }: Props) => {
  return <div className="text-white">{params.title}</div>;
};

export default page;
