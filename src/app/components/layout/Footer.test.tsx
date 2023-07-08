import { screen, render } from "@testing-library/react";
import Footer from "./Footer";

test("Footerが正しくレンダリングされているか", () => {
  render(<Footer />);
  expect(
    screen.getByText("Copyright © 2023 LeafField All rights reserved.")
  ).toBeInTheDocument();
});
