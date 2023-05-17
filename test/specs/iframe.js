describe('Iframe Validations', () => {
    it('switich to frame validate and back', async () => {
        
        await browser.url('/iframe-sample');
        const frame = await $('#advanced_iframe');

       await browser.switchToFrame(frame);
        
        const headerofFrame = await $('em');
       await expect(headerofFrame).toHaveTextContaining("EARLYBIRD");
       await expect($("#site-logo")).toExist();

        await browser.switchToParentFrame();

        await expect(browser).toHaveTitle("IFrame Sample – Practice E-Commerce Site");
    });
});