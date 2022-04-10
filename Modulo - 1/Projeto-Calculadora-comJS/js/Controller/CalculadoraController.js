class CalculadoraController {
  constructor() {
    this._dataElement = document.querySelector(".data");
    this._hoursElement = document.querySelector(".hora");
    this._displayElement = document.querySelector(".expressao");
    this._previewElement = document.querySelector(".previa");
    this._listExpress = ["0"];
    this._prev = 0;
    this.start();
    this.initAddEventButtons();
    this.initAddEventsKeyboard();
    this.ifResult = false;
  }

  start() {
    setInterval(() => {
      this.updateData();
    }, 1000);
  }

  calculate(array) {
      
      for(let i=0; i<array.length; i+=2){
          array[i] = parseFloat(array[i])
      }
      
      while(this.multiplicationIndexOf(array,['÷','x'])[0]>-1){
        let operation = this.multiplicationIndexOf(array,['÷','x']); 
        let result
        switch(operation[1]){
            case '÷':
                result = array[operation[0]-1]/array[operation[0]+1];
                break;
            case 'x':
                result = array[operation[0]-1]*array[operation[0]+1]; 
                break;
        }

        array.splice(operation[0]-1,3,result);
        
     }

     while(this.multiplicationIndexOf(array,['+','-'])[0]>-1){
        let operation = this.multiplicationIndexOf(array,['+','-']); 
        let result
        switch(operation[1]){
            case '+':
                result = array[operation[0]-1]+array[operation[0]+1];
                break;
            case '-':
                result = array[operation[0]-1]-array[operation[0]+1]; 
                break;
        }

        array.splice(operation[0]-1,3,result);
        
     }  
     this._ifResult = true;
     array[0] = array[0].toString();
     this.upadateDisplay();
  }

  calculatePreview() {
  let listPreview = [];
   this._listExpress.forEach((value) => {
       listPreview.push(value);
   })
   this.calculate(listPreview);
   
   this._ifResult = false;
    if(isNaN(listPreview[0])){
        return
    }
   this._prev = listPreview.join('');
   this.upadateDisplay();
  }


error(){
    this._displayElement.innerHTML = 'ERROR';
    this._previewElement.innerHTML = '';
    this._ifResult = true;
}


multiplicationIndexOf(arrayPrincipal, array) {
    for(let i = 0; i<arrayPrincipal.length; i++){
        let valueOne = arrayPrincipal[i]
        for(let j = 0; j<array.length; j++){
            let valueTwo = array[j];
            if(valueOne == valueTwo){
                return [i,valueTwo];
            }
        }
    }
  return [-1,'']
}

  upadateDisplay() {
    this._displayElement.innerHTML = this._listExpress.join("");
    this._previewElement.innerHTML = this._prev;
    this._displayElement.scrollBy(100, 0);
  }

  updateData() {
    let data = new Date();
    this._dataElement.innerHTML = data.toLocaleDateString("pt-BR");
    this._hoursElement.innerHTML = data.toLocaleTimeString("pt-BR");
  }

  addValuesExpress(value) {
    if (this.checkOperator(value)) {
      if (this.checkOperator(this.returnEnd())) {
        this._listExpress[this._listExpress.length - 1] = value;
      } else {
        this._listExpress.push(value);
      }
    } else {
      if (this.checkOperator(this.returnEnd())) {
        this._listExpress.push(value);
      } else {
        if (this.returnEnd() == "0" && value.toString() != ".") {
          this._listExpress[this._listExpress.length - 1] = "";
        }
        if (this.returnEnd().indexOf(".") > -1 && value.toString() == ".") {
          return;
        }
        this._listExpress[this._listExpress.length - 1] += value.toString();
      }
    }
    
    this.upadateDisplay();
  }

  returnEnd() {
    return this._listExpress[this._listExpress.length - 1];
  }

  clear() {
    this._listExpress = ["0"];
    this._prev = '0';
    this.upadateDisplay();
  }



  initAddEventsKeyboard() {
      document.addEventListener('keyup', (event)=>{
          

          switch (event.key) {
            case "c":
              this.clear();
              break;
            case "Backspace":
                this.backspace();
                if(this._ifResult == true){
                  this.clear();
                  
              }
              this.calculatePreview();
              break;
            case "Enter": 
            if(this._ifResult == true){
              return;
          }
               this._prev = '';
               this.calculate(this._listExpress);
               break;
            case "+":
            case ".":
  
            case "-":
  
            
            case "0":
  
            case "1":
  
            case "2":
  
            case "3":
  
            case "4":
  
            case "5":
  
            case "6":
            case "7":
            case "8":
            case "9":
             
                if(this._ifResult == true){
                    this.clear();
                    this._ifResult == false;
                }
                this.addValuesExpress(event.key);
                this.calculatePreview();
  
              break;
              case "*":
                if(this._ifResult == true){
                    this.clear();
                    this._ifResult == false;
                }
                this.addValuesExpress('x');
                this.calculatePreview();
                  break;
              case "/":
                if(this._ifResult == true){
                    this.clear();
                    this._ifResult == false;
                }
                this.addValuesExpress('÷');
                this.calculatePreview();
                  break;
          }
          
         
      })
  }


  backspace() {
    this._listExpress[this._listExpress.length - 1] = this.returnEnd().slice(
      0,
      -1
    );
    if(this.returnEnd() == ''){
        if(this._listExpress.length == 1) {
            this._listExpress = ['0'];
        } else {
            this._listExpress.pop();
        }
        
    }
    this.upadateDisplay();
  }

  checkOperator(value) {
    return ["x", "-", "÷", "+"].indexOf(value) > -1;
  }

  initAddEventButtons() {
    let buttons = document.querySelectorAll("table.botoes td");

    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        let value = button.innerHTML;

        switch (value) {
          case "AC":
            this.clear();
            break;
          case "backspace":
              this.backspace();
              if(this._ifResult == true){
                this.clear();
                
            }
            this.calculatePreview();
            break;
          case "=": 
          if(this._ifResult == true){
            return;
        }
             this._prev = '';
             this.calculate(this._listExpress);
             break;
          case "+":
          case ".":

          case "-":

          case "x":

          case "÷":
          case "0":

          case "1":

          case "2":

          case "3":

          case "4":

          case "5":

          case "6":
          case "7":
          case "8":
          case "9":
           
            if(this._ifResult == true){
                this.clear();
                this._ifResult == false;
            }
            this.addValuesExpress(value);
            this.calculatePreview();

            break;
        }
        
        if(isNaN(this._listExpress[0])){
            this.error();
        }
      });
    });
  }
}
