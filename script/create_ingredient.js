var quantity = document.getElementById("Quantité"); // associe la variable quantity à l'élément HTML qui a l'id Quantité

quantity.addEventListener("keyup", function (event) { // ajoute un écouteur d'événement sur l'élément quantity

  var quantityValue = quantity.value.trim(); // associe la variable quantityValue à la valeur de quantity sans les espaces
  
  if (!/^\d+$/.test(quantityValue)) { // si quantityValue ne contient pas que des chiffres
    ErreurIngredient.style.display = "block";
  } else if (parseInt(quantityValue, 10) <= 1) { // sinon si quantityValue est inférieur ou égal à 1
    ErreurIngredient.style.display = "block";
  } else { // sinon
    ErreurIngredient.style.display = "none";
    // a faire : ajouter l'ingrédient à la liste des ingrédients : dictionnaire
  }
});