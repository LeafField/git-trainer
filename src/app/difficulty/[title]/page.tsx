import React, { cache } from "react";
import { Metadata } from "next";
import {
  getDocs,
  collection,
  query,
  orderBy,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../libs/firebase";

export const fetcher = cache(async (title: string) => {
  const q = query(
    collection(db, `console`, `${title}`, "practice"),
    orderBy("id", "asc")
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot;
});

export const fetchTitle = cache(async (title: string): Promise<string> => {
  const collectionRef = doc(db, `console`, `${title}`);
  const docSnap = await getDoc(collectionRef);
  const data = docSnap.data();
  return data?.title;
});

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
  const querySnapshot = await fetcher(params.title);
  console.log(querySnapshot?.docs.forEach((doc) => console.log(doc.data())));
  return (
    <ul className="text-white">
      {querySnapshot &&
        querySnapshot?.docs.map((doc) => (
          <li key={doc.id}>
            <p>{doc.data().id}</p>
            <p>{doc.data().question}</p>
            <p>{doc.data().anser}</p>
          </li>
        ))}
    </ul>
  );
};

export default ConsolePage;
