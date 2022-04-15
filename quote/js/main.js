
let getQuote = document.getElementById('getQuote');
let showQuote = document.getElementById('showQuote');
let fetchedQuote = {}
getQuote.addEventListener("click", searchQuote)
showQuote.addEventListener("click", printAll)


async function searchQuote(){
    fetch("https://movie-quote-api.herokuapp.com/v1/quote/")
    .then(res => res.json()) 
    .then(data => {   
        fetchedQuote = data
        document.querySelector("#show").innerHTML = "Guess the show";
        document.querySelector("#role").innerHTML = "Guess the character";
        printQuote();
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
searchQuote()

function printQuote(){
    document.getElementById("quote").innerHTML = fetchedQuote.quote;
}
function printAll(){
    document.querySelector("#show").innerHTML = fetchedQuote.show;
    document.querySelector("#role").innerHTML = fetchedQuote.role;
}