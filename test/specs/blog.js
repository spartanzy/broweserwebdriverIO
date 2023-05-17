import BlogPage from '../pages/blog-page';
describe('Reading blog posts', () => {
    it('counting no of posts and asserting length >10', async () => {
        
     await  BlogPage.open();
     const blogs= await BlogPage.recentPostsLinks;

     //Below commens is to make wdio wait for sometime - 10 secs
      await  browser.pause("10000");
     // assert if no of posts are 5
     await expect(blogs.length).toEqual(5);
     await console.log(blogs.length);
     // or we can also use
     await expect(blogs).toHaveLength(5);
      // assert if each post length is greater than 10  
     for(const blog of blogs){
        const text = await blog.getText();
       await expect(text.length).toBeGreaterThan(10);
     }

    });
});