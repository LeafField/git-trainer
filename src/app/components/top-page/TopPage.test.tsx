import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as story from "./TopPage.stories";

const { TopPageStory } = composeStories(story);

describe("トップページのレンダリングテスト", () => {
  test("top-pageの各Roleの存在確認", () => {
    render(<TopPageStory />);
    expect(
      screen.getByText("Gitコマンドを手軽に空打ちできるサイト"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Git Empty" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Let's Play!" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "How to use" }),
    ).toBeInTheDocument();
  });

  test("それぞれのRoleの個数確認", () => {
    render(<TopPageStory />);
    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(screen.getAllByRole("heading")).toHaveLength(1);
    expect(
      screen.getAllByText("Gitコマンドを手軽に空打ちできるサイト"),
    ).toHaveLength(1);
  });

  test("コピーライト表記がされているか", () => {
    render(<TopPageStory />);
    expect(
      screen.getByText("Copyright © 2023 LeafField All rights reserved."),
    ).toBeInTheDocument();
  });

  test("スナップショットのテスト", () => {
    const { container } = render(<TopPageStory />);
    expect(container).toMatchSnapshot();
  });
});
