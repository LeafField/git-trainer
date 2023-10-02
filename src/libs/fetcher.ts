export type FetchData = {
  id: number;
  question: string;
  answer: string;
  answer2?: string;
};

type Data = {
  documents: {
    fields: {
      question: { stringValue: string };
      answer: { stringValue: string };
      answer2?: { stringValue: string };
      id: { integerValue: string };
    };
  }[];
};

export const fetcher = async (url: string) => {
  const res = await fetch(
    `https://firestore.googleapis.com/v1/projects/git-empty/databases/(default)/documents/console/${url}/practice`,
    { method: "GET", cache: "no-store" },
  );
  const data: Data = await res.json();
  const body: FetchData[] = data.documents.map((doc) => ({
    question: doc.fields.question.stringValue,
    answer: doc.fields.answer.stringValue,
    answer2: doc.fields.answer2?.stringValue,
    id: Number(doc.fields.id.integerValue),
  }));

  return body.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    } else if (a.id > b.id) {
      return 1;
    } else {
      return 0;
    }
  });
};

export const fetchTitle = async (url: string) => {
  const title: string = await fetch(
    `https://firestore.googleapis.com/v1/projects/git-empty/databases/(default)/documents/console/${url}`,
    { method: "GET", cache: "no-store" },
  )
    .then((res) => res.json())
    .then((data) => data.fields.title.stringValue);
  return title;
};
