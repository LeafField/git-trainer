import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as story from "./Button.stories";

const { Primary, Secondary } = composeStories(story);

describe("Buttonのレンダリングテスト", () => {
  test("primaryのレンダリングテスト", () => {
    render(<Primary />);
    expect(
      screen.getByRole("link", { name: "Let’s Play!" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });

  test("secondaryのレンダリングテスト", () => {
    render(<Secondary />);
    expect(
      screen.getByRole("link", { name: "How to use" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });
});
