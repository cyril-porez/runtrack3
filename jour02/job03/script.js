document.addEventListener('DOMContentLoaded', (event) => {
    let button = document.getElementById('button')
    let compteur = document.getElementById('compteur')

    button.addEventListener('click', function addone() {
        var compte = compteur.innerHTML;        
        compte++;
        compteur.innerHTML = compte;
    })
})

