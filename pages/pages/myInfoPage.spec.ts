import { Page,expect } from '@playwright/test';

export class MyInfoPage {
   private lnkMyInfo: any;
   private personalDetails;
   private fullNameInput;
   private employeeImage;
   private uploadPhotoButton;

   constructor(private page: Page) {
      this.lnkMyInfo = this.page.getByRole('link', { name: 'My Info' });
      this.personalDetails = this.page.getByRole('heading', { name: 'Personal Details' });
      this.fullNameInput = this.page.getByRole('textbox', { name: 'Full Name' });
      this.employeeImage = this.page.locator('img[class="oxd-userdropdown-img"]');  
      this.uploadPhotoButton = this.page.locator('input[type="file"]');
   }

    async navigateToMyInfo() {
        await this.lnkMyInfo.click();
    }

    async setPersonalDetails(fullname: string) {
        await this.fullNameInput.fill(fullname);
    }

    async getPersonalDetails() {
        return this.page.locator('text=Personal Details');
    }

    async clickEmployeeImage() {
        await expect(this.employeeImage).toBeVisible();
        await this.employeeImage.click();
    }
    async uploadPhoto(filePath: string) {
        await this.uploadPhotoButton.setInputFiles(filePath);
    }
}