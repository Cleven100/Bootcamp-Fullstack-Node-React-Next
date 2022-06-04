
(async function  () {

    try {
         let response = await fetch(`http://localhost:8080/`);
         let users = await response.json();
    
          show(users);

    } catch (error) {
        console.error(error);
    }   
 })();



 function show(users) {

    let output = '';
    for(let user of users) {
        output += `<li>${user.name}</li>`
    }
    document.querySelector('main').innerHTML = output;
 }
