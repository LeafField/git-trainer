import { render } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinnerの単体テスト", () => {
  it("スナップショットテスト", () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});
