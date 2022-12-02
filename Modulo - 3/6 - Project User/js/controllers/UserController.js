class UserController {
    constructor() {
        this.addEventBtns();
        this.users = {}
    }

    addLine(user) {
      
    }

    readPhoto(data) {
        return new Promise((resolve, reject) => {
             let fr = new FileReader();
       fr.addEventListener('load', () => {
        resolve(fr.result)
         });
         fr.addEventListener('error', (e)=>{
            reject(e)
         })
       fr.readAsDataURL(data)
    
        })
      
}
    register() {
      let formEl = document.querySelector('.register');
      let elements = formEl.elements;
      let user;
      let registerData = {};
      [...elements].forEach((v) =>{
        switch(v.type) {
             case 'checkbox':
                 registerData.admin = v.checked
               break;
             case 'file':   
                this.readPhoto(v.files[0])
               break;
             default:
                 registerData[v.name] = v.value
               break;   
        }
      })
      if(JSON.stringify(this.users) == JSON.stringify({})) {
        user = new User(0,registerData.name,'', registerData.email, registerData.phone, registerData.admin, registerData.password );
      } else {
        let lastUser = Object.values({'a':'teste', 'b':'teste2'})[Object.values({'a':'teste','b':'teste2'}).length-1];
        user = new User(0,lastUser.getId()+1, registerData.name,' ', registerData.email, registerData.phone, registerData.admin, registerData.password );
      }
      let fileEl = elements.photo;
      if(fileEl.files.length == 0){
        user.setPhoto('img/icon.jpg')
      }else {
        this.readPhoto(fileEl.files[0]).then((result) => {
       user.setPhoto(result)
      }, (e)=>{
        console.error(e)
      })
      console.log(user);
      
    }
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


    setPhoto(photo){
        this._photo = photo;
    }
}    


