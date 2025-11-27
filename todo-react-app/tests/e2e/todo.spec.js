const { test, expect } = require("@playwright/test");

test.describe("Todo app (Auth -> Create Item)", () => {
  test("should login, reach todo list, and create item", async ({ page }) => {
    await page.goto("/");

    // Confirm we see the auth page and Login heading
    await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();

    // Fill the login form
    await page.fill("#email", "test@example.com");
    await page.fill("#password", "secret123");
    await page.click('button[type="submit"]');

    // On successful login, TodoList should be visible
    await expect(
      page.getByRole("heading", { name: "Todo / People List" })
    ).toBeVisible();

    // Create a new todo/person
    await page.fill('input[name="id"]', "id1");
    await page.fill('input[name="name"]', "Test User");
    await page.selectOption('select[name="event"]', "global");
    await page.selectOption('select[name="profession"]', "developer");
    await page.selectOption('select[name="education"]', "btech");
    await page.click("text=Create");

    // Verify the newly added row appears in the table
    const row = page
      .locator("table.todo-table tbody tr")
      .filter({ hasText: "id1" });
    await expect(row).toHaveCount(1);
    await expect(row).toContainText("Test User");
  });
});
