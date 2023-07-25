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

  it("dummyDataに対して回答した後、もう一度遊ぶかへの回答でnと入力した際にrouter.pushが呼ばれるか", async () => {
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
        screen.getByText("もう一度同じ難易度で遊びますか？(y/n)"),
      ).toBeInTheDocument();
    });

    await userEvent.type(
      screen.getByRole("textbox", {
        name: "もう一度同じ難易度で遊びますか？(y/n)",
      }),
      "n",
    );

    await userEvent.type(
      screen.getByRole("textbox", {
        name: "もう一度同じ難易度で遊びますか？(y/n)",
      }),
      "{enter}",
    );

    waitFor(() => {
      expect(mockPush).toBeCalledTimes(1);
    });
  });

  it("dummyDataに対して回答した後、もう一度遊ぶかへの回答でyと入力した際に再び問題が表示されるかどうか", async () => {
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
        screen.getByText("もう一度同じ難易度で遊びますか？(y/n)"),
      ).toBeInTheDocument();
    });

    await userEvent.type(
      screen.getByRole("textbox", {
        name: "もう一度同じ難易度で遊びますか？(y/n)",
      }),
      "y",
    );

    await userEvent.type(
      screen.getByRole("textbox", {
        name: "もう一度同じ難易度で遊びますか？(y/n)",
      }),
      "{enter}",
    );

    waitFor(() => {
      expect(
        screen.getByText(
          "GitHubのリモートリポジトリをローカルにクローンしたい",
        ),
      ).toBeInTheDocument();
    });
  });

  it("異常系:dummyDataに正解した後の回答でyでもnでもない文字を入力した際、入力がリセットされるかどうか", async () => {
    render(<MainPage data={dummyData} title="初級編:GitHub Flow" />);
    await userEvent.type(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" }),
      "git clone URL",
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" }),
      "{enter}",
    );

    await userEvent.type(
      screen.getByRole("textbox", {
        name: "もう一度同じ難易度で遊びますか？(y/n)",
      }),
      "a",
    );
    await userEvent.type(
      screen.getByRole("textbox", {
        name: "もう一度同じ難易度で遊びますか？(y/n)",
      }),
      "{enter}",
    );

    waitFor(() => {
      expect(
        screen.getByRole("textbox", {
          name: "もう一度同じ難易度で遊びますか？(y/n)",
        }),
      ).toHaveDisplayValue("");
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
