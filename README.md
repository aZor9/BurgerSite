# BurgerFactory  🍔

## Description

Le projet **BurgerFactory** est une application web permettant de gérer des ingrédients et de créer des burgers personnalisés. Il est conçu avec les technologies HTML, CSS et JavaScript (sans l'utilisation de bibliothèques externes à part Bootstrap pour le design).

## Fonctionnalités

1. **Page d'Accueil**
   - Affichage d'un diaporama avec des images de burgers qui changent toutes les 10 secondes.
   - Au clic sur une image, le nom du burger correspondant s'affiche en dessous.

2. **Création d'Ingrédients**
   - Possibilité d'ajouter un ingrédient avec un nom et une quantité.
   - L'ingrédient ajouté est disponible dans les listes déroulantes pour la création des burgers.
   - Validation des champs pour garantir un nom valide et une quantité supérieure à 0.
   - Affichage d'un message d'erreur si les saisies sont incorrectes.

3. **Création de Burger**
   - Sélection de 3 ingrédients dans les listes déroulantes.
   - Récupération du nom du burger et des ingrédients pour créer un burger.
   - Mise à jour de la liste d'ingrédients avec les quantités restantes.
   - Affichage d'un message d'erreur si les champs ne sont pas valides ou si les ingrédients sont insuffisants.

4. **API**
   - Appel à une API pour récupérer des informations sur la ferme bio avec laquelle le restaurant travaille.
   - ⚠️ **Avertissement** : L'API actuellement utilisée n'est pas fonctionnelle. Aucune information sur la ferme n'est affichée pour le moment.


## Technologies utilisées





[![My Skills](https://skillicons.dev/icons?i=html)]()  **HTML5** : Structure du site.
<br>
[![My Skills](https://skillicons.dev/icons?i=css)]()  **CSS3** : Design et mise en forme.
<br>
[![My Skills](https://skillicons.dev/icons?i=js)]()  **JavaScript** : Logique de gestion des ingrédients, des burgers et des interactions avec l'utilisateur.
<br>
[![My Skills](https://skillicons.dev/icons?i=bootstrap)]()  **Bootstrap** : Utilisé pour la mise en page réactive et l'apparence générale du site.
<br>

## Fonctionnement


### Lancement
Il faut herberger les fichier dans un serveur et ouvrir sur via un navigateur le fichier `index.html`
<br>
-> **conseil** : utiliser par exemple `WampServer`, ou l'extension VsCode `Live Server`


### Informations
Les données (ingrédients et burgers) sont stockées dans le `localStorage` du navigateur. Cela permet de conserver les informations même après le rechargement de la page.
