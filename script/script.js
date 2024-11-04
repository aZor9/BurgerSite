const diaporamaBurgerImg = document.getElementById("diaporamaBurgerImg");

const imgBurgerName = [
    "burger_naturel",
    "burger_vegetarien"
];

let index = 0;

function changeDiaporamaBurgerImg() {
    console.log(index);

    path = imgBurgerName[index];
    diaporamaBurgerImg.setAttribute("src", "/images/burger/" + path + ".jpeg");

    if ((index + 1) == imgBurgerName.length) {
        index = 0;
    } else {
        index++;
    }
    console.log(index, imgBurgerName.length);
}

setInterval(changeDiaporamaBurgerImg, 1000);
