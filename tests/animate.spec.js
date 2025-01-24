// @ts-check
import { test, expect } from '@playwright/test';

test('animate', async ({ page }) => {
  await page.goto('http://localhost:8000/');

  await page.mouse.move(2000, 1000, { steps: 100 });

  const spanElements = await page.$$('span');
  expect(spanElements.length).toBeGreaterThan(10);
});