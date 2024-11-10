const listeIngredients = {
    "option1": "Valeur 1",
    "option2": "Valeur 2",
    "option3": "Valeur 3",
    "option4": "Valeur 4"
  };
  
  const ingredient1 = document.getElementById("ingredient1");
  
  // Parcours du dictionnaire et ajout d'options dans la liste déroulante
  for (const key in listeIngredients) {
    if (listeIngredients.hasOwnProperty(key)) {  // Vérifie que la clé appartient au dictionnaire
      const option = document.createElement("option"); // Crée un élément <option>
      option.value = key;                            // Définit la valeur de l'option
      option.textContent = listeIngredients[key];     // Définit le texte affiché
      ingredient1.appendChild(option);                // Ajoute l'option à la liste déroulante
    }
  }


// a faire : ajouter l'ingrédient à la liste des ingrédients : dictionnaire ou map ?
// a faire : modifier valeur de listeIngredients