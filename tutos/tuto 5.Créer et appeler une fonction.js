function afficherFin() {
    console.log("=== Session terminée ===");
}

function afficherDemarrage() {
    console.log("=== Démarrage du système ===");
    console.log("Statut : Opérationnel");
}

afficherDemarrage();
afficherFin();


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