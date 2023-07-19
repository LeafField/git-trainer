import React from "react";
import Image from "next/image";
import howToImage from "../../../../public/howto.jpg";
import Button from "../button/Button";

const HowToPage = () => {
  return (
    <main className="px-6 pb-24 md:px-12 lg:px-40">
      <h1 className="pt-[7.5rem] text-center text-4xl font-bold text-white md:text-6xl xl:text-8xl">
        Git Emptyの遊び方
      </h1>
      <figure className="container relative mx-auto  mt-24 max-w-4xl md:mt-[11.25rem]">
        <Image
          src={howToImage}
          width={1605}
          height={856}
          style={{ objectFit: "cover", transition: "all 0.25s ease-in-out" }}
          alt="Git Emptyの遊び方参考画像"
          className="h-auto w-full transition-all"
          sizes="100vw"
          priority
          placeholder="blur"
        />
      </figure>
      <div className="mx-auto max-w-4xl">
        <div className="space-y-4 pt-[7.5rem] text-base text-white">
          <p>
            コンソール上部にGitの練習課題が表示されるので該当するgitコマンドを入力してEnterを押してください。
          </p>
          <p>分からない時はGoogle等で検索してみてください。</p>
        </div>

        <div className="mt-[5.62rem] text-white">
          <h2 className="text-3xl font-bold">
            フォルダ名、リモート名などの注意
          </h2>
          <p className="mt-[2.25rem] text-base">
            リモートリポジトリのURLは「URL」と打ってください
            <br />
            例:git remote add origin URL
          </p>
          <p className="mt-4 text-base">
            フォルダ名を指定する場合は「.」と打ってください
            <br />
            例:git add .
          </p>
          <p className="mt-4 text-base">
            「-m」等のオプションは打たないでください
            <br />
            例:git commit -m "first commit" → git commit
          </p>
        </div>
        <div className="mx-auto mt-[5.62rem] w-fit">
          <Button title="Let's Play!" link="/difficulty" color="primary" />
        </div>
      </div>
    </main>
  );
};

export default HowToPage;
