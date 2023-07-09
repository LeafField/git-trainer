import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as story from "./Button.stories";
import Button from "./Button";

const { Primary, Secondary } = composeStories(story);

describe("Buttonのレンダリングテスト", () => {
  test("primaryのレンダリングテスト", () => {
    render(<Primary />);
    expect(
      screen.getByRole("link", { name: "Let's Play!" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });

  test("secondaryのレンダリングテスト", () => {
    render(<Secondary />);
    expect(
      screen.getByRole("link", { name: "How to use" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/howto");
  });

  test("デフォルトカラーのテスト", () => {
    render(<Button title="テスト" link="/test" />);
    expect(screen.getByRole("link")).toHaveClass("bg-primary");
  });
});
