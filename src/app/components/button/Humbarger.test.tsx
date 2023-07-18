import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Humbarger from "./Humbarger";

describe("Humbargerの単体テスト", () => {
  it("ドロワーメニューが閉じている時に正しくレンダリングされているか", () => {
    const { container } = render(
      <Humbarger HumbargerOpen={() => {}} isHidden />,
    );
    expect(screen.getByTestId("humbarger")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("ドロワーメニューが開いている時に正しくレンダリングされているか", () => {
    const { container } = render(
      <Humbarger HumbargerOpen={() => {}} isHidden={false} />,
    );
    expect(screen.getByTestId("humbarger")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("クリック時にコールバック関数が正しく呼び出されているか", async () => {
    const HumbargerOpen = jest.fn();
    render(<Humbarger HumbargerOpen={HumbargerOpen} isHidden />);
    await userEvent.click(screen.getByTestId("humbarger"));
    expect(HumbargerOpen).toHaveBeenCalledTimes(1);
  });
});
