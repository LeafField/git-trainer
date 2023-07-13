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
        url="/console/flow"
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
        url="/console/flow"
      />
    );
    expect(screen.getByText("初級編:GitHub Flow")).toBeInTheDocument();
    expect(screen.getByText("初級編:GitHub Flow")).toHaveClass("border-b");
  });

  test("lastを指定しない", () => {
    render(
      <Selector
        title="初級編:GitHub Flow"
        clickHandler={() => {}}
        url="/console/flow"
      />
    );
    expect(screen.getByText("初級編:GitHub Flow")).not.toHaveClass("border-b");
  });

  test("クリックイベントが発火するか", async () => {
    const mockFn = jest.fn();
    render(
      <Selector
        title="初級編:GitHub Flow"
        last={true}
        clickHandler={mockFn}
        url="/console/flow"
      />
    );
    await userEvent.click(screen.getByText("初級編:GitHub Flow"));
    expect(mockFn).toHaveBeenCalled();
  });

  test("wai-aria属性が付与されているか", () => {
    render(
      <Selector
        title="初級編:GitHub Flow"
        last={true}
        clickHandler={() => {}}
        url="/console/flow"
      />
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
