import { render, screen } from "@testing-library/react";
import PageTitle from "./PageTitle";

describe("PageTitle", () => {
  it("初級編:GitHub Flowが表示される", () => {
    render(<PageTitle title="初級編:GitHub Flow" />);
    expect(screen.getByText("初級編:GitHub Flow")).toBeInTheDocument();
  });

  it("titleの中身を変更した時も正しく表示される", () => {
    render(<PageTitle title="中級編:GitHub Flow" />);
    expect(screen.getByText("中級編:GitHub Flow")).toBeInTheDocument();
  });
});
