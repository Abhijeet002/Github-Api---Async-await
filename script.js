const root = document.getElementById("bottom");
const url = "https://api.github.com/users";

let card = "";
async function gitUsers() {

    let response = await fetch("https://api.github.com/users");   //api url
    // console.log(response);
    let users = await response.json();
    console.log(users);


        // checking the status of request
    if (!response.ok) {
        console.log("error")
    } else {
        console.log("running")
    }

    // Mapping array data in html document
    users.map((value) => {
        card += `<div class="cards">
        <img
          class="images"
          src=${value.avatar_url}
          alt="username"
        />
        <h2>${value.login}</h2>
        </div>`
    })

    root.innerHTML= card;

}
gitUsers();