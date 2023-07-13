import React from "react";
import { Metadata } from "next";
import { fetcher, fetchTitle } from "../../../libs/fetcher";

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
  return (
    <ul className="text-white">
      {data.map((item) => (
        <li key={item.id}>
          <p>{item.id}</p>
          <p>{item.question}</p>
          <p>{item.anser}</p>
        </li>
      ))}
    </ul>
  );
};

export default ConsolePage;
