

export default function CalculadoraService() {

    const SUM = '+';

  function calcular(numberOne, numberTwo, operator) {
    let result;
    switch (operator) {
      case SUM:
        result = numberOne + numberTwo;
        break;
        default:
            result = 5;
    }
    return numberOne + numberTwo;
  }

  return [
      calcular,
      SUM
    ];
}
