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
    name = name.replace("_", " ");
    if (name.includes("_")) {
        name = name.replace("_", " ");
    }
    return name;
}

/*
    Affiche ou cache le nom du burger affiché
*/
slideshowBurgerImg.onclick = function () {
    if (burgerName.style.display === "none") {
        burgerName.style.display = "block";
        document.getElementById("espaceVide").style.display = "none";
    } else {
        burgerName.style.display = "none";
        document.getElementById("espaceVide").style.display = "block";
    }
};

changeDiaporamaBurgerImg();
setInterval(changeDiaporamaBurgerImg, 10000);