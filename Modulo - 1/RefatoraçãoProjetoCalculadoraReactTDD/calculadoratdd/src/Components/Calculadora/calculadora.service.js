

export default function CalculadoraService() {

    const SUM = '+';
    const SUBTRACTION = '-';
    const DIVISION = '/';
    const MULTIPLICATION = 'x';

  function calcular(numberOne, numberTwo, operator) {
    let result;
    switch (operator) {
      case SUM:
        result = numberOne + numberTwo;
        break;
      case SUBTRACTION:
        result = numberOne - numberTwo;
        break;
      case DIVISION: 
         result = numberOne / numberTwo;    
        break; 
      case MULTIPLICATION: 
       result = numberOne * numberTwo;  
       break;
        default: 
        result = 0
    }
    return result;
  }

   function concatenarNumber(numberCurrent, numberConcat ) {
      if(numberCurrent === '0' || numberCurrent === null){
          numberCurrent = '';
      }
      if( numberConcat === '.' && numberCurrent === '') {
          return '0.';
      }
      if(numberConcat === '.' && numberCurrent.indexOf('.') > -1) {
          return numberCurrent;
      }

      return numberCurrent + numberConcat;
  }
  return [
      calcular,
      concatenarNumber,
      SUM,
      SUBTRACTION,
      DIVISION,
      MULTIPLICATION
    ];
} 



