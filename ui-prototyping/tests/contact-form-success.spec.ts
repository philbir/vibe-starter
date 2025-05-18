import { test, expect } from '@playwright/test';

test('contact-form-success', async ({ page }) => {
  // 1. Navigate to contact page
  await page.goto('http://localhost:5176/vibe-starter/contact');

  // 2. Fill in Name
  await page.getByRole('textbox', { name: 'Name' }).fill('Phil');

  // 3. Fill in Email
  await page.getByRole('textbox', { name: 'Email' }).fill('phil@example.com');

  // 4. Fill in Message
  await page.getByRole('textbox', { name: 'Message' }).fill('This is a test message from the MCP server.');

  // 5. Click Send Message
  await page.getByRole('button', { name: 'Send Message' }).click();

  // 6. Assert confirmation page shows heading
  await expect(page.getByRole('heading', { name: 'Thank You, Phil!' })).toBeVisible();

  // 7. Take a snapshot of the confirmation page
  await page.screenshot({ path: 'tests/contact-form-success.png', fullPage: true });
});
