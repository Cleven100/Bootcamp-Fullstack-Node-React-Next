const cep = document.querySelector('#cep');


cep.addEventListener('blur',(e) => {
    let search = cep.value.replace('-', "");
  
    (async function  () {
        let response = await fetch(`https://viacep.com.br/ws/${search}/json`);
        let address = await response.json();
        
       showData(address);
       
       
 
     })();
    

    

} )


const showData = (result) => {
    for (const campo in result) {
        if(document.querySelector("#" + campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
        
    }
}