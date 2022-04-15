let dogfox = document.querySelector("#dogfox")
let random = document.querySelector("#random")
random.addEventListener("click", randomPic)
async function searchDog(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json()) // parse response as JSON
        .then(data => {

            dogfox.src = data.message            
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
async function searchFox(){
    fetch("https://randomfox.ca/floof/")
        .then(res => res.json()) // parse response as JSON
        .then(data => {

            dogfox.src = data.image            
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

function randomPic(){

    if (Math.random()<.5){
        searchDog();
    }else{
        searchFox();
    }
}
// searchDog();
// searchFox();