import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/pages/LoginPage.spec';
import { DashboardPage } from '../pages/pages/DashboardPage.spec';
import { MyInfoPage } from '../pages/pages/myInfoPage.spec';


        test('verify ESS user can able to view personal details', async ({ page }) => {
            const loginPage = new LoginPage(page);
            const myInfoPage = new MyInfoPage(page);
            await page.goto(process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            await loginPage.loginToApplication(process.env.USER || 'Admin', process.env.PASSWORD || 'admin123');
           
            // Expects page to have a heading with the name of Installation.
            await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
            await myInfoPage.navigateToMyInfo();
            await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

            await myInfoPage.clickEmployeeImage();
            await myInfoPage.uploadPhoto('"C:\\Users\\260079\\Downloads\\Media.jpg"');
        });
 
