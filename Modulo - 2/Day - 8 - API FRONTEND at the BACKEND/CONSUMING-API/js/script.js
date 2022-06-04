(async function  () {
    let response = await fetch(`http://localhost:8080/`);
    let helloWorld = await response.json();
    
    console.log(helloWorld);
   
 })();
