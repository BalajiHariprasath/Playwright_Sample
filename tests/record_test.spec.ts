import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('mr.b.hariprasathbalaji@gmail.com');
  await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Hari@1992');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});