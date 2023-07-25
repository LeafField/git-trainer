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
      />,
    );
    expect(
      screen.getByText("リモートブランチをoriginに登録したい"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Git Empty" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" }),
    ).toBeInTheDocument();
  });

  it("正常系:問題に正解した時、callback関数が呼ばれるか", async () => {
    render(
      <ConsoleView
        finished={false}
        question="リモートブランチをoriginに登録したい"
        answer="git remote add origin URL"
        nextCallback={mockCallback}
      />,
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" }),
      "git remote add origin URL",
    );

    await userEvent.type(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" }),
      "{enter}",
    );

    await waitFor(() => {
      expect(mockCallback).toHaveBeenCalled();
    });
  });

  it("異常系:問題に不正解の時、答えが表示されるか", async () => {
    render(
      <ConsoleView
        finished={false}
        question="リモートブランチをoriginに登録したい"
        answer="git remote add origin URL"
        nextCallback={mockCallback}
      />,
    );

    await userEvent.type(
      screen.getByRole("textbox", { name: "C:users/gitEmpty>" }),
      "{enter}",
    );

    waitFor(() => {
      expect(
        screen.getByText("不正解です！正解は「git remote add origin URL」です"),
      ).toBeInTheDocument();
    });
  });

  it("consoleView初期状態のスナップショットテスト", () => {
    const { container } = render(
      <ConsoleView
        finished={false}
        question="リモートブランチをoriginに登録したい"
        answer="git remote add origin URL"
        nextCallback={mockCallback}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("consoleView終了状態のスナップショットテスト", () => {
    const { container } = render(
      <ConsoleView
        finished={true}
        question=""
        answer=""
        nextCallback={mockCallback}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
