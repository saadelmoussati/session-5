
function afficherBienvenue() {
    console.log("=== Bienvenue sur le système ===");
    console.log("Statut : Utilisateur connecté");
}


afficherBienvenue();
afficherBienvenue();


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
