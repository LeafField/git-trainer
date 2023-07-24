import { test, expect } from "@playwright/test";

test("各ページが正しくレンダリングされているか", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Git Empty");

  await page.getByRole("link", { name: "How to use" }).click();
  await expect(page).toHaveTitle("How to use | Git Empty");
  await expect(
    page.getByRole("heading", { name: "Git Emptyの遊び方" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Let's Play!" }).click();
  await expect(page.getByRole("heading", { name: "難易度選択" })).toBeVisible();
  await page.getByRole("link", { name: "初級編:GitHub Flow" }).click();
  await expect(page).toHaveTitle("初級編:GitHub Flow | Git Empty");
  await expect(
    page.getByRole("heading", { name: "初級編:GitHub Flow" }),
  ).toBeVisible();
  await expect(
    page.getByText("Git Hubのリポジトリをローカルにクローンしたい"),
  ).toBeVisible();
});
