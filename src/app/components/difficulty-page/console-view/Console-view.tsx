"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  question: string;
  answer: string;
  nextCallback: () => void;
};

const ConsoleView: FC<Props> = ({ question, answer, nextCallback }) => {
  const [wrong, setWrong] = useState<boolean>(false);
  const [next, setNext] = useState<boolean>(false);

  const consoleRef = useRef<HTMLInputElement>(null);
  const nextRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const clickConsole = () => {
    if (next) {
      nextRef.current?.focus();
    } else {
      consoleRef.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const verifying = consoleRef.current?.value !== answer;
    setWrong(verifying);

    if (!verifying) {
      setNext(true);
      setTimeout(() => {
        nextRef.current?.focus();
      }, 300);
    } else {
      consoleRef.current!.value = "";
    }
  };

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (nextRef.current?.value) {
      case "y":
        nextCallback();
        setNext(false);
        consoleRef.current!.value = "";
        setTimeout(() => {
          consoleRef.current?.focus();
        }, 300);
        break;

      case "n":
        router.push("/");
        break;

      default:
        nextRef.current!.value = "";
        break;
    }
  };

  useEffect(() => {
    consoleRef.current?.focus();
  }, [consoleRef]);

  return (
    <main
      className="text-[rgb(204,204,204)] max-w-[62.5rem] h-[29.125rem] rounded-lg overflow-hidden border border-consoleHeader cursor-text col-start-2 col-span-4 row-start-2"
      onClick={clickConsole}
    >
      <h2 className="text-white h-6 bg-consoleHeader pl-4 text-base">
        Git Empty
      </h2>
      <div className="bg-console min-h-full pt-7 pl-3">
        <p>{question}</p>
        {wrong && (
          <div className="pt-4">
            不正解です！右上の検索バーから正解を検索してみてね！
          </div>
        )}
        <form
          className="mt-6 flex flex-col md:flex-row gap-1 max-w-full"
          onSubmit={handleSubmit}
        >
          <label htmlFor="console">C:users/gitEmpty&gt;</label>
          <input
            type="text"
            name="console"
            id="console"
            className="outline-none bg-transparent flex-1"
            ref={consoleRef}
          />
        </form>
        {next && (
          <div className="pt-4">
            <p>Congratulations, you are correct!</p>
            <form
              onSubmit={handleNext}
              className="flex flex-col md:flex-row max-w-full"
            >
              <label htmlFor="consoleInput">
                Would you like to start the next problem?{"(y/n)"}
              </label>
              <input
                type="text"
                id="consoleInput"
                className="outline-none bg-transparent ml-1"
                ref={nextRef}
              />
            </form>
          </div>
        )}
      </div>
    </main>
  );
};

export default ConsoleView;
