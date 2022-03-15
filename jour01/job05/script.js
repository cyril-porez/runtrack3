let monDiv = document.querySelector('.test')
function afficherjourssemaines() {
    const jourssemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
    for (let i = 0; i < jourssemaines.length; i++) {
       monDiv.innerHTML+=jourssemaines[i]+'</br>'
    }
}

afficherjourssemaines()
