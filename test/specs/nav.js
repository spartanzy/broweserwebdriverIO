import HomePage from '../pages/home-page';
describe('Navigation Menu', () => {
    it('get text from all menu and assert', async() => {
        
        const expectedList = ['Home','About','Shop','Blog','Contact','My account'];
        await browser.url('/');

        //below command is to make explicit wait for until condition is satisfied
       await  browser.waitUntil(async () =>   {
            const home = await $("//a[text()='Home']").getText();
            return home==="Home";
       })
       
       
        const ActualList = [];
        // finding elements by chaining 
        const navmenus = await HomePage.NavComponent.NavMenus;
        for(const menu of navmenus)
            ActualList.push(await menu.getText());

                await expect(expectedList).toEqual(ActualList);
    });
});