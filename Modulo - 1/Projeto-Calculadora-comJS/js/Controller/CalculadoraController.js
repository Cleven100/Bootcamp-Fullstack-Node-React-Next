class CalculadoraController {
    constructor() {
        
       this.dataElement = document.querySelector('.data');
       this.hoursElement = document.querySelector('.hora');
       this.updateData();
    }

     updateData() {
         let data = new Date();
         this.dataElement.innerHTML = data.toLocaleDateString('pt-BR');
         this.hoursElement.innerHTML = data.toLocaleTimeString('pt-BR');
     }

}