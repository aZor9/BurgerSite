const diaporamaBurgerImg = document.getElementById("diaporamaBurgerImg");
const burgerName = document.getElementById("burgerName");


const imgBurgerName = [
    "burger_naturel",
    "burger_vegetarien"
];

let index = 0;

function changeDiaporamaBurgerImg() {

    let path = imgBurgerName[index];
    diaporamaBurgerImg.setAttribute("src", "images/burger/" + path + ".jpeg");

    getBurgerName(path);

    if ((index + 1) == imgBurgerName.length) {
        index = 0;
    } else {
        index++;
    }
}

diaporamaBurgerImg.onclick = function () {
    if (burgerName.getAttribute("style") == "display: none;") {
        console.log(burgerName.getAttribute("style"));
        burgerName.setAttribute("style", "display: flex;");
        burgerName.textContent(getBurgerName());
    } else {
        burgerName.setAttribute("style", "display: none;");
    }
};

function getBurgerName(path) {
    return path.split("_");
}

setInterval(changeDiaporamaBurgerImg, 1000);

