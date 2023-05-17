const path = require("path");


describe('upload files in browsers', () => {
    it('upload files by unhiding upload file buttton',async () => {
        const filepath =  path.join(__dirname,'../../files/test1.pdf');
        console.log(filepath);
        await browser.url('/cart');
       const remoteFilePath = await browser.uploadFile(filepath);

       await browser.execute("document.querySelector('#upfile_1').className=''");

       browser.pause(10000);
       await $('#upfile_1').setValue(remoteFilePath);
       await $('#upload_1').click();

       await expect($('.file_messageblock_fileheader_label'))
       .toHaveTextContaining("uploaded successfully");

    });
});