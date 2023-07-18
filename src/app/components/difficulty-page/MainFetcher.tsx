import React, { FC } from "react";
import MainPage from "./Main";
import { fetcher, fetchTitle } from "../../../libs/fetcher";

type Props = {
  slug: string;
};
const MainFetcher: FC<Props> = async ({ slug }) => {
  const data = await fetcher(slug);
  const title = await fetchTitle(slug);

  return <MainPage data={data} title={title} />;
};

export default MainFetcher;
