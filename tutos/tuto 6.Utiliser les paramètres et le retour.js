function moyenne(a, b, c) {
    let resultat = (a + b + c) / 3;
    console.log("le moyenne est :", resultat);
}


moyenne(23, 20, 50);

function max(x, y) {
    let maximem = x;
    if (x < y) {
        maximem = y;
    }
    console.log("le max de ", x, "et ", y, " est :", maximem);
}


max(333, 2222);
max(234, 32289);

max(-23, 22);








function calculerSurface(longueur, largeur) {
    return longueur * largeur;
}

// 2. Fonction de décision (retourne un booléen)
function estGrand(surface) {
    return surface >= 100;
}

// 3. Exécution et exploitation des résultats
let surfacePiece = calculerSurface(12, 10);
let grandePiece = estGrand(surfacePiece);

console.log("Surface calculée : " + surfacePiece + " m²");
console.log("Grande pièce : " + grandePiece);

