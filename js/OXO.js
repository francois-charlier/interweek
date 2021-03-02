
function quicommence() {

    let ramdom = Math.floor(Math.random()* 2);

    if (ramdom == 0) {
        document.getElementById('commence').innerHTML = "<p>Le joueur qui a les X commence</p>"
        document.getElementById('a1').onclick = function ()  {pourLesX('a1')};
        document.getElementById('a2').onclick = function ()  {pourLesX('a2')};
        document.getElementById('a3').onclick = function ()  {pourLesX('a3')};
        document.getElementById('b1').onclick = function ()  {pourLesX('b1')};
        document.getElementById('b2').onclick = function ()  {pourLesX('b2')};
        document.getElementById('b3').onclick = function ()  {pourLesX('b3')};
        document.getElementById('c1').onclick = function ()  {pourLesX('c1')};
        document.getElementById('c2').onclick = function ()  {pourLesX('c2')};
        document.getElementById('c3').onclick = function ()  {pourLesX('c3')};

        document.getElementById("total").innerHTML = "<p>le joueur avec la lettre X a " + joueurX + " point(s)</p>";
        document.getElementById("total2").innerHTML = "<p>le joueur avec la lettre O a " + joueurO + " point(s)</p>";

        a1 = "";
        a2 = "";
        a3 = "";
        b1 = "";
        b2 = "";
        b3 = "";
        c1 = "";
        c2 = "";
        c3 = "";
    }
    else if (ramdom == 1) {
        document.getElementById('commence').innerHTML = "<p>Le joueur qui a les O commence</p>"
        document.getElementById('a1').onclick = function ()  {pourLesO('a1')};
        document.getElementById('a2').onclick = function ()  {pourLesO('a2')};
        document.getElementById('a3').onclick = function ()  {pourLesO('a3')};
        document.getElementById('b1').onclick = function ()  {pourLesO('b1')};
        document.getElementById('b2').onclick = function ()  {pourLesO('b2')};
        document.getElementById('b3').onclick = function ()  {pourLesO('b3')};
        document.getElementById('c1').onclick = function ()  {pourLesO('c1')};
        document.getElementById('c2').onclick = function ()  {pourLesO('c2')};
        document.getElementById('c3').onclick = function ()  {pourLesO('c3')};

        document.getElementById("total").innerHTML = "<p>le joueur avec la lettre X a " + joueurX + " point(s)</p>";
        document.getElementById("total2").innerHTML = "<p>le joueur avec la lettre O a " + joueurO + " point(s)</p>";

        a1 = "";
        a2 = "";
        a3 = "";
        b1 = "";
        b2 = "";
        b3 = "";
        c1 = "";
        c2 = "";
        c3 = "";
    }
}

let a1 = "";
let a2 = "";
let a3 = "";
let b1 = "";
let b2 = "";
let b3 = "";
let c1 = "";
let c2 = "";
let c3 = "";

let joueurX = 0;
let joueurO = 0;


function fin() {
    document.getElementById('a1').disabled = false;
    document.getElementById('a2').disabled = false;
    document.getElementById('a3').disabled = false;
    document.getElementById('b1').disabled = false;
    document.getElementById('b2').disabled = false;
    document.getElementById('b3').disabled = false;
    document.getElementById('c1').disabled = false;
    document.getElementById('c2').disabled = false;
    document.getElementById('c3').disabled = false;

    document.getElementById('a1').value = '';
    document.getElementById('a2').value = '';
    document.getElementById('a3').value = '';
    document.getElementById('b1').value = '';
    document.getElementById('b2').value = '';
    document.getElementById('b3').value = '';
    document.getElementById('c1').value = '';
    document.getElementById('c2').value = '';
    document.getElementById('c3').value = '';

    return 0;
}

function testeX() {

    if (a1 == "x" && a2 == "x" && a3 == "x") {

        joueurX++;
        fin();
        document.getElementById('resultat').innerHTML = "<p>le joueur ayant la lettre X gagne !</p>"
        quicommence();



    }
    else if (b1 == "x" && b2 == "x" && b3 == "x") {

        joueurX++;
        fin();
        document.getElementById('resultat').innerHTML = "<p>le joueur ayant la lettre X gagne !</p>"
        quicommence();
    }
    else if (c1 == "x" && c2 == "x" && c3 == "x") {

        joueurX++;
        fin();
        document.getElementById('resultat').innerHTML = "<p>le joueur ayant la lettre X gagne !</p>"
        quicommence();
    }
    else if (a1 == "x" && b1 == "x" && c1 == "x") {

        joueurX++;
        fin();
        document.getElementById('resultat').innerHTML = "<p>le joueur ayant la lettre X gagne !</p>"
        quicommence();
    }
    else if (a2 == "x" && b2 == "x" && c2 == "x") {

        joueurX++;
        fin();
        document.getElementById('resultat').innerHTML = "<p>le joueur ayant la lettre X gagne !</p>"
        quicommence();
    }
    else if (a3 == "x" && b3 == "x" && c3 == "x") {

        joueurX++;
        fin();
        document.getElementById('resultat').innerHTML = "<p>le joueur ayant la lettre X gagne !</p>"
        quicommence();
    }
    else if (a1 == "x" && b2 == "x" && c3 == "x") {

        joueurX++;
        fin();
        document.getElementById('resultat').innerHTML = "<p>le joueur ayant la lettre X gagne !</p>"
        quicommence();
    }
    else if (a3 == "x" && b2 == "x" && c1 == "x") {

        joueurX++;
        fin();
        document.getElementById('resultat').innerHTML = "<p>le joueur ayant la lettre X gagne !</p>"
        quicommence();
    }
    else if (a1 != "" && a2 != "" && a3 != "" && b1 != "" && b2 != "" && b3 != "" && c1 != "" && c2 != "" && c3 != "") {

        fin();
        document.getElementById('resultat').innerHTML = "<p>Match Nul !</p>"
        quicommence();


    }

}



function pourLesX(x) {

    let compteur = 0;
    document.getElementById(x).value = 'X';
    compteur++;
    if (compteur > 0) {

        if (x == "a1") {
            a1 = "x";
            document.getElementById('a1').disabled = true;
            document.getElementById('a2').onclick = function ()  {pourLesO('a2')};
            document.getElementById('a3').onclick = function ()  {pourLesO('a3')};
            document.getElementById('b1').onclick = function ()  {pourLesO('b1')};
            document.getElementById('b2').onclick = function ()  {pourLesO('b2')};
            document.getElementById('b3').onclick = function ()  {pourLesO('b3')};
            document.getElementById('c1').onclick = function ()  {pourLesO('c1')};
            document.getElementById('c2').onclick = function ()  {pourLesO('c2')};
            document.getElementById('c3').onclick = function ()  {pourLesO('c3')};
            compteur--;
            testeX();
        }
        else if (x == "a2") {
            a2 = "x";
            document.getElementById('a1').onclick = function ()  {pourLesO('a1')};
            document.getElementById('a2').disabled = true;
            document.getElementById('a3').onclick = function ()  {pourLesO('a3')};
            document.getElementById('b1').onclick = function ()  {pourLesO('b1')};
            document.getElementById('b2').onclick = function ()  {pourLesO('b2')};
            document.getElementById('b3').onclick = function ()  {pourLesO('b3')};
            document.getElementById('c1').onclick = function ()  {pourLesO('c1')};
            document.getElementById('c2').onclick = function ()  {pourLesO('c2')};
            document.getElementById('c3').onclick = function ()  {pourLesO('c3')};
            compteur--;
            testeX();
        }
        else if (x == "a3") {
            a3 = "x";
            document.getElementById('a1').onclick = function ()  {pourLesO('a1')};
            document.getElementById('a2').onclick = function ()  {pourLesO('a2')};
            document.getElementById('a3').disabled = true;
            document.getElementById('b1').onclick = function ()  {pourLesO('b1')};
            document.getElementById('b2').onclick = function ()  {pourLesO('b2')};
            document.getElementById('b3').onclick = function ()  {pourLesO('b3')};
            document.getElementById('c1').onclick = function ()  {pourLesO('c1')};
            document.getElementById('c2').onclick = function ()  {pourLesO('c2')};
            document.getElementById('c3').onclick = function ()  {pourLesO('c3')};
            compteur--;
            testeX();

        }
        else if (x == "b1") {
            b1 = "x";
            document.getElementById('a1').onclick = function ()  {pourLesO('a1')};
            document.getElementById('a2').onclick = function ()  {pourLesO('a2')};
            document.getElementById('a3').onclick = function ()  {pourLesO('a3')};
            document.getElementById('b1').disabled = true;
            document.getElementById('b2').onclick = function ()  {pourLesO('b2')};
            document.getElementById('b3').onclick = function ()  {pourLesO('b3')};
            document.getElementById('c1').onclick = function ()  {pourLesO('c1')};
            document.getElementById('c2').onclick = function ()  {pourLesO('c2')};
            document.getElementById('c3').onclick = function ()  {pourLesO('c3')};
            compteur--;
            testeX();

        }
        else if (x == "b2") {
            b2 = "x";
            document.getElementById('a1').onclick = function ()  {pourLesO('a1')};
            document.getElementById('a2').onclick = function ()  {pourLesO('a2')};
            document.getElementById('a3').onclick = function ()  {pourLesO('a3')};
            document.getElementById('b1').onclick = function ()  {pourLesO('b1')};
            document.getElementById('b2').disabled = true;
            document.getElementById('b3').onclick = function ()  {pourLesO('b3')};
            document.getElementById('c1').onclick = function ()  {pourLesO('c1')};
            document.getElementById('c2').onclick = function ()  {pourLesO('c2')};
            document.getElementById('c3').onclick = function ()  {pourLesO('c3')};
            compteur--;
            testeX();

        }
        else if (x == "b3") {
            b3 = "x";
            document.getElementById('a1').onclick = function ()  {pourLesO('a1')};
            document.getElementById('a2').onclick = function ()  {pourLesO('a2')};
            document.getElementById('a3').onclick = function ()  {pourLesO('a3')};
            document.getElementById('b1').onclick = function ()  {pourLesO('b1')};
            document.getElementById('b2').onclick = function ()  {pourLesO('b2')};
            document.getElementById('b3').disabled = true;
            document.getElementById('c1').onclick = function ()  {pourLesO('c1')};
            document.getElementById('c2').onclick = function ()  {pourLesO('c2')};
            document.getElementById('c3').onclick = function ()  {pourLesO('c3')};
            compteur--;
            testeX();

        }
        else if (x == "c1") {
            c1 = "x";
            document.getElementById('a1').onclick = function ()  {pourLesO('a1')};
            document.getElementById('a2').onclick = function ()  {pourLesO('a2')};
            document.getElementById('a3').onclick = function ()  {pourLesO('a3')};
            document.getElementById('b1').onclick = function ()  {pourLesO('b1')};
            document.getElementById('b2').onclick = function ()  {pourLesO('b2')};
            document.getElementById('b3').onclick = function ()  {pourLesO('b3')};
            document.getElementById('c1').disabled = true;
            document.getElementById('c2').onclick = function ()  {pourLesO('c2')};
            document.getElementById('c3').onclick = function ()  {pourLesO('c3')};
            compteur--;
            testeX();

        }
        else if (x == "c2") {
            c2 = "x";
            document.getElementById('a1').onclick = function ()  {pourLesO('a1')};
            document.getElementById('a2').onclick = function ()  {pourLesO('a2')};
            document.getElementById('a3').onclick = function ()  {pourLesO('a3')};
            document.getElementById('b1').onclick = function ()  {pourLesO('b1')};
            document.getElementById('b2').onclick = function ()  {pourLesO('b2')};
            document.getElementById('b3').onclick = function ()  {pourLesO('b3')};
            document.getElementById('c1').onclick = function ()  {pourLesO('c1')};
            document.getElementById('c2').disabled = true;
            document.getElementById('c3').onclick = function ()  {pourLesO('c3')};
            compteur--;
            testeX();

        }
        else if (x == "c3") {
            c3 = "x";
            document.getElementById('a1').onclick = function ()  {pourLesO('a1')};
            document.getElementById('a2').onclick = function ()  {pourLesO('a2')};
            document.getElementById('a3').onclick = function ()  {pourLesO('a3')};
            document.getElementById('b1').onclick = function ()  {pourLesO('b1')};
            document.getElementById('b2').onclick = function ()  {pourLesO('b2')};
            document.getElementById('b3').onclick = function ()  {pourLesO('b3')};
            document.getElementById('c1').onclick = function ()  {pourLesO('c1')};
            document.getElementById('c2').onclick = function ()  {pourLesO('c2')};
            document.getElementById('c3').disabled = true;
            compteur--;
            testeX();

        }
    }
}

function testeO() {

    if (a1 == "o" && a2 == "o" && a3 == "o") {

        joueurO++;
        fin();
        document.getElementById('resultat').innerHTML = "<p>le joueur ayant la lettre O gagne !</p>"
        quicommence();

    }
    else if (b1 == "o" && b2 == "o" && b3 == "o") {

        joueurO++;
        fin();
        document.getElementById('resultat').innerHTML = "<p>le joueur ayant la lettre O gagne !</p>"
        quicommence();
    }
    else if (c1 == "o" && c2 == "o" && c3 == "o") {

        joueurO++;
        fin();
        document.getElementById('resultat').innerHTML = "<p>le joueur ayant la lettre O gagne !</p>"
        quicommence();
    }
    else if (a1 == "o" && b1 == "o" && c1 == "o") {

        joueurO++;
        fin();
        document.getElementById('resultat').innerHTML = "<p>le joueur ayant la lettre O gagne !</p>"
        quicommence();
    }
    else if (a2 == "o" && b2 == "o" && c2 == "o") {

        joueurO++;
        fin();
        document.getElementById('resultat').innerHTML = "<p>le joueur ayant la lettre O gagne !</p>"
        quicommence();
    }
    else if (a3 == "o" && b3 == "o" && c3 == "o") {

        joueurO++;
        fin();
        document.getElementById('resultat').innerHTML = "<p>le joueur ayant la lettre O gagne !</p>"
        quicommence();
    }
    else if (a1 == "o" && b2 == "o" && c3 == "o") {

        joueurO++;
        fin();
        document.getElementById('resultat').innerHTML = "<p>le joueur ayant la lettre O gagne !</p>"
        quicommence();
    }
    else if (a3 == "o" && b2 == "o" && c1 == "o") {

        joueurO++;
        fin();
        document.getElementById('resultat').innerHTML = "<p>le joueur ayant la lettre O gagne !</p>"
        quicommence();
    }
    else if (a1 != "" && a2 != "" && a3 != "" && b1 != "" && b2 != "" && b3 != "" && c1 != "" && c2 != "" && c3 != "") {

        fin();
        document.getElementById('resultat').innerHTML = "<p>Match Nul !</p>"
        quicommence();


    }

}

function pourLesO(y) {

    let compteur = 0;
    document.getElementById(y).value = 'O';
    compteur++;

    if (compteur > 0) {

        if (y == "a1") {
            a1 = 'o';
            document.getElementById('a1').disabled = true;
            document.getElementById('a2').onclick = function ()  {pourLesX('a2')};
            document.getElementById('a3').onclick = function ()  {pourLesX('a3')};
            document.getElementById('b1').onclick = function ()  {pourLesX('b1')};
            document.getElementById('b2').onclick = function ()  {pourLesX('b2')};
            document.getElementById('b3').onclick = function ()  {pourLesX('b3')};
            document.getElementById('c1').onclick = function ()  {pourLesX('c1')};
            document.getElementById('c2').onclick = function ()  {pourLesX('c2')};
            document.getElementById('c3').onclick = function ()  {pourLesX('c3')};
            compteur--;
            testeO();
        }
        else if (y == "a2") {
            a2 = "o";
            document.getElementById('a1').onclick = function ()  {pourLesX('a1')};
            document.getElementById('a2').disabled = true;
            document.getElementById('a3').onclick = function ()  {pourLesX('a3')};
            document.getElementById('b1').onclick = function ()  {pourLesX('b1')};
            document.getElementById('b2').onclick = function ()  {pourLesX('b2')};
            document.getElementById('b3').onclick = function ()  {pourLesX('b3')};
            document.getElementById('c1').onclick = function ()  {pourLesX('c1')};
            document.getElementById('c2').onclick = function ()  {pourLesX('c2')};
            document.getElementById('c3').onclick = function ()  {pourLesX('c3')};
            compteur--;
            testeO();
        }
        else if (y == "a3") {
            a3 = "o";
            document.getElementById('a1').onclick = function ()  {pourLesX('a1')};
            document.getElementById('a2').onclick = function ()  {pourLesX('a2')};
            document.getElementById('a3').disabled = true;
            document.getElementById('b1').onclick = function ()  {pourLesX('b1')};
            document.getElementById('b2').onclick = function ()  {pourLesX('b2')};
            document.getElementById('b3').onclick = function ()  {pourLesX('b3')};
            document.getElementById('c1').onclick = function ()  {pourLesX('c1')};
            document.getElementById('c2').onclick = function ()  {pourLesX('c2')};
            document.getElementById('c3').onclick = function ()  {pourLesX('c3')};
            compteur--;
            testeO();
        }
        else if (y == "b1") {
            b1 = "o";
            document.getElementById('a1').onclick = function ()  {pourLesX('a1')};
            document.getElementById('a2').onclick = function ()  {pourLesX('a2')};
            document.getElementById('a3').onclick = function ()  {pourLesX('a3')};
            document.getElementById('b1').disabled = true;
            document.getElementById('b2').onclick = function ()  {pourLesX('b2')};
            document.getElementById('b3').onclick = function ()  {pourLesX('b3')};
            document.getElementById('c1').onclick = function ()  {pourLesX('c1')};
            document.getElementById('c2').onclick = function ()  {pourLesX('c2')};
            document.getElementById('c3').onclick = function ()  {pourLesX('c3')};
            compteur--;
            testeO();
        }
        else if (y == "b2") {
            b2 = "o";
            document.getElementById('a1').onclick = function ()  {pourLesX('a1')};
            document.getElementById('a2').onclick = function ()  {pourLesX('a2')};
            document.getElementById('a3').onclick = function ()  {pourLesX('a3')};
            document.getElementById('b1').onclick = function ()  {pourLesX('b1')};
            document.getElementById('b2').disabled = true;
            document.getElementById('b3').onclick = function ()  {pourLesX('b3')};
            document.getElementById('c1').onclick = function ()  {pourLesX('c1')};
            document.getElementById('c2').onclick = function ()  {pourLesX('c2')};
            document.getElementById('c3').onclick = function ()  {pourLesX('c3')};
            compteur--;
            testeO();
        }
        else if (y == "b3") {
            b3 = "o";
            document.getElementById('a1').onclick = function ()  {pourLesX('a1')};
            document.getElementById('a2').onclick = function ()  {pourLesX('a2')};
            document.getElementById('a3').onclick = function ()  {pourLesX('a3')};
            document.getElementById('b1').onclick = function ()  {pourLesX('b1')};
            document.getElementById('b2').onclick = function ()  {pourLesX('b2')};
            document.getElementById('b3').disabled = true;
            document.getElementById('c1').onclick = function ()  {pourLesX('c1')};
            document.getElementById('c2').onclick = function ()  {pourLesX('c2')};
            document.getElementById('c3').onclick = function ()  {pourLesX('c3')};
            compteur--;
            testeO();
        }
        else if (y == "c1") {
            c1 = "o";
            document.getElementById('a1').onclick = function ()  {pourLesX('a1')};
            document.getElementById('a2').onclick = function ()  {pourLesX('a2')};
            document.getElementById('a3').onclick = function ()  {pourLesX('a3')};
            document.getElementById('b1').onclick = function ()  {pourLesX('b1')};
            document.getElementById('b2').onclick = function ()  {pourLesX('b2')};
            document.getElementById('b3').onclick = function ()  {pourLesX('b3')};
            document.getElementById('c1').disabled = true;
            document.getElementById('c2').onclick = function ()  {pourLesX('c2')};
            document.getElementById('c3').onclick = function ()  {pourLesX('c3')};
            compteur--;
            testeO();
        }
        else if (y == "c2") {
            c2 = "o";
            document.getElementById('a1').onclick = function ()  {pourLesX('a1')};
            document.getElementById('a2').onclick = function ()  {pourLesX('a2')};
            document.getElementById('a3').onclick = function ()  {pourLesX('a3')};
            document.getElementById('b1').onclick = function ()  {pourLesX('b1')};
            document.getElementById('b2').onclick = function ()  {pourLesX('b2')};
            document.getElementById('b3').onclick = function ()  {pourLesX('b3')};
            document.getElementById('c1').onclick = function ()  {pourLesX('c1')};
            document.getElementById('c2').disabled = true;
            document.getElementById('c3').onclick = function ()  {pourLesX('c3')};
            compteur--;
            testeO();
        }
        else if (y == "c3") {
            c3 = "o";
            document.getElementById('a1').onclick = function ()  {pourLesX('a1')};
            document.getElementById('a2').onclick = function ()  {pourLesX('a2')};
            document.getElementById('a3').onclick = function ()  {pourLesX('a3')};
            document.getElementById('b1').onclick = function ()  {pourLesX('b1')};
            document.getElementById('b2').onclick = function ()  {pourLesX('b2')};
            document.getElementById('b3').onclick = function ()  {pourLesX('b3')};
            document.getElementById('c1').onclick = function ()  {pourLesX('c1')};
            document.getElementById('c2').onclick = function ()  {pourLesX('c2')};
            document.getElementById('c3').disabled = true;
            compteur--;
            testeO();
        }
    }
}



