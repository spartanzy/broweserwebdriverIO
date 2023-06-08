import allure from "@wdio/allure-reporter";
import HomePage from '../pages/home-page';
describe('Home',()=>{

    beforeEach(async()=>{
        await HomePage.open();
    })
    it('open URL and assrt title',async()=>{
        allure.addSeverity("Critical");
        
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
        
    })

    it('Navigate to about page and assert url',async()=>{
        allure.addSeverity("minor");
        allure.addDescription("Assert URL")
        await browser.url('/about');
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');
        // const element = await HomePage.getbtnGetStarted();
        // console.log("elements is ......."+element);
        // await element.click();
        // await expect(browser).toHaveUrlContaining('get-started');
    })

    it('Click get stared and assert text contains getstarted',async()=>{

       // await HomePage.open();      
        const element = await HomePage.btnGetStarted;
        await element.click();
        await expect(browser).toHaveUrlContaining('get-started');
        
    })

    it('Click logo and assert get started is no more in URL',async()=>{
        allure.addSeverity("minor");
        allure.addDescription("Assert value not present in url")
        await browser.url('/#get-started');       
        const element = await $('.custom-logo');
        await element.click();
        await expect(browser).not.toHaveUrlContaining('get-started');
    })

    it('Verifying text in homepage',async()=>{
        
      //  await HomePage.open();      
        const text = await HomePage.Textfield.getText();
        console.log(text);
        // first way compare texts
        await expect(text==='Think different. Make different.');
        //second have by have expect
       await expect(HomePage.Textfield).toHaveText('Think different. Make different.');
    })
}

)