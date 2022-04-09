class CalculadoraController {
    constructor() {
        
       this.dataElement = document.querySelector('.data');
       this.hoursElement = document.querySelector('.hora');
       
       this.start();
       this.initAddEventButtons();
    }

    start() {
        
        setInterval(() => {
          this.updateData();
        },1000)
    }

     updateData() {
         let data = new Date();
         this.dataElement.innerHTML = data.toLocaleDateString('pt-BR');
         this.hoursElement.innerHTML = data.toLocaleTimeString('pt-BR');
     }


     initAddEventButtons() {

        let buttons = document.querySelectorAll('table.botoes td');

        buttons.forEach(button => {
            button.addEventListener('click',  event => {
                    
            })
        });

        

     }
}