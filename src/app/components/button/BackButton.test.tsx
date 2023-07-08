import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as Stories from "./BackButton.stories";

const { BackButtonTemplate } = composeStories(Stories);

test("BackButtonがきちんとレンダリングされているか", () => {
  render(<BackButtonTemplate />);
  expect(screen.getByRole("link")).toBeInTheDocument();
  expect(screen.getByRole("img")).toBeInTheDocument();
});