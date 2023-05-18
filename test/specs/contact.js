import allure from "@wdio/allure-reporter"
import contactPage from "../pages/contact-page";
import { faker } from '@faker-js/faker';

before (()=>{
    console.log("Before the test");
})

after (()=>{
    console.log("After the test");
})
describe('Contact form', () => {
    it('Submit form and assert success message', async () => {
        allure.addSeverity("Critical");
        allure.addDescription("Assert Form submit successfully")
        await contactPage.open();


       // contactPage.createForm("Tanz","test@tere.com","123121312","test Message");

        contactPage.createForm(faker.person.fullName(),
            faker.internet.email(),
            faker.phone.number(),
            faker.lorem.paragraph(1));  

        const message = await contactPage.successMessage;
        await expect(message).toHaveTextContaining("Thanks for contacting us! We will be in touch with you shortly") 

        
    });
});