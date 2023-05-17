class NavComponent{


    get NavMenus(){
        return $('#primary-menu').$$("li[id*='menu']");
    }
   
}

export default new NavComponent();