import React from "react";
import { Metadata } from "next";
import { fetcher, fetchTitle, preload } from "../../../libs/fetcher";
import MainPage from "../../components/difficulty-page/Main";
import MainFetcher from "../../components/difficulty-page/MainFetcher";

// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const title = await fetchTitle(params.title);
//   return {
//     title: `${title} | Git Empty`,
//     description:
//       "Gitコマンドを手軽に空打ちできるサイトです。Git学習後の練習にどうぞ",
//   };
// };

type Props = {
  params: {
    title: string;
  };
};

const ConsolePage = async ({ params }: Props) => {
  // const data = await fetcher(params.title);
  // const title = await fetchTitle(params.title);
  // return <MainPage data={data} title={title} />;
  preload(params.title);
  return <MainFetcher slug={params.title} />;
};

export default ConsolePage;
