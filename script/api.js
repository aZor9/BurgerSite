function getData() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = stockData;
    request.open('GET', 'https://api.gouv.fr/documentation/api-professionnels-bio');
    request.send();
}

function stockData() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log(JSON.parse(this.responseText));  // Correction ici
    }
}

getData();
