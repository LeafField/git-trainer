import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Buttonのレンダリングテスト", () => {
  test("primaryのレンダリングテスト", () => {
    const { container } = render(
      <Button color="primary" link="/difficulty" title="Let's Play!" />,
    );
    expect(
      screen.getByRole("link", { name: "Let's Play!" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/difficulty");
    expect(container).toMatchSnapshot();
  });

  test("secondaryのレンダリングテスト", () => {
    const { container } = render(
      <Button link="/howto" title="How to use" color="secondary" />,
    );
    expect(
      screen.getByRole("link", { name: "How to use" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/howto");
    expect(container).toMatchSnapshot();
  });

  test("デフォルトカラーのテスト", () => {
    render(<Button title="テスト" link="/test" />);
    expect(screen.getByRole("link")).toHaveClass("bg-primary");
  });
});
