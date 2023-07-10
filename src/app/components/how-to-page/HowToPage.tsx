import React from "react";
import Image from "next/image";
import howToImage from "../../../../public/howto.jpg";
import Button from "../button/Button";

const HowToPage = () => {
  return (
    <main className="md:px-12 lg:px-40 pb-24">
      <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold text-center text-white pt-[7.5rem]">
        Git Emptyの遊び方
      </h1>
      <figure className="relative max-w-4xl mx-auto  container mt-24 md:mt-[11.25rem]">
        <Image
          src={howToImage}
          width={1605}
          height={856}
          style={{ objectFit: "cover" }}
          alt="Git Emptyの遊び方参考画像"
          className="w-full h-auto transition-all"
          sizes="100vw"
          priority
          placeholder="blur"
        />
      </figure>
      <div className="max-w-4xl mx-auto">
        <div className="pt-[7.5rem] text-base space-y-4 text-white">
          <p>
            コンソール上部にGitの練習課題が表示されるので該当するgitコマンドを入力してEnterを押してください。
          </p>
          <p>分からない時は右上の検索窓から検索してみてください。</p>
        </div>

        <div className="text-white mt-[5.62rem]">
          <h2 className="text-3xl font-bold">
            フォルダ名、リモート名などの注意
          </h2>
          <p className="text-base mt-[2.25rem]">
            リモートリポジトリのURLは「URL」と打ってください
            <br />
            例:git remote add origin URL
          </p>
          <p className="text-base mt-4">
            フォルダ名を指定する場合は「.」と打ってください
            <br />
            例:git add .
          </p>
        </div>
        <div className="w-fit mx-auto mt-[5.62rem]">
          <Button title="Let's Play!" link="/difficulty" color="primary" />
        </div>
      </div>
    </main>
  );
};

export default HowToPage;
