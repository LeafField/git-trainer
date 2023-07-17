import { act, render, screen } from "@testing-library/react";
import Aside from "./Aside";
import { mockResizeObserver } from "jsdom-testing-mocks";

const resizeObserver = mockResizeObserver();

describe("Asideの単体テスト", () => {
  it("Asideのタイトルが正しく表示されているか", () => {
    render(<Aside isHidden={false} />);
    expect(
      screen.getByText("フォルダ名、リモート名などの注意")
    ).toBeInTheDocument();
  });

  it("画面サイズの変更に対し、aria-hiddenのstateが正しく管理されているか", () => {
    render(<Aside isHidden={true} />);
    resizeObserver.mockElementSize(document.body, {
      contentBoxSize: { inlineSize: 1024, blockSize: 768 },
    });
    act(() => {
      resizeObserver.resize(document.body);
    });
    expect(screen.getByTestId("aside")).toHaveAttribute("aria-hidden", "false");

    resizeObserver.mockElementSize(document.body, {
      contentBoxSize: { inlineSize: 1023, blockSize: 768 },
    });
    act(() => {
      resizeObserver.resize(document.body);
    });
    expect(screen.getByTestId("aside")).toHaveAttribute("aria-hidden", "true");
  });

  it("Asideのスナップショットテスト", () => {
    const { container } = render(<Aside isHidden={false} />);
    expect(container).toMatchSnapshot();
  });
});
