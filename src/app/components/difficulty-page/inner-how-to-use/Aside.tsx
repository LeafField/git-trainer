import React from "react";

const Aside = () => {
  return (
    <aside className="text-white row-start-2 row-end-3 col-start-1 col-end-2">
      <h3 className="text-2xl">フォルダ名、リモート名などの注意</h3>
      <p className="pt-9">
        リモートリポジトリのURLは「URL」と打ってください
        <br />
        例:git remote add origin URL
      </p>
      <p className="pt-4">
        フォルダ名を指定する場合は「.」と打ってください
        <br />
        例:git add .
      </p>
    </aside>
  );
};

export default Aside;
