import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { composeStories } from "@storybook/testing-react";
import * as story from "./Selected.stories";
import * as Router from "next/navigation";

const { SelectedStory } = composeStories(story);

jest.mock("next/navigation");

const mockRouter = (mockCallback?: () => {}) => {
  jest.spyOn(Router, "useRouter").mockImplementation(() => ({
    back: jest.fn(),
    push: mockCallback ? mockCallback : jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }));
};

describe("Selectedの結合テスト", () => {
  it("Selectedが正しくレンダリングされているか", async () => {
    mockRouter();
    render(<SelectedStory />);
    expect(screen.getByText("初級編:GitHub Flow")).toBeInTheDocument();
  });
  it("Selectorのクリックイベントが発火するか", async () => {
    const mockPushFn = jest.fn();
    mockRouter(mockPushFn);
    render(<SelectedStory />);
    await userEvent.click(screen.getByText("初級編:GitHub Flow"));
    expect(mockPushFn).toHaveBeenCalled();
    expect(mockPushFn).toHaveBeenCalledWith("/console/flow");
  });
});
