import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Selector from "./Selector";

describe("Selectorのレンダリングテスト", () => {
  test("レンダリング位置が最後以外", () => {
    render(
      <Selector title="初級編:GitHub Flow" last={false} url="/console/flow" />
    );
    expect(screen.getByText("初級編:GitHub Flow")).toBeInTheDocument();
    expect(screen.getByText("初級編:GitHub Flow")).not.toHaveClass("border-b");
  });

  test("レンダリング位置が最後", () => {
    render(
      <Selector title="初級編:GitHub Flow" last={true} url="/console/flow" />
    );
    expect(screen.getByText("初級編:GitHub Flow")).toBeInTheDocument();
    expect(screen.getByText("初級編:GitHub Flow")).toHaveClass("border-b");
  });

  test("lastを指定しない", () => {
    render(<Selector title="初級編:GitHub Flow" url="/console/flow" />);
    expect(screen.getByText("初級編:GitHub Flow")).not.toHaveClass("border-b");
  });
});
