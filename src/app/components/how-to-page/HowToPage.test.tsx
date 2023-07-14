import { render, screen } from "@testing-library/react";
import HowToPage from "./HowToPage";

describe("HowToPage", () => {
  test("HowToPageが正しく表示されているか", () => {
    const { container } = render(<HowToPage />);
    expect(screen.getByText("Git Emptyの遊び方")).toBeInTheDocument();
    expect(
      screen.getByText(
        "コンソール上部にGitの練習課題が表示されるので該当するgitコマンドを入力してEnterを押してください。"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("分からない時は右上の検索窓から検索してみてください。")
    ).toBeInTheDocument();
    expect(
      screen.getByText("フォルダ名、リモート名などの注意")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Let's Play!" })
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
