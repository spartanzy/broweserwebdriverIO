import NavComponent from './components/nav-comp';
class HomePage{

    open(){
       return browser.url('/');
    }

    get btnGetStarted(){
         return $('#get-started');
    }

    get Textfield(){
        return $('.elementor-widget-container h1');
    }

    get NavComponent(){
        return NavComponent;
    }
}

export default new HomePage();