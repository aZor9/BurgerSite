const slideshowBurgerImg = document.getElementById("slideshowBurgerImg");
const burgerName = document.getElementById("burgerName");

const imgBurgerName = [
    "burger_naturel",
    "burger_vegetarien"
];

let index = 0;

function changeDiaporamaBurgerImg() {
    let path = imgBurgerName[index];
    slideshowBurgerImg.setAttribute("src", "images/burger/" + path + ".jpeg");

    burgerName.textContent = formatBurgerName(path);

    if ((index + 1) == imgBurgerName.length) {
        index = 0;
    } else {
        index++;
    }
}



function formatBurgerName(path) {
    return path.replace("_", " ")
}

slideshowBurgerImg.onclick = function () {
    if (burgerName.style.display === "none") {
        burgerName.style.display = "block";
    } else {
        burgerName.style.display = "none";
    }
};

setInterval(changeDiaporamaBurgerImg, 1000);
