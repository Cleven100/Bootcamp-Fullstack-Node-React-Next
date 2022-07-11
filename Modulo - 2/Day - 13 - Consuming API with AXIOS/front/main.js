const url="http://localhost:5500/api";
const newUser = {
    name: "BLAK",
    avatar: "",
    city: "Rio do mel"
}

function getUser(){
    axios.get(url)
     .then(response => {
        const data = response.data 
        console.log(data);
     })
     .catch(error => console.log(error))
}

getUser()


function addNewUser() {
    axios.post(url, newUser)
     .then(response => {
        console.log(response.data)
     })
    .catch(error => console.log(error))
}

//addNewUser()