class BlogPage{

    open(){
        return browser.url('/blog');
     }
    
    get recentPostsLinks(){

        return $$('#recent-posts-3 li a');
    }

}
export default new BlogPage();
//another way to export in older version of ES
// module.exports = new BlogPage();  