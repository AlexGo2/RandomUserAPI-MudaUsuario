// requisição de Api apenas com fetch
// const requisicao = fetch("https://randomuser.me/api/").then(response => response.json())
// .then(dados => {
//     let result = dados.results[0].name
//     console.log(result);

//     const {first, last} = result;
//     console.log(first, last)
// });


//requisição de API com await/async
document.getElementById('changeUser').addEventListener('click', GetAPI);

async function GetAPI() { 
    const res = await fetch("https://randomuser.me/api/");
    const dados = await res.json();
    const userName = dados.results[0].name;
    const userPhoto = dados.results[0].picture.large;

    //Destructuring
    const {first, last} = userName;
    
    //taca na tela
    document.getElementById('userPhoto').setAttribute("src", userPhoto);
    document.getElementById('name').innerText = `${first} ${last}`;
}

GetAPI();
