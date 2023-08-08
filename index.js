const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


btn.addEventListener("click", (e) =>{
    e.preventDefault();
    fetch(url)
    .then(response => response.json())
    .then(data => {
        jokeContainer.textContent = `${data.joke}`;
    })
})