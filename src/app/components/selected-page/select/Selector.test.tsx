import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Selector from "./Selector";

describe("Selectorのレンダリングテスト", () => {
  test("レンダリング位置が最後以外", () => {
    render(
      <Selector
        title="初級編:GitHub Flow"
        last={false}
        clickHandler={() => {}}
      />
    );
    expect(screen.getByText("初級編:GitHub Flow")).toBeInTheDocument();
    expect(screen.getByText("初級編:GitHub Flow")).not.toHaveClass("border-b");
  });

  test("レンダリング位置が最後", () => {
    render(
      <Selector
        title="初級編:GitHub Flow"
        last={true}
        clickHandler={() => {}}
      />
    );
    expect(screen.getByText("初級編:GitHub Flow")).toBeInTheDocument();
    expect(screen.getByText("初級編:GitHub Flow")).toHaveClass("border-b");
  });

  test("クリックイベントが発火するか", async () => {
    const mockFn = jest.fn();
    render(
      <Selector title="初級編:GitHub Flow" last={true} clickHandler={mockFn} />
    );
    await userEvent.click(screen.getByText("初級編:GitHub Flow"));
    expect(mockFn).toHaveBeenCalled();
  });
});
