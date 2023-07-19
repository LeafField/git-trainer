import React from "react";
import { Metadata } from "next";
import { fetcher, fetchTitle } from "../../../libs/fetcher";
import MainPage from "../../components/difficulty-page/Main";

export const revalidate = 0;

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await fetchTitle(params.title);
  return {
    title: `${title} | Git Empty`,
    description:
      "Gitコマンドを手軽に空打ちできるサイトです。Git学習後の練習にどうぞ",
  };
};

type Props = {
  params: {
    title: string;
  };
};

const ConsolePage = async ({ params }: Props) => {
  const data = await fetcher(params.title);
  const title = await fetchTitle(params.title);
  return <MainPage data={data} title={title} />;
};

export default ConsolePage;
