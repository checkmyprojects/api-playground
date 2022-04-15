//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#getCocktail').addEventListener('click', getCocktail)
function getCocktail(){
    const search = document.querySelector("#search").value;
    searchCocktail(search);
}
async function searchCocktail(string){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${string}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            data.drinks.forEach((drink) =>console.log(drink))
            const myDrinks = document.querySelector('#myDrinks')
            myDrinks.innerHTML = ''
            data.drinks.forEach((drink) => {
                const drinkNew = document.createElement('div')
                drinkNew.classList.add('drink')
                
                drinkNew.innerHTML = `
                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                <h2>${drink.strDrink}</h2>
                <h3>${drink.strInstructions}</h3>
                `
                myDrinks.appendChild(drinkNew)
            })
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

