let noErrorName = true; // variable pour indiquer si le nom est valide
let noErrorQuantity = true;
let listeIngredients = new Map(); // crée une map listeIngredients


var nomIngredient = document.getElementById("nomIngredient"); // associe la variable nomIngredient à l'élément HTML qui a l'id nomIngredient
nomIngredient.addEventListener("keyup", function (event) { // ajoute un écouteur d'événement sur l'élément nomIngredient
    var nomValue = nomIngredient.value.trim(); // associe la variable nomValue à la valeur de nomIngredient sans les espaces
    if (/\d/.test(nomValue)) { // si nomValue contient un ou plusieurs chiffres
        ErreurIngredientNom.style.display = "block"; // affiche le message d'erreur
        noErrorName = false;
    } else { // sinon, s'il n'y a pas de chiffres
        ErreurIngredientNom.style.display = "none"; // masque le message d'erreur
        noErrorName = true;
    }
});




var quantity = document.getElementById("quantiteIngredient"); // associe la variable quantity à l'élément HTML qui a l'id Quantité
quantity.addEventListener("keyup", function (event) { // ajoute un écouteur d'événement sur l'élément quantity
    var quantityValue = quantity.value.trim(); // associe la variable quantityValue à la valeur de quantity sans les espaces
    if (!/^\d+$/.test(quantityValue)) { // si quantityValue ne contient pas que des chiffres
        ErreurIngredientQuantite.style.display = "block";
        noErrorQuantity = false;
    } else if (parseInt(quantityValue, 10) <= 1) { // sinon si quantityValue est inférieur ou égal à 1
        ErreurIngredientQuantite.style.display = "block";
        noErrorQuantity = false;
    } else { // sinon
        ErreurIngredientQuantite.style.display = "none";
        noErrorQuantity = true;
    }    
});    



if (window.localStorage.getItem("listeIngredients")) { // si la clé "listeIngredients" existe dans le localStorage
    const savedIngredients = window.localStorage.getItem("listeIngredients");
    listeIngredients = new Map(JSON.parse(savedIngredients)); // Convertir la chaîne JSON en array, puis en Map
    // console.log(listeIngredients);
}

// console.log(window.localStorage.getItem("test"));

document.getElementById("creationIngredient").addEventListener("submit", function(event) {
    event.preventDefault(); // empêche l'envoi du formulaire pour pouvoir traiter les données
    if (noErrorQuantity) { // si noErrorQuantity est vrai
    
        // Récupérer les valeurs des ingrédients et des quantités
        const nomIngredient = document.getElementById("nomIngredient").value;
        const quantiteIngredient = document.getElementById("quantiteIngredient").value;
    
        // Ajouter ces valeurs dans la Map
        listeIngredients.set(nomIngredient, parseInt(quantiteIngredient, 10));
    
        console.log(listeIngredients);
        window.localStorage.setItem("listeIngredients", JSON.stringify(Array.from(listeIngredients.entries()))); // Convertir la Map en array, puis en chaîne JSON et la stocker dans le localStorage

  }}
);
  

// suppression des ingredient
document.getElementById("supressionIngredient").addEventListener("submit", function(event) {
    event.preventDefault();
    window.localStorage.removeItem("listeIngredients");
    console.log("Ingrédients supprimés");
    }
  );