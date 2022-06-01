const form = document.querySelector('.form');
const nome = document.querySelector('.nome');
const sobrenome = document.querySelector('.sobrenome');
const peso = document.querySelector('.peso');
const altura = document.querySelector('.altura');
const result = document.querySelector('.result');


 const pessoas = [];

form.addEventListener('submit', function(e) {
 e.preventDefault();

 
  pessoas.push({
      nome: nome.value,
      sorenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value 
  });

  
  result.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

});