const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');


let data = [];


const getUser = (async () => {
  
  let response = await fetch('https://randomuser.me/api');
  let dados = await response.json();
  
  
  const user = dados.results[0];

  const newUser = {
      name: `${user.name.first} ${user.name.last}`,
      money: Math.floor(Math.random() * 1000000)
  };

  addData(newUser);

})


function addData(obj) {
    data.push(obj);
}

