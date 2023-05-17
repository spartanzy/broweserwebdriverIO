class ContactPage{

    open(){

        return browser.url('/contact');
    }

    get nameField(){

        return $("//span[text()='Name']//parent::label//following::input");
    }

    get emailField(){

        return $("//span[text()='Email']//parent::label//following::input");
    }

    get phoneField(){

        return $("//span[text()='Phone']//parent::label//following::input");
    }

    get messageField(){

        return $("//span[text()='Message']//parent::label//following::textarea");
    }

    get submitButton(){

        return $("//button[@type='submit']");
    }

    get successMessage(){

        return $("//div[@role='alert']");
    }

  async  createForm(name,Email,phone,message){
    await    this.nameField.setValue(name);
    await  this.emailField.setValue(Email);
    await   this.phoneField.setValue(phone);
    await   this.messageField.setValue(message);
    await   this.submitButton.click();
    }

}
export default new ContactPage();