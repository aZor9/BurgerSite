let noErrorName = true; 
let noErrorQuantity = true; 
let listeIngredients = new Map(); 

// Verification de l'input nom ingredient
var nomIngredient = document.getElementById("nomIngredient"); 
nomIngredient.addEventListener("keyup", function (event) { 
    var nomValue = nomIngredient.value.trim(); 
    if (/\d/.test(nomValue)) { 
        ErreurIngredientNom.style.display = "block"; 
        noErrorName = false;
    } else { 
        ErreurIngredientNom.style.display = "none"; 
        noErrorName = true;
    }
});


// Verification de l'input quantite ingredient
var quantity = document.getElementById("quantiteIngredient"); 
quantity.addEventListener("keyup", function (event) { 
    var quantityValue = quantity.value.trim(); 
    if (!/^\d+$/.test(quantityValue)) { 
        ErreurIngredientQuantite.style.display = "block";
        creationIngredientGood.style.display = "none";
        noErrorQuantity = false;
    } else if (parseInt(quantityValue, 10) <= 1) { 1
        ErreurIngredientQuantite.style.display = "block";
        creationIngredientGood.style.display = "none";
        noErrorQuantity = false;
    } else { 
        ErreurIngredientQuantite.style.display = "none";
        noErrorQuantity = true;
    }    
});    


// utilisation du localstorage pour la liste des ingredients
if (localStorage.getItem("listeIngredients")) { 
    const savedIngredients = localStorage.getItem("listeIngredients");
    listeIngredients = new Map(JSON.parse(savedIngredients)); // Convertir la chaîne JSON en array, puis en Map
    // console.log(listeIngredients);
}

// creation des ingredients
document.getElementById("creationIngredient").addEventListener("submit", function(event) {
    event.preventDefault(); // empêche l'envoi du formulaire pour pouvoir traiter les données
    if (noErrorQuantity) { 
    
        // Récupérer les valeurs des ingrédients et des quantités
        const nomIngredient = document.getElementById("nomIngredient").value;
        const quantiteIngredient = document.getElementById("quantiteIngredient").value;
    
        // Ajouter ces valeurs dans la Map
        listeIngredients.set(nomIngredient, parseInt(quantiteIngredient, 10));
    
        // console.log(listeIngredients);
        localStorage.setItem("listeIngredients", JSON.stringify(Array.from(listeIngredients.entries()))); // Convertir la Map en array, puis en chaîne JSON et la stocker dans le localStorage

        creationIngredientGood.style.display = "block";    
        setTimeout(() => {
            creationIngredientGood.style.display = "none";
            location.reload();
          }, 3000);


  } else {
    creationIngredientGood.style.display = "none";
  }}
);
  

// suppression des ingredient
document.getElementById("supressionIngredient").addEventListener("submit", function(event) {
    event.preventDefault();
    localStorage.removeItem("listeIngredients");
    console.log("Ingrédients supprimés");
    }
  );