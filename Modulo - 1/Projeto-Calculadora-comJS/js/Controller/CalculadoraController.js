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
         this._dataElement.innerHTML = data.toLocaleDateString('pt-BR');
         this._hoursElement.innerHTML = data.toLocaleTimeString('pt-BR');
     }

     addValuesExpress(value) {
          if(this.checkOperator(value)){
              this._listExpress.push(value);
          } else {
              if(this.checkOperator(this.returnEnd())){
                  this._listExpress.push(value);
              } else{
                this._listExpress[this._listExpress.length-1] += value.toString();
              }
             
          }
          console.log(this._listExpress)
     } 

     
    returnEnd() {
        return this._listExpress[this._listExpress.length-1];
    }

     clear() {

     }

     checkOperator(value) {
         return ['x','-','÷','+'].indexOf(value)>-1;
        
     }


     backspace() {

     }

     initAddEventButtons() {

        let buttons = document.querySelectorAll('table.botoes td');

        buttons.forEach(button => {
            button.addEventListener('click',  event => {
                    let value = button.innerHTML;
                    
                    
                    switch(value) {
                        case 'AC': 
                            this.clear();
                        break;
                        case 'backspace': 
                        break;
                           
                        case '+': 
                            
                            
                        case '-': 
                           
                            
                        case 'x': 
                            
                            
                        case '÷': 
                            
                              
                            
                        case '1': 
                        
                           
                        case '2': 
                            
                               
                        case '3': 
                        
                          
                        case '4': 
                            
                          
                        case '5': 
                            
                           
                        case '6': 
                        case '7':
                        case '8': 
                        case '9':  
                            this.addValuesExpress(value)

                            break;
                            
                    }
            })
        });

        

     }
}