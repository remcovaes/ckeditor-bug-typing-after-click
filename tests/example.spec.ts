import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ckeditor.com/ckeditor-5/demo/');
  await page.getByRole('textbox', { name: 'Editor editing area: main' }).first().press('Control+a');
  await page.getByRole('textbox', { name: 'Editor editing area: main' }).first().press('Delete');
  await page.locator('.l-pv-xl').first().click();
  
  await page.getByRole('textbox', { name: 'Editor editing area: main' }).getByRole('paragraph').click();
  
  await new Promise(res => setTimeout(res, 500));
  
  await page.keyboard.type('test');
  
  await expect(page.locator('text="test"')).toBeVisible();
});
