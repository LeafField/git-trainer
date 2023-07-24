import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as story from "./Title.stories";

const { TitleStory } = composeStories(story);

describe("サイトタイトルのレンダリングテスト", () => {
  test("必要な文字列がレンダリングされているかどうか", () => {
    render(<TitleStory />);
    expect(
      screen.getByText("Gitコマンドを手軽に空打ちできるサイト"),
    ).toBeInTheDocument();
    expect(screen.getByText("Git Empty")).toBeInTheDocument();
  });
});
