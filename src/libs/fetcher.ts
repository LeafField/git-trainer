import { cache } from "react";
import {
  getDocs,
  collection,
  query,
  orderBy,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

export type FetchData = {
  id: number;
  question: string;
  answer: string;
};

export const preload = (title: string) => {
  void fetcher(title);
  void fetchTitle(title);
};

export const fetcher = cache(async (title: string): Promise<FetchData[]> => {
  const data: FetchData[] = [];
  const q = query(
    collection(db, `console`, `${title}`, "practice"),
    orderBy("id", "asc"),
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push(doc.data() as FetchData);
  });
  return data;
});

export const fetchTitle = cache(async (title: string): Promise<string> => {
  const collectionRef = doc(db, `console`, `${title}`);
  const docSnap = await getDoc(collectionRef);
  const data = docSnap.data();
  return data?.title;
});
