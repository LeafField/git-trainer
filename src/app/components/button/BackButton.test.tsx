import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./BackButton.stories";

const { BackButtonTemplate } = composeStories(stories);

test("BackButtonがきちんとレンダリングされているか", () => {
  const { container } = render(<BackButtonTemplate />);
  expect(screen.getByRole("link")).toBeInTheDocument();
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
