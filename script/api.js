const urlApi = "https://opendata.agencebio.org/api/gouv/operateurs/?siret=7931774940002";
let numeroBio = document.getElementById("numeroBio");
let gerant = document.getElementById("gerant");
let lieu = document.getElementById("lieu");
let codePostal = document.getElementById("codePostal");
let ville = document.getElementById("ville");
let productions = document.getElementById("productions");

function getData() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = stockData;
    request.open('GET', urlApi);
    request.send();
}

function stockData() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        const $data = JSON.parse(this.responseText)
        showData($data);
    }
}


function showData($data) {
    numeroBio.textContent = $data["items"][0]["numeroBio"];
    gerant.textContent = $data["items"][0]["gerant"];
    lieu.textContent = $data["items"][0]["adressesOperateurs"][0]["lieu"];
    codePostal.textContent = $data["items"][0]["adressesOperateurs"][0]["codePostal"];
    ville.textContent = $data["items"][0]["adressesOperateurs"][0]["ville"];

    const productions = $data["items"][0]["productions"];
    let productionsNom = [];

    productions.forEach(element => {
        productionsNom.push(element.nom);
    });

    console.log(numeroBio, gerant, lieu, codePostal, ville, productionsNom);
}

getData();

