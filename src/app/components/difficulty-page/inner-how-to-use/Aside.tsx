import React, { FC, useEffect } from "react";

type Props = {
  isHidden: boolean;
};

const Aside: FC<Props> = ({ isHidden }) => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  useEffect(() => {
    const resize = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.contentRect.width < 1024) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      });
    });
    resize.observe(document.body);

    return () => {
      resize.disconnect();
    };
  }, []);

  return (
    <aside
      className="absolute inset-0 col-start-1 col-end-2 row-start-2 row-end-3 bg-consoleHeader px-4 pt-[6rem] text-white transition-all
       duration-300 ease-in-out aria-hidden:invisible  aria-hidden:opacity-0 lg:visible lg:static lg:bg-inherit lg:px-0 lg:pt-0"
      aria-hidden={isMobile ? `${isHidden}` : "false"}
      id="aside"
      data-testid="aside"
    >
      <h3 className="text-lg lg:text-2xl">フォルダ名、リモート名などの注意</h3>
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
