const slideshowBurgerImg = document.getElementById("slideshowBurgerImg");
const burgerName = document.getElementById("burgerName");

/*
    Nom des images des burgers 
*/
const imgBurgerName = [
    "burger_naturel",
    "burger_vegetarien",
    "burger_double_cheese",
    "burger_chicken",
    "burger_bacon",
];

let index = 0;

/*
    Modifie le chemin de l'image du burger affiché 
*/
function changeDiaporamaBurgerImg() {
    let name = imgBurgerName[index];
    slideshowBurgerImg.setAttribute("src", "images/burger/" + name + ".jpeg");

    burgerName.textContent = formatBurgerName(name);

    if ((index + 1) == imgBurgerName.length) {
        index = 0;
    } else {
        index++;
    }
}

function formatBurgerName(name) {
    return name.replace("_", " ")
}

/*
    Affiche ou cache le nom du burger affiché
*/
slideshowBurgerImg.onclick = function () {
    if (burgerName.style.display === "none") {
        burgerName.style.display = "block";
    } else {
        burgerName.style.display = "none";
    }
};

changeDiaporamaBurgerImg();
setInterval(changeDiaporamaBurgerImg, 10000);