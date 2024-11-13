let listeIngredients = new Map(); // Initialisation de la Map
if (window.localStorage.getItem("listeIngredients")) { // si la clé "listeIngredients" existe dans le localStorage
  const savedIngredients = window.localStorage.getItem("listeIngredients"); // Récupérer la Map depuis le localStorage et la convertir en Map
  listeIngredients = new Map(JSON.parse(savedIngredients)); // Convertir la chaîne JSON en array, puis en Map  
  window.localStorage.setItem("listeIngredients", JSON.stringify(Array.from(listeIngredients.entries()))); // Convertir la Map en array, puis en chaîne JSON et la stocker dans le localStorage
    
} else {
    console.log("Aucun ingrédient n'a été enregistré");
}


// console.log(window.localStorage.getItem("test"));
  
const ingredient1 = document.getElementById("ingredient1");
const ingredient2 = document.getElementById("ingredient2");
const ingredient3 = document.getElementById("ingredient3");


listeIngredients.forEach((quantite, nom) => {
  const option = document.createElement("option"); // Crée une option
  option.value = nom;                               // Définit la valeur
  option.textContent = `${nom} - ${quantite}`;      // Affiche le nom et la quantité
  ingredient1.appendChild(option);                  // Ajoute à la liste déroulante
});

listeIngredients.forEach((quantite, nom) => {
  const option = document.createElement("option"); // Crée une option
  option.value = nom;                               // Définit la valeur
  option.textContent = `${nom} - ${quantite}`;      // Affiche le nom et la quantité
  ingredient2.appendChild(option);                  // Ajoute à la liste déroulante
});

listeIngredients.forEach((quantite, nom) => {
  const option = document.createElement("option"); // Crée une option
  option.value = nom;                               // Définit la valeur
  option.textContent = `${nom} - ${quantite}`;      // Affiche le nom et la quantité
  ingredient3.appendChild(option);                  // Ajoute à la liste déroulante
});



document.getElementById("creationBurger").addEventListener("submit", function(event) {
  event.preventDefault(); // empêche l'envoi du formulaire pour pouvoir traiter les données

  var noErrorQuantity = true; // true = pas d'erreur, sert de verrouillage
  var listeIngredientsTestNoErrorQuantity = new Map(listeIngredients); // Crée une copie de la Map listeIngredients pour tester les quantités

  const selectedIngredient1 = ingredient1.value;
  const selectedIngredient2 = ingredient2.value;
  const selectedIngredient3 = ingredient3.value;

  console.log(listeIngredientsTestNoErrorQuantity);

  // Vérifiez que chaque ingrédient a suffisamment de quantité, puis réduisez la quantité de 1
  if (listeIngredientsTestNoErrorQuantity.get(selectedIngredient1) > 0) {
    listeIngredientsTestNoErrorQuantity.set(selectedIngredient1, listeIngredientsTestNoErrorQuantity.get(selectedIngredient1) - 1);
  } else  {
    noErrorQuantity = false;
  }

  if (listeIngredientsTestNoErrorQuantity.get(selectedIngredient2) > 0) {
    listeIngredientsTestNoErrorQuantity.set(selectedIngredient2, listeIngredientsTestNoErrorQuantity.get(selectedIngredient2) - 1);
  } else  {
    noErrorQuantity = false;
  }

  if (listeIngredientsTestNoErrorQuantity.get(selectedIngredient3) > 0) {
    listeIngredientsTestNoErrorQuantity.set(selectedIngredient3, listeIngredientsTestNoErrorQuantity.get(selectedIngredient3) - 1);
  } else  {
    noErrorQuantity = false;
  }

  console.log(listeIngredientsTestNoErrorQuantity);

  if (noErrorQuantity) {

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
    }, 5000);
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

// reaprovisionnement des ingredient
document.getElementById("InitialisationIngredient").addEventListener("submit", function(event) {
  listeIngredients.set("Salade Test", 10); 
  listeIngredients.set("Tomate Test", 5);
  listeIngredients.set("Fromage Test", 2);
  listeIngredients.set("Steak Test", 1);  
  window.localStorage.setItem("listeIngredients", JSON.stringify(Array.from(listeIngredients.entries()))); // Convertir la Map en array, puis en chaîne JSON et la stocker dans le localStorage
  console.log("Ingrédients réapprovisionnés");
  }
);

//mauvais nom de burger
var nomBurger = document.getElementById("nomBurger"); // associe la variable nomBurger à l'élément HTML qui a l'id nomBurger
nomBurger.addEventListener("keyup", function (event) { // ajoute un écouteur d'événement sur l'élément nomBurger
    var nomValue = nomBurger.value.trim(); // associe la variable nomValue à la valeur de nomBurger sans les espaces
    if (/\d/.test(nomValue)) { // si nomValue contient un ou plusieurs chiffres
        ErreurBurgerNom.style.display = "block"; // affiche le message d'erreur
        noErrorName = false;
    } else { // sinon, s'il n'y a pas de chiffres
      ErreurBurgerNom.style.display = "none"; // masque le message d'erreur
        noErrorName = true;
    }
});

