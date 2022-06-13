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

getUser();
getUser();
getUser();


function addData(obj) {
    data.push(obj);

    updateDOM();
}

function updateDOM(providedData = data) {

  main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';
  
  


  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong>
    ${item.money} `;
    main.appendChild(element);
  }); 

}



