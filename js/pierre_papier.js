"use strict";
function chargement() {

    let a = 0;

    document.getElementById('scores').innerHTML = "<p class='score'>vous avez " + a + " points </p><p class='score'>l'ordinateur a " + a + " points </p> ";

}

let ptsJoueur = 0;
let ptsRobot = 0;

function papier() {

    let reponse = "papier";
    let robot = Math.floor(Math.random() * 3) + 1 ;


    if (robot == 1) {

        robot = "pierre";
    }

    else if (robot == 2) {

        robot = "papier";

    }

    else {

        robot = "ciseaux";

    }

    if (reponse == "papier" && robot == "pierre") {

        ptsJoueur++;
        document.getElementById('compteur').innerHTML = "<p class='compteur'>Gagné</p>";
        document.getElementById('scores').innerHTML = "<p class='score'>vous avez " + ptsJoueur + " points </p><p class='score'>l'ordinateur a " + ptsRobot + " points </p> ";


    }
    else if (reponse == "papier" && robot == "papier") {

        document.getElementById('compteur').innerHTML = "<p class='compteur'>Egalité</p>";


    }
    else if (reponse == "papier" && robot == "ciseaux") {

        ptsRobot++;
        document.getElementById('compteur').innerHTML = "<p class='compteur'>Perdu</p>";
        document.getElementById('scores').innerHTML = "<p class='score'>vous avez " + ptsJoueur + " points </p><p class='score'>l'ordinateur a " + ptsRobot + " points </p> ";


    }


}

function pierre() {

    let reponse = "pierre";
    let robot = Math.floor(Math.random() * 3) + 1 ;


    if (robot == 1) {

        robot = "pierre";
    }

    else if (robot == 2) {

        robot = "papier";

    }

    else {

        robot = "ciseaux";

    }

    if (reponse == "pierre" && robot == "pierre") {

        document.getElementById('compteur').innerHTML = "<p class='compteur'>Egalité</p>";


    }
    else if (reponse == "pierre" && robot == "papier") {

        ptsRobot++;
        document.getElementById('compteur').innerHTML = "<p class='compteur'>Perdu</p>";
        document.getElementById('scores').innerHTML = "<p class='score'>vous avez " + ptsJoueur + " points </p><p class='score'>l'ordinateur a " + ptsRobot + " points </p> ";


    }
    else if (reponse == "pierre" && robot == "ciseaux") {

        ptsJoueur++;
        document.getElementById('compteur').innerHTML = "<p class='compteur'>Gagné</p>";
        document.getElementById('scores').innerHTML = "<p class='score'>vous avez " + ptsJoueur + " points </p><p class='score'>l'ordinateur a " + ptsRobot + " points </p> ";


    }

}

function ciseaux() {

    let reponse = "ciseaux";
    let robot = Math.floor(Math.random() * 3) + 1 ;


    if (robot == 1) {

        robot = "pierre";
    }

    else if (robot == 2) {

        robot = "papier";

    }

    else {

        robot = "ciseaux";

    }

    if (reponse == "ciseaux" && robot == "pierre") {

        ptsRobot++;
        document.getElementById('compteur').innerHTML = "<p class='compteur'>Perdu</p>";
        document.getElementById('scores').innerHTML = "<p class='score'>vous avez " + ptsJoueur + " points </p><p class='score'>l'ordinateur a " + ptsRobot + " points </p> ";


    }
    else if (reponse == "ciseaux" && robot == "papier") {

        ptsJoueur++;
        document.getElementById('compteur').innerHTML = "<p class='compteur'>Gagné</p>";
        document.getElementById('scores').innerHTML = "<p class='score'>vous avez " + ptsJoueur + " points </p><p class='score'>l'ordinateur a " + ptsRobot + " points </p> ";


    }
    else if (reponse == "ciseaux" && robot == "ciseaux") {

        document.getElementById('compteur').innerHTML = "<p class='compteur'>Egalité</p>";

    }

}


