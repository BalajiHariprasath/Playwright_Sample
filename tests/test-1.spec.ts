import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.cadit.com/');
  await page.getByRole('link', { name: 'Next Step >' }).first().click();
  await page.getByRole('link', { name: 'Next Step >' }).nth(1).click();
  await page.getByRole('button', { name: 'Pricing' }).click();
  await page.getByRole('button', { name: 'Learn' }).click();
  await page.getByRole('button', { name: 'Learn' }).click();
  await page.getByRole('link', { name: 'All Categories' }).click();
});