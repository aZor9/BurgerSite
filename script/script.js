const diaporamaBurgerImg = document.getElementById("diaporamaBurgerImg");

const imgBurgerName = [
    "burger_naturel",
    "burger_vegetarien"
];

let index = 0;

function changeDiaporamaBurgerImg() {

    let path = imgBurgerName[index];
    diaporamaBurgerImg.setAttribute("src", "images/burger/" + path + ".jpeg");

    if ((index + 1) == imgBurgerName.length) {
        index = 0;
    } else {
        index++;
    }
}

setInterval(changeDiaporamaBurgerImg, 1000);
