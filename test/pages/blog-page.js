class BlogPage{

    open(){
        return browser.url('/blog');
     }
    
    get recentPostsLinks(){

        return $$('#recent-posts-3 li a');
    }

}
export default new BlogPage();