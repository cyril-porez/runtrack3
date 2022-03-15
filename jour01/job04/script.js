function bisextile(annee) {
        
        if ((annee % 4 == 0 && annee % 100 != 0) ||  (annee % 400 == 0 && annee % 100 == 0)) {
            
    
                console.log('passe')
                return console.log(true)
        }
        else {
            return console.log(false)
        }
}

bisextile(1900)