/* -------------------- FONCTIONS DU TABLEAU -------------------- */


            /* ---------- RECHERCHER LE MAXIMUM ET LE MINIMUM ---------- */

function search () {
    // tableau contenant une liste de nombres
    let arrayNumbers = [1, 12, -5, 3, 16, 0, 219, -34, 42, 501, 7, 11, -1];
    
    // tri du tableau de nombres par ordre croissant
    let arrayNumberSort = arrayNumbers.sort((a,b) => a - b);

    // récupération de la valeur minimum
    let minimum = arrayNumberSort[0];

    // récupération de la valeur maximum
    let maximum = arrayNumberSort[arrayNumbers.length - 1];

    // retour des valeurs minimum et maximum dans dans la portée globale à l'aide d'un objet
    return {
        min: minimum,
        max: maximum,
    };
};

// affichage des nombres minimum et maximum dans la console
console.log(`Le nombre minimum est : ${search().min}`);
console.log(`Le nombre maximum est : ${search().max}`);


            /* ---------- SOMME DU TABLEAU ---------- */

function sumNumbers() {
    // tableau contenant une liste de nombres
    let numbers = [1, 12, -5, 3, 16, 0, 219, -34, 42, 501, 7, 11, -1];

    // initialisation de la somme des nombres
    let sum = 0;

    // parcours et sommation des nombres du tableau
    for (let value of numbers) {
        sum += value;
    };

    // retour de la somme totale des nombres du tableau
    return sum;
};

// affichage de la somme totale dans la console
console.log(`la somme des nombres du tableau est : ${sumNumbers()}`);


            /* ---------- FILTRER UN TABLEAU ---------- */

function listPerson () {
    // tableau de prénoms de personne
    let persons = ["Gontrand", "Christophe", "Marie", "Ricardo", "Arnaud", "Igor", "Zadi", "Oscar"];
    
    // tri des prénoms par ordre alphabétique sous forme de tableau
    let personSort = persons.sort((a,b) => a.localeCompare(b));

    // retour tableau trié
    return personSort;
};

// afichage du tableau trié dans la console
console.log(listPerson());
