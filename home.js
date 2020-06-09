const Page = require('./page');

class home extends Page{
    

    userinput(){
    this.txtwrite('email', 'm.monisha1@gmail.com');
    }

    pwdinput(){
    this.txtwrite('pass', '@Newyorkcity24');
    }

    clicklogin(){
    this.findele('u_0_b').click();
    }
}
module.exports = home;
