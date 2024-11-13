

const savedIngredients = window.localStorage.getItem("listeIngredients"); // Récupérer la Map depuis le localStorage et la convertir en Map
let listeIngredients = new Map(); // Initialisation de la Map
window.localStorage.setItem("listeIngredients", JSON.stringify(Array.from(listeIngredients.entries()))); // Convertir la Map en array, puis en chaîne JSON et la stocker dans le localStorage
if (savedIngredients) {
    listeIngredients = new Map(JSON.parse(savedIngredients)); // Convertir la chaîne JSON en array, puis en Map
    
    window.localStorage.setItem("listeIngredients", JSON.stringify(Array.from(listeIngredients.entries()))); // Convertir la Map en array, puis en chaîne JSON et la stocker dans le localStorage



    // Ajouter un ingrédient par défaut
    listeIngredients.set("Salade Test", 10); 
    listeIngredients.set("Tomate Test", 5);
    listeIngredients.set("Cornichon Test", 4);
    listeIngredients.set("Fromage Test", 2);
    listeIngredients.set("Steak Test", 1);
    listeIngredients.set("Sauce Test", 1);


    
    // console.log(listeIngredients);
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