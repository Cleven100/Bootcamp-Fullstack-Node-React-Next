

export default function CalculadoraService() {

    const SUM = '+';
    const SUBTRACTION = '-';

  function calcular(numberOne, numberTwo, operator) {
    let result;
    switch (operator) {
      case SUM:
        result = numberOne + numberTwo;
        break;
      case SUBTRACTION:
        result = numberOne - numberTwo;
        break;  

        default: 
        result = 10
    }
    return result;
  }

  return [
      calcular,
      SUM,
      SUBTRACTION
    ];
}
