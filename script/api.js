const urlApi = "https://opendata.agencebio.org/api/gouv/operateurs/?siret=79317749400028";


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
    const numeroBio = $data["items"][0]["numeroBio"];
    const gerant = $data["items"][0]["gerant"];
    const lieu = $data["items"][0]["adressesOperateurs"][0]["lieu"];
    const codePostal = $data["items"][0]["adressesOperateurs"][0]["codePostal"];
    const ville = $data["items"][0]["adressesOperateurs"][0]["ville"];

    const productions = $data["items"][0]["productions"];
    let productionsNom = [];

    productions.forEach(element => {
        productionsNom.push(element.nom);
    });

    console.log(numeroBio, gerant, lieu, codePostal, ville, productionsNom);
}

getData();
