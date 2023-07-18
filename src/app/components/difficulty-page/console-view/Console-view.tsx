"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  question: string;
  answer: string;
  nextCallback: () => void;
  finished: boolean;
};

const ConsoleView: FC<Props> = ({
  question,
  answer,
  nextCallback,
  finished,
}) => {
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
      }, 100);
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
          if (!finished) {
            consoleRef.current?.focus();
          }
        }, 100);
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

  useEffect(() => {
    if (finished) {
      setTimeout(() => {
        router.push("/difficulty");
      }, 3000);
    }
  }, [finished, router]);

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
            不正解です！右上の検索バーから正解を検索してみてね！
          </div>
        )}
        {finished && (
          <div className="pt-4">
            <p className="text-xl font-bold">Congratulations!</p>
            <p className="pt-2">ここまで遊んでくれてありがとうございます</p>
            <p>是非他の難易度も遊んでみてください</p>
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
        {next && (
          <div className="pt-4">
            <p>Congratulations, you are correct!</p>
            <form
              onSubmit={handleNext}
              className="flex max-w-full flex-col sm:flex-row"
            >
              <label htmlFor="consoleInput">
                Would you like to start the next problem?{"(y/n)"}
              </label>
              <input
                type="text"
                id="consoleInput"
                className="ml-1 bg-transparent outline-none"
                ref={nextRef}
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
              />
            </form>
          </div>
        )}
      </div>
    </main>
  );
};

export default ConsoleView;
