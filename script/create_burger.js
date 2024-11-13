

let listeIngredients = new Map(); // Initialisation de la Map
if (window.localStorage.getItem("listeIngredients")) { // si la clé "listeIngredients" existe dans le localStorage
  const savedIngredients = window.localStorage.getItem("listeIngredients"); // Récupérer la Map depuis le localStorage et la convertir en Map
  
  listeIngredients = new Map(JSON.parse(savedIngredients)); // Convertir la chaîne JSON en array, puis en Map
  
  window.localStorage.setItem("listeIngredients", JSON.stringify(Array.from(listeIngredients.entries()))); // Convertir la Map en array, puis en chaîne JSON et la stocker dans le localStorage

  if (listeIngredients.get("Salade Test") == null) {
    // Ajouter un ingrédient par défaut
    listeIngredients.set("Salade Test", 10); 
    listeIngredients.set("Tomate Test", 5);
    listeIngredients.set("Cornichon Test", 4);
    listeIngredients.set("Fromage Test", 2);
    listeIngredients.set("Steak Test", 1);
    listeIngredients.set("Sauce Test", 1);
  }



    
    // console.log(listeIngredients);
} else {
    console.log("Aucun ingrédient n'a été enregistré");
    if (listeIngredients.get("Salade Test") == null) {
      // Ajouter un ingrédient par défaut
      listeIngredients.set("Salade Test", 10); 
      listeIngredients.set("Tomate Test", 5);
      listeIngredients.set("Cornichon Test", 4);
      listeIngredients.set("Fromage Test", 2);
      listeIngredients.set("Steak Test", 1);
      listeIngredients.set("Sauce Test", 1);
    }
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

  const selectedIngredient1 = ingredient1.value;
  const selectedIngredient2 = ingredient2.value;
  const selectedIngredient3 = ingredient3.value;

  // Vérifiez que chaque ingrédient a suffisamment de quantité, puis réduisez la quantité de 1
  if (listeIngredients.get(selectedIngredient1) > 0) {
    listeIngredients.set(selectedIngredient1, listeIngredients.get(selectedIngredient1) - 1);
  }
  if (listeIngredients.get(selectedIngredient2) > 0) {
    listeIngredients.set(selectedIngredient2, listeIngredients.get(selectedIngredient2) - 1);
  }
  if (listeIngredients.get(selectedIngredient3) > 0) {
    listeIngredients.set(selectedIngredient3, listeIngredients.get(selectedIngredient3) - 1);
  }

  // Mettez à jour le localStorage avec les nouvelles quantités
  window.localStorage.setItem("listeIngredients", JSON.stringify(Array.from(listeIngredients.entries())));
  console.log("Burger créé avec les quantités mises à jour :", listeIngredients);
  location.reload();

});



// suppression des ingredient
document.getElementById("supressionIngredient").addEventListener("submit", function(event) {
  event.preventDefault();
  window.localStorage.removeItem("listeIngredients");
  console.log("Ingrédients supprimés");
  }
);