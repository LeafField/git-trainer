import { screen, render } from "@testing-library/react";
import NowLoading from "./NowLoading";

describe("NowLoadingのレンダリングテスト", () => {
  test("NowLoadingが正しくレンダリングされているか", () => {
    const { container } = render(<NowLoading />);
    expect(screen.getByTestId("nowloading")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
