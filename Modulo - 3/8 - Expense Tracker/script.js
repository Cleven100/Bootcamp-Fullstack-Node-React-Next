const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');


const dummyTransactions = [
    
    {id: 1, text: 'flower', amount: -20 }
    {id: 2, text: 'gold', amount: 10000 }
    {id: 3, text: 'Book', amount: -300 }
    {id: 4, text: 'Dish', amount: -500 }
    {id: 5, text: 'Movies', amount: -100 }
    {id: 6, text: 'flower', amount: -20 }
    
];

let transaction = dummyTransactions;

