const urlApi = "https://opendata.agencebio.org/api/gouv/operateurs/?siret=79317749400028";

/*

    Récupération du code HTML nécessaire 

*/

let numeroBio = document.getElementById("numeroBio");
let gerant = document.getElementById("gerant");
let lieu = document.getElementById("lieu");
let codePostal = document.getElementById("codePostal");
let ville = document.getElementById("ville");
let productions = document.getElementById("productions");

/*

    Instentie un Appel AJAX

*/

function getData() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = stockData;
    request.open('GET', urlApi);
    request.send();
}

/*

    Récupère le resultat de l'appel ajax et stock le résultat sous un format JSON 

*/

function stockData() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        const $data = JSON.parse(this.responseText)
        showData($data);
    }
}

/* 

    Update le code HTML avec les résultat de l'API

*/

function showData($data) {
    numeroBio.textContent = $data["items"][0]["numeroBio"];
    gerant.textContent = $data["items"][0]["gerant"];
    lieu.textContent = $data["items"][0]["adressesOperateurs"][0]["lieu"];
    codePostal.textContent = $data["items"][0]["adressesOperateurs"][0]["codePostal"];
    ville.textContent = $data["items"][0]["adressesOperateurs"][0]["ville"];
    let productionsData = $data["items"][0]["productions"];

    // Créer une balise li pour chaque nom de production
    productionsData.forEach(production => {
        const li = document.createElement("li");
        console.log(production.nom);
        li.textContent = production.nom;
        productions.appendChild(li);
    });

}

getData();

