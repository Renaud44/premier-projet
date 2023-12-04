// function clickSurDiv(){
//     const monElement = document.getElementById("game-grid");

//     const monNouvelleElement = document.createElement("div");
//     // monNouvelleElement.innerHTML = "deuxième façon";
//     monNouvelleElement.classList = "container"; //Cibler la class d'un élément
//     monElement.appendChild(monNouvelleElement);
// }

const monElement = document.getElementById("game-grid");

function generateElement(){

    const tableauEmojis = ["😊","😂","🤣","❤️","😍","😒","😁","🙌","😊","😂","🤣","❤️","😍","😒","😁","🙌"];

    for(var i = 0; i <= 15; i++){
        const monNouvelleElement = document.createElement("div");
        monNouvelleElement.classList = "container";//Donne la class container aux div
        monNouvelleElement.classList.add("transparent");
        monNouvelleElement.addEventListener("click", flipCard);//Evènement de clique
        monNouvelleElement.innerHTML = tableauEmojis[i];
        monElement.appendChild(monNouvelleElement);
    }

}


function flipCard(){
    this.classList.remove("transparent");
}
// function onFlip(){
//     alert("Vous avez cliqué sur " + this.innerHTML);
// }

generateElement();