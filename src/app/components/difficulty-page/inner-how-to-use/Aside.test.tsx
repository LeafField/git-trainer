import { render, screen } from "@testing-library/react";
import Aside from "./Aside";

describe("Asideの単体テスト", () => {
  it("Asideのタイトルが正しく表示されているか", () => {
    render(<Aside />);
    expect(
      screen.getByText("フォルダ名、リモート名などの注意")
    ).toBeInTheDocument();
  });

  it("Asideのスナップショットテスト", () => {
    const { container } = render(<Aside />);
    expect(container).toMatchSnapshot();
  });
});
