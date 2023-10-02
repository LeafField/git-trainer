import { FetchData } from "./fetcher";

export const sortedIds = (a: FetchData, b: FetchData) => {
  if (Number(a) < Number(b)) {
    return -1;
  } else if (Number(a) > Number(b)) {
    return 1;
  } else {
    return 0;
  }
};
