function verifieNombrePremier (nbr) {
    // verifie que si < 2 n'est pas premier
    if (nbr < 2) {
        return false
    } 

    // Loop from 2 to square root of n
    for (let i = 2; i <= Math.sqrt(nbr); i++) 
        // i diviseur de na pas premier
        if (nbr % i == 0) return false;

    return true;
}

//console.log(verifieNombrePremier(3))

function sommenombrepremiers(nbr1, nbr2) {
    var nbr1 = nbr1
    var nbr2 = nbr2
    var add = 0
   
    if (verifieNombrePremier(nbr1) == true && verifieNombrePremier(nbr2) == true) {
        return nbr1 + nbr2
    }
    else {
        return false
    }
}

console.log(sommenombrepremiers(4, 4))