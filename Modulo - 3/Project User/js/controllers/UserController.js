class UserController {
    constructor() {
        this.addEventBtns();
        this.users = {}
    }

    addLine(user) {
      
    }

    register() {
      let formEl = document.querySelector('.register');
      let elements = formEl.elements;
      let user;
      if(JSON.stringify(this.users) == JSON.stringify({})) {
        user = new User(0,elements.name.value, elements.photo.value, elements.email.value, elements.phone.value, elements.admin.value, elements.password.value );
      } else {
        let lastUser = Object.values({'a':'teste', 'b':'teste2'})[Object.values({'a':'teste','b':'teste2'}).length-1];
        user = new User(0,lastUser.getId()+1, elements.photo.value, elements.email.value, elements.phone.value, elements.admin.value, elements.password.value );
      }
      console.log(user)
      
    }

    addEventBtns() {
      document.querySelector('.add').addEventListener('click', ()=> {
        document.querySelector('.form-add').style.display = 'flex'
      })
         
      document.querySelectorAll('.close')[0].addEventListener('click', () => {
        document.querySelector('.form-add').style.display = 'none'
      })


      document.querySelectorAll('.check')[0].addEventListener('click', () => {
        this.register();
      })


      document.querySelectorAll('.close')[1].addEventListener('click', () => {
        document.querySelector('.form-add').style.display = 'none'
      })
    }

}    


