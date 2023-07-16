import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConsoleView from "./Console-view";

import * as Router from "next/navigation";

jest.mock("next/navigation");

const mockPush = jest.fn();

const mockCallback = jest.fn();

beforeEach(() => {
  jest.spyOn(Router, "useRouter").mockImplementation(() => ({
    back: jest.fn(),
    push: mockPush,
    forward: jest.fn(),
    refresh: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }));
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("ConsoleViewの単体テスト", () => {
  it("ConsoleViewが正しくレンダリングされているか", async () => {
    render(
      <ConsoleView
        finished={false}
        question="リモートブランチをoriginに登録したい"
        answer="git remote add origin URL"
        nextCallback={mockCallback}
      />
    );
    expect(
      screen.getByText("リモートブランチをoriginに登録したい")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Git Empty" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" })
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Would you like to start the next problem?(y/n)")
    ).not.toBeInTheDocument();
  });

  it("正常系:課題に正解した場合、次の課題に進むためのコールバック関数が発火するか", async () => {
    const { container } = render(
      <ConsoleView
        finished={false}
        question="リモートブランチをoriginに登録したい"
        answer="git remote add origin URL"
        nextCallback={mockCallback}
      />
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" }),
      "git remote add origin URL"
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" }),
      "{enter}"
    );
    waitFor(() => {
      expect(
        screen.getByText("Would you like to start the next problem?(y/n)")
      ).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });

    await userEvent.type(
      screen.getByRole("textbox", {
        name: "Would you like to start the next problem?(y/n)",
      }),
      "y"
    );

    await userEvent.type(
      screen.getByRole("textbox", {
        name: "Would you like to start the next problem?(y/n)",
      }),
      "{enter}"
    );
    waitFor(() => {
      expect(mockCallback).toHaveBeenCalled();
    });
  });

  it("正常系:問題に正解した上で、次の問題に進まない場合mockPushが発火するか", async () => {
    render(
      <ConsoleView
        finished={false}
        question="リモートブランチをoriginに登録したい"
        answer="git remote add origin URL"
        nextCallback={mockCallback}
      />
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" }),
      "git remote add origin URL"
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" }),
      "{enter}"
    );

    await userEvent.type(
      screen.getByRole("textbox", {
        name: "Would you like to start the next problem?(y/n)",
      }),
      "n"
    );

    await userEvent.type(
      screen.getByRole("textbox", {
        name: "Would you like to start the next problem?(y/n)",
      }),
      "{enter}"
    );
    waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });

  it("異常系:問題に正解した後の問いに(y/n)以外の回答をする", async () => {
    render(
      <ConsoleView
        question="リモートブランチをoriginに登録したい"
        answer="git remote add origin URL"
        nextCallback={mockCallback}
        finished={false}
      />
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" }),
      "git remote add origin URL"
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" }),
      "{enter}"
    );

    await userEvent.type(
      screen.getByRole("textbox", {
        name: "Would you like to start the next problem?(y/n)",
      }),
      "a"
    );

    await userEvent.type(
      screen.getByRole("textbox", {
        name: "Would you like to start the next problem?(y/n)",
      }),
      "{enter}"
    );
    waitFor(() => {
      expect(mockPush).not.toHaveBeenCalled();
      expect(mockCallback).not.toHaveBeenCalled();
      expect(
        screen.getByRole("textbox", {
          name: "Would you like to start the next problem?(y/n)",
        })
      ).toHaveValue("");
    });
  });

  it("異常系:問題に不正解の場合に、不正解のメッセージが表示されるか", async () => {
    const { container } = render(
      <ConsoleView
        question="リモートブランチをoriginに登録したい"
        answer="git remote add origin URL"
        nextCallback={mockCallback}
        finished={false}
      />
    );

    await userEvent.type(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" }),
      "git"
    );

    await userEvent.type(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" }),
      "{enter}"
    );
    waitFor(() => {
      expect(
        screen.getByText("不正解です！右上の検索バーから正解を検索してみてね！")
      ).toBeInTheDocument();
      expect(screen.queryByText("git")).not.toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });

  it("正常系:全問正解後にメッセージが流れ、router.pushが発火するか", async () => {
    jest.useFakeTimers();
    const { container } = render(
      <ConsoleView
        finished={true}
        question="リモートブランチをoriginに登録したい"
        answer="git remote add origin URL"
        nextCallback={mockCallback}
      />
    );
    jest.runAllTimers();
    expect(screen.getByText("Congratulations!")).toBeInTheDocument();
    expect(mockPush).toHaveBeenCalledWith("/difficulty");
    expect(container).toMatchSnapshot();
  });
});
