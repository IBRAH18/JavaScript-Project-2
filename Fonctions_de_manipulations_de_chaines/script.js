/* -------------------- FONCTIONS DE MANIPULATION DE CHAÎNES -------------------- */


            /* ---------- INVERSER UNE CHAÎNE DONNEE ---------- */

function reversed () {
    // saisir un texte par l'utilisateur
    let text = prompt("Saisir un texte. Celui-ci sera inversé ! (Voir console)");

    // transformer la chaîne sous forme de tableau
    let textSplit = text.split(''); 

    // inverser les éléments du tableau
    let textReverse = textSplit.reverse();

    // transformation du tableau en chaîne de caractères
    let textJoin = textReverse.join(''); 

    // retour du texte inversé dans la portée globale
    return textJoin; 
};

// affichage du texte inversé dans la console
console.log(reversed()); 


            /* ---------- COMPTER LES CARACTERES ---------- */

function count () {
    // saisir un texte par l'utilisateur
    let text = prompt("Saisir un texte. Vous aurez le nombre de caractères qu'il contient ! (Voir console)"); 

    // avoir le nombre de caractères que contient une chaîne
    let textLength = text.length; 

    // retour du nombre de caractères dans la portée globale
    return textLength; 
};

// affichage du nombre de caractères dans la console
console.log(`Votre texte contient ${count()} caractères !`); 


            /* ---------- METTRE EN MAJUSCULE LA PREMIERE LETTRE DE CHAQUE MOT D'UNE PHRASE ---------- */

function strUcFirst () {
    // saisir un texte par l'utilisateur
    let texte = prompt("Saisir un texte. Les premières lettres de chaque mot sera mis en majuscule ! (Voir console)"); 

    // transformer la chaîne sous forme de tableau
    let texteSplit = texte.split(' '); 

    // mettre chaue première lettre de la phrase en majuscule
    for ( let i = 0; i < texteSplit.length; i++) {
        texteSplit[i] = texteSplit[i].charAt(0).toUpperCase() + texteSplit[i].slice(1);
    }; 

    // retour du texte modifié dans la portée globale
    return texteSplit.join(' '); 
};

// affichage du texte modifié dans la console
console.log(strUcFirst()); 
