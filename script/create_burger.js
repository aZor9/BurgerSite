// Initialisation de la Map
let listeIngredients = new Map(); 
if (window.localStorage.getItem("listeIngredients")) { 
  const savedIngredients = window.localStorage.getItem("listeIngredients"); // Récupérer la Map depuis le localStorage
  listeIngredients = new Map(JSON.parse(savedIngredients)); // Convertir la chaîne JSON en array, puis en Map  
  window.localStorage.setItem("listeIngredients", JSON.stringify(Array.from(listeIngredients.entries()))); // Convertir la Map en array, puis en chaîne JSON et la restocker dans le localStorage    
} else {
    console.log("Aucun ingrédient n'a été enregistré");
}

const ingredient1 = document.getElementById("ingredient1");
const ingredient2 = document.getElementById("ingredient2");
const ingredient3 = document.getElementById("ingredient3");

// Liste des burgers
let listeBurgers = new Map(); 
let ingredientBurger = []; 
if (window.localStorage.getItem("listeBurgers")) { 
  const savedBurgers = window.localStorage.getItem("listeBurgers"); 
  listeBurgers = new Map(JSON.parse(savedBurgers)); // Convertir la chaîne JSON en array, puis en Map
  window.localStorage.setItem("listeBurgers", JSON.stringify(Array.from(listeBurgers.entries()))); // Convertir la Map en array, puis en chaîne JSON et la stocker dans le localStorage

  // affichage des burgers en format tableau
  const burgerTableBody = document.querySelector("#burgerTable tbody");
  listeBurgers.forEach((ingredients, nomBurger) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = nomBurger;
    row.appendChild(nameCell);
    const ingredientsCell = document.createElement("td");
    ingredientsCell.textContent = ingredients.join(", "); 
    row.appendChild(ingredientsCell);
    burgerTableBody.appendChild(row);
  });
}


// affichage ingredient 
function affichageIngredient(numIngredient) {
  listeIngredients.forEach((quantite, nom) => {
    const option = document.createElement("option"); 
    option.value = nom;
    option.textContent = `${quantite} - ${nom}  `;      
    numIngredient.appendChild(option);                  
  });
}
affichageIngredient(ingredient1);
affichageIngredient(ingredient2);
affichageIngredient(ingredient3);


// création du burger
document.getElementById("creationBurger").addEventListener("submit", function(event) {
  event.preventDefault(); // empêche l'envoi du formulaire pour pouvoir traiter les données

  // test et verrouillage
  var noErrorQuantity = true; // true = pas d'erreur
  var listeIngredientsTestNoErrorQuantity = new Map(listeIngredients); // Crée une copie de la Map listeIngredients pour tester les quantités
  
  const selectedIngredient1 = ingredient1.value;
  const selectedIngredient2 = ingredient2.value;
  const selectedIngredient3 = ingredient3.value;

  // console.log(listeIngredientsTestNoErrorQuantity);

  // Vérifiez que chaque ingrédient a suffisamment de quantité, puis réduisez la quantité de 1
  function checkQuantity(selectedIngredient) {
    if (listeIngredientsTestNoErrorQuantity.get(selectedIngredient) > 0) {
      listeIngredientsTestNoErrorQuantity.set(selectedIngredient, listeIngredientsTestNoErrorQuantity.get(selectedIngredient) - 1);
    } else  {
      noErrorQuantity = false;
    }
  }
  checkQuantity(selectedIngredient1);
  checkQuantity(selectedIngredient2);
  checkQuantity(selectedIngredient3);  

  // console.log(listeIngredientsTestNoErrorQuantity);

  if (noErrorQuantity) {

    // creation du burger 
    ingredientBurger = [selectedIngredient1, selectedIngredient2, selectedIngredient3];
    listeBurgers.set(document.getElementById("nomBurger").value, ingredientBurger);
    window.localStorage.setItem("listeBurgers", JSON.stringify(Array.from(listeBurgers.entries()))); 

    // modifier les quantités des ingrédients sur la vrai map
    listeIngredients.set(selectedIngredient1, listeIngredients.get(selectedIngredient1) - 1);
    listeIngredients.set(selectedIngredient2, listeIngredients.get(selectedIngredient2) - 1);
    listeIngredients.set(selectedIngredient3, listeIngredients.get(selectedIngredient3) - 1);

    //Supprimer les ingrédients qui ont une quantité de 0
    listeIngredients.forEach((quantite, nom) => {
      if (quantite === 0) {
        listeIngredients.delete(nom);
      }
    });
      
    // Mettez à jour le localStorage avec les nouvelles quantités
    window.localStorage.setItem("listeIngredients", JSON.stringify(Array.from(listeIngredients.entries())));
    
    ErreurIngredient.style.display = "none";  
    creationBurgerGood.style.display = "block";
    setTimeout(() => {
      creationBurgerGood.style.display = "none";
      location.reload();
    }, 2500);
    console.log("Burger créé avec les quantités mises à jour :", listeIngredients);

  } else {
    ErreurIngredient.style.display = "block";
    creationBurgerGood.style.display = "none";
    console.log("il n'y a pas assez d'ingrédients pour créer un burger");
  }

});

// suppression des ingredient
document.getElementById("supressionIngredient").addEventListener("submit", function(event) {
  event.preventDefault();
  window.localStorage.removeItem("listeIngredients");
  listeIngredients.clear();
  console.log("Ingrédients supprimés");
  location.reload();
  }
);

// suppression des burger
document.getElementById("resetListBurger").addEventListener("submit", function(event) {
  event.preventDefault();
  window.localStorage.removeItem("listeBurgers");
  listeBurgers.clear();
  console.log("Burgers supprimés");
  location.reload();
  }
);

// reaprovisionnement des ingredient
document.getElementById("InitialisationIngredient").addEventListener("submit", function(event) {
  listeIngredients.set("Salade", 10); 
  listeIngredients.set("Tomate", 5);
  listeIngredients.set("Fromage", 2);
  listeIngredients.set("Steak", 1);  
  window.localStorage.setItem("listeIngredients", JSON.stringify(Array.from(listeIngredients.entries()))); 
  console.log("Ingrédients réapprovisionnés");
  }
);

//mauvais nom de burger
var nomBurger = document.getElementById("nomBurger"); 
nomBurger.addEventListener("keyup", function (event) { 
    var nomValue = nomBurger.value.trim(); // associe la variable nomValue à la valeur de nomBurger sans les espaces
    if (/\d/.test(nomValue)) { 
        ErreurBurgerNom.style.display = "block"; // affiche le message d'erreur
        noErrorName = false;
    } else {
      ErreurBurgerNom.style.display = "none"; // masque le message d'erreur
        noErrorName = true;
    }
});