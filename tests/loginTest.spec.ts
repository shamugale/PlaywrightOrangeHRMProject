import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/pages/LoginPage.spec';

test('login to the Orange HRM application', async ({ page }) => {
  // Navigate to the login page
  await page.goto('/login');

  const loginPage = new LoginPage(page);
  await loginPage.loginToApplication('Admin', 'admin123');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});


