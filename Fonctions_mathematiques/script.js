/* -------------------- FONCTIONS MATHEMATIQUES -------------------- */


            /* ---------- FACTORIELLE ---------- */

function factorielle () {
    let number;

    // exécuter le programme une première fois
    do {
        number = parseFloat(prompt("Saisir un nombre entier pour calculer son factoriel !"));

        if (isNaN(number)) {
            alert("Veuillez saisir un nombre valide");
        }
        else if (number < 0 || !Number.isInteger(number)) {
            alert("Veuillez saisir un nombre entier positif")
        };
    }

    // répeter le programme en cas de mauvaise saisie
    while (isNaN(number) || number < 0 || !Number.isInteger(number));

    // calcul du factoriel
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result = result * i;
    };

    // affichage du résultat dans une alerte
    alert(`${number}! = ${result}`);
};

// appel de la fonction
// factorielle();

            /* ---------- VERIFICATION DES NOMBRES PREMIERS ---------- */

function nombrePremier () {
    let nombre;

    // exécuter le programme une première fois
    do {
        nombre = parseFloat(prompt("Saisir un nombre entier pour vérifier s'il est premier !"));

        if (isNaN(nombre)) {
            alert("Veuillez saisir un nombre valide");
        };
    }

    // répeter le programme en cas de mauvaise saisie
    while (isNaN(nombre));

    // Vérification de tout autre nombre decimal ou inférieur à 1
    if (nombre <= 1 || !Number.isInteger(nombre)) {
        return false;
    };

    // Vérification si le nombre entier est divisible par un nombre autre que 1 et lui-même
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        };
    };

    return true;
};
// Apppel de la fonction
// if (nombrePremier()) {
//     alert("C'est un nombre premier !");
// }

// else {
//     alert("Ce n'est pas un nombre premier !");
// };

            /* ---------- SEQUENCE DE FIBONACCI ---------- */

function fibonacci (n) {
    let sequence = [];
    
    if (n == 0) {
        return "Impossible";
    }

    if (n >= 1) {
        sequence.push(0);
    }

    if (n >= 2) {
        sequence.push(1);
    }

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
};

// Déclarations de variables
var nombreDeTermes = parseFloat(prompt("Saisir un nombre de termes de la suite de Fibonacci !"));
var sequenceFibonacci = fibonacci(nombreDeTermes);

// exécuter le programme une première fois
do {
    // Saisir le nombre de termes par l'utilisateur
    nombreDeTermes;

    // Vérifier le type de valeur saisie
    if (isNaN(nombreDeTermes)) {
        alert("Veuillez saisir un nombre valide");
    }

    else if (nombreDeTermes < 0 || !Number.isInteger(nombreDeTermes)) {
        alert("Veuillez saisir un nombre entier strictement positif")
    };
}

// répeter le programme en cas de mauvaise saisie
while (isNaN(nombreDeTermes) || nombreDeTermes < 0 || !Number.isInteger(nombreDeTermes));

// Afficher dans une pop-up alert les séquances de Fibonacci
alert(`La séquence de Fibonacci jusqu'à ${nombreDeTermes} termes est : ${sequenceFibonacci}`);
