"use strict";
function chargement() {

    let a = 0;

    document.getElementById('scores').innerHTML = "<p class='score'>vous avez a " + a + " points </p><p class='score'>le gardien a " + a + " points </p> ";

}

let ptsJoueur = 0;
let ptsRobot = 0;

function gauche() {

    let reponse = "gauche";
    let robot = Math.floor(Math.random() * 3) + 1 ;


    if (robot == 1) {

        robot = "gauche";
    }

    else if (robot == 2) {

        robot = "milieu";

    }

    else {

        robot = "droite";

    }

    if (reponse == "gauche" && robot == "gauche") {

        ptsJoueur++;
        document.getElementById('compteur').innerHTML = "<p class='compteur'>Gagné</p>";
        document.getElementById('scores').innerHTML = "<p class='score'>vous avez " + ptsJoueur + " points </p><p class='score'>le gardien a " + ptsRobot + " points </p> ";


    }
    else if (reponse == "gauche" && robot == "milieu") {

        ptsJoueur++;
        document.getElementById('compteur').innerHTML = "<p class='compteur'>Gagné</p>";
        document.getElementById('scores').innerHTML = "<p class='score'>vous avez " + ptsJoueur + " points </p><p class='score'>le gardien a " + ptsRobot + " points </p> ";

    }
    else if (reponse == "gauche" && robot == "droite") {

        ptsRobot++;
        document.getElementById('compteur').innerHTML = "<p class='compteur'>Perdu</p>";
        document.getElementById('scores').innerHTML = "<p class='score'>vous avez " + ptsJoueur + " points </p><p class='score'>le gardien a " + ptsRobot + " points </p> ";

    }


}

function milieu() {

    let reponse = "milieu";
    let robot = Math.floor(Math.random() * 3) + 1 ;


    if (robot == 1) {

        robot = "gauche";
    }

    else if (robot == 2) {

        robot = "mileu";

    }

    else {

        robot = "droite";

    }

    if (reponse == "milieu" && robot == "gauche") {

        ptsJoueur++;
        document.getElementById('compteur').innerHTML = "<p class='compteur'>Gagné</p>";
        document.getElementById('scores').innerHTML = "<p class='score'>vous avez " + ptsJoueur + " points </p><p class='score'>le gardien a " + ptsRobot + " points </p> ";


    }
    else if (reponse == "milieu" && robot == "milieu") {

        ptsRobot++;
        document.getElementById('compteur').innerHTML = "<p class='compteur'>Perdu</p>";
        document.getElementById('scores').innerHTML = "<p class='score'>vous avez " + ptsJoueur + " points </p><p class='score'>le gardien a " + ptsRobot + " points </p> ";


    }
    else if (reponse == "milieu" && robot == "droite") {

        ptsJoueur++;
        document.getElementById('compteur').innerHTML = "<p class='compteur'>Gagné</p>";
        document.getElementById('scores').innerHTML = "<p class='score'>vous avez " + ptsJoueur + " points </p><p class='score'>le gardien a " + ptsRobot + " points </p> ";


    }

}

function droite() {

    let reponse = "droite";
    let robot = Math.floor(Math.random() * 3) + 1 ;


    if (robot == 1) {

        robot = "gauche";
    }

    else if (robot == 2) {

        robot = "milieu";

    }

    else {

        robot = "droite";

    }

    if (reponse == "droite" && robot == "gauche") {

        ptsRobot++;
        document.getElementById('compteur').innerHTML = "<p class='compteur'>Perdu</p>";
        document.getElementById('scores').innerHTML = "<p class='score'>vous avez " + ptsJoueur + " points </p><p class='score'>le gardien a " + ptsRobot + " points </p> ";


    }
    else if (reponse == "droite" && robot == "milieu") {

        ptsJoueur++;
        document.getElementById('compteur').innerHTML = "<p class='compteur'>Gagné</p>";
        document.getElementById('scores').innerHTML = "<p class='score'>vous avez " + ptsJoueur + " points </p><p class='score'>le gardien a " + ptsRobot + " points </p> ";


    }
    else if (reponse == "droite" && robot == "droite") {

        ptsJoueur++;
        document.getElementById('compteur').innerHTML = "<p class='compteur'>Gagné</p>";
        document.getElementById('scores').innerHTML = "<p class='score'>vous avez " + ptsJoueur + " points </p><p class='score'>le gardien a " + ptsRobot + " points </p> ";

    }

}


