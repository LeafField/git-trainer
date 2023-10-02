import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as Router from "next/navigation";
import Selected from "./Selected";

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
    const { container } = render(<Selected />);
    expect(screen.getByText("初級編:GitHub Flow")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
