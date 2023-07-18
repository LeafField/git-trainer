import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MainPage from "./Main";
import { FetchData } from "../../../libs/fetcher";
import * as router from "next/navigation";
import { mockResizeObserver } from "jsdom-testing-mocks";

jest.mock("next/navigation");

const mockPush = jest.fn();

const mockRouter = (mockCallback?: () => {}) => {
  jest.spyOn(router, "useRouter").mockImplementation(() => ({
    back: jest.fn(),
    push: mockCallback ? mockCallback : jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }));
};

mockResizeObserver();

const dummyData: FetchData[] = [
  {
    id: 1,
    question: "GitHubのリモートリポジトリをローカルにクローンしたい",
    answer: "git clone URL",
  },
];

describe("Main.tsxの結合テスト", () => {
  it("Main.tsxが正しくレンダリングされているか", async () => {
    mockRouter();
    render(<MainPage data={dummyData} title="初級編:GitHub Flow" />);
    expect(
      screen.getByRole("heading", { name: "初級編:GitHub Flow" }),
    ).toBeInTheDocument();
  });

  it("dummyDataに対して回答した際、router.pushが呼ばれるか", async () => {
    mockRouter(mockPush);
    render(<MainPage data={dummyData} title="初級編:GitHub Flow" />);
    await userEvent.type(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" }),
      "git clone URL",
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" }),
      "{enter}",
    );
    waitFor(() => {
      expect(
        screen.getByText("Congratulations, you are correct!"),
      ).toBeInTheDocument();
    });

    await userEvent.type(
      screen.getByRole("textbox", {
        name: "Would you like to start the next problem?(y/n)",
      }),
      "y",
    );
    await userEvent.type(
      screen.getByRole("textbox", {
        name: "Would you like to start the next problem?(y/n)",
      }),
      "{enter}",
    );
    waitFor(() => {
      expect(mockPush).toHaveBeenCalled();
    });
  });

  it("ハンバーガーメニューが正しく動作しているか", async () => {
    mockRouter();
    render(<MainPage data={dummyData} title="初級編:GitHub Flow" />);
    await userEvent.click(screen.getByTestId("humbarger"));
    waitFor(() => {
      expect(screen.getByTestId("aside")).toBeInTheDocument();
    });
  });
});
