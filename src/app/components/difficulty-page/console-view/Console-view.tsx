"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  question: string;
  answer: string;
  answer2?: string;
  nextCallback: (roop?: boolean) => void;
  finished: boolean;
};

const ConsoleView: FC<Props> = ({
  question,
  answer,
  answer2,
  nextCallback,
  finished,
}) => {
  const [wrong, setWrong] = useState<boolean>(false);

  const consoleRef = useRef<HTMLInputElement>(null);
  const finalRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const clickConsole = () => {
    if (finished) {
      finalRef.current?.focus();
    } else {
      consoleRef.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const verifying =
      consoleRef.current?.value !== answer &&
      consoleRef.current?.value !== answer2;
    setWrong(verifying);
    consoleRef.current!.value = "";

    if (!verifying) {
      nextCallback();
    }
  };

  const finalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (finalRef.current?.value) {
      case "y":
        nextCallback(true);
        break;
      case "n":
        router.push("/difficulty");
        break;
      default:
        finalRef.current!.value = "";
        break;
    }
  };

  useEffect(() => {
    if (finished) {
      finalRef.current?.focus();
    } else {
      consoleRef.current?.focus();
    }
  }, [consoleRef, finished]);

  return (
    <main
      className="row-start-2 h-[29.125rem] max-w-[62.5rem] cursor-text overflow-hidden rounded-lg border border-consoleHeader text-[rgb(204,204,204)] lg:col-span-4 lg:col-start-2"
      onClick={clickConsole}
    >
      <h2 className="h-6 bg-consoleHeader pl-3 text-base text-white">
        Git Empty
      </h2>
      <div className="min-h-full bg-console px-3 pt-7">
        <p>{question}</p>
        {wrong && (
          <div className="pt-4">
            不正解です！正解は「{answer}」{answer2 && `もしくは「${answer2}」`}
            です
          </div>
        )}
        {finished && (
          <div className="pt-4">
            <p className="text-xl font-bold">Congratulations!</p>
            <p className="pt-2">ここまで遊んでくれてありがとうございます</p>
            <p>是非他の難易度も遊んでみてください</p>
            <form
              className="mt-6 flex max-w-full flex-col gap-1 sm:flex-row"
              onSubmit={finalSubmit}
            >
              <label htmlFor="finishInput">
                もう一度同じ難易度で遊びますか？{`(y/n)`}
              </label>
              <input
                type="text"
                name=""
                id="finishInput"
                className="bg-transparent outline-none"
                ref={finalRef}
              />
            </form>
          </div>
        )}
        {finished || (
          <form
            className="mt-6 flex max-w-full flex-col gap-1 sm:flex-row"
            onSubmit={handleSubmit}
          >
            <label htmlFor="console">C:users/gitEmpty&gt;</label>
            <input
              type="text"
              name="console"
              id="console"
              className="flex-1 bg-transparent outline-none"
              ref={consoleRef}
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
            />
          </form>
        )}
      </div>
    </main>
  );
};

export default ConsoleView;
