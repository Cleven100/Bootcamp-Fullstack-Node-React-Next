class CalculadoraController {
  constructor() {
    this._dataElement = document.querySelector(".data");
    this._hoursElement = document.querySelector(".hora");
    this._displayElement = document.querySelector(".expressao");
    this._listExpress = ["0"];
    this.start();
    this.initAddEventButtons();
  }

  start() {
    setInterval(() => {
      this.updateData();
    }, 1000);
  }

  calculete() {
     
      console.log(this._listExpress)
  }

  upadateDisplay() {
    this._displayElement.innerHTML = this._listExpress.join("");
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
    console.log(this._listExpress);
    this.upadateDisplay();
  }

  returnEnd() {
    return this._listExpress[this._listExpress.length - 1];
  }

  clear() {
    this._listExpress = ["0"];
    this.upadateDisplay();
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
            break;
          case "=": 
             this.calculete();
             break;
          case "+":
          case ".":

          case "-":

          case "x":

          case "÷":

          case "1":

          case "2":

          case "3":

          case "4":

          case "5":

          case "6":
          case "7":
          case "8":
          case "9":
            this.addValuesExpress(value);

            break;
        }
      });
    });
  }
}
