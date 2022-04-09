class CalculadoraController {
    constructor() {
        
       this._dataElement = document.querySelector('.data');
       this._hoursElement = document.querySelector('.hora');
       this._listExpress  = ['0'];
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
                    let buttons = button.innerHTML;
                    
                    let valorTotal = 0;

                    switch(buttons) {
                        case 'AC': 
                            
                            break;
                        case 'backspace': 
                            
                            break;
                        case '+': 
                            
                            break;
                        case '-': 
                           
                            break;
                        case 'x': 
                            
                            break;
                        case '÷': 
                            
                            break;    
                            
                        case '1': 
                        
                            break;
                        case '2': 
                            
                            break;    
                        case '3': 
                        
                            break;
                        case '4': 
                            console.log('Você clicou no botão 4');
                            break;
                        case '5': 
                            console.log('Você clicou no botão 5');
                            break;
                        case '6': 
                            console.log('Você clicou no botão 6');
                            break;
                    }
            })
        });

        

     }
}