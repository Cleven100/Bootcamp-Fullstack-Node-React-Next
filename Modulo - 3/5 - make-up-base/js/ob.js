const notas = [];

notas.push(30);
notas.push(10);
notas.push(20);
notas.push(7);
notas.push(50);
notas.push(15);


let filtro = notas.filter(a => a == 7 || a == 20 || a == 15)
  .map(a => a * 2)
  .reduce((acc,currentvalue)  =>  acc + currentvalue, 0);

console.log(filtro);