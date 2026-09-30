import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/pages/LoginPage.spec';

const loginData = [
    { role: 'invalid username', username: 'AdminInvalid', password: 'admin123' },
    { role: 'invalid password', username: 'Admin', password: 'password123' },
    { role: 'blank username', username: '', password: 'admin123' },
    { role: 'blank password', username: 'Admin', password: '' },
];

test.describe('Login functionality tests', () => {
    loginData.forEach(({ role, username, password }) => {
        test(`Login with ${role}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await page.goto(process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            await loginPage.loginToApplication(username, password);
            await page.waitForSelector('text=Invalid credentials', { state: 'visible' });

            // Expect an error message to be visible for invalid login attempts
            await expect(page.getByText('Invalid credentials')).toBeVisible();
        });
    });
});