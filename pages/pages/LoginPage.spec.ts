import{Page} from'@playwright/test';


export class LoginPage{
    readonly page:Page

    private readonly usernameInput;
    private readonly passwordInput;
    private readonly loginButton;    

    constructor(page:Page){
        this.page=page;
        this.usernameInput=this.page.getByPlaceholder('Username');
        this.passwordInput=this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

    async loginToApplication(username:string,password:string){
        await this.page.goto('/web/index.php/auth/login');
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
