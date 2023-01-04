let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let statusRequisicao = false;
        if(statusRequisicao)
        resolve('Sucesso 1');
        if(!statusRequisicao)
          reject('Falha p1')
    }, 5000);
});

let p2 = new Promise((resolve, reject) => {
    resolve('Sucesso p2');
});


let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Sucesso p3');
    }, 1000);
})

Promise.race([p3,p2,p1])
 .then(mensagem => {
    console.log(mensagem)
 }).catch(mensagem => {
    console.log(mensagem)
 })