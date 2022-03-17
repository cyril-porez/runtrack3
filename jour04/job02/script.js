    var str = '{"nom" : "La_Plateforme_", "address" : "8 rue d hozier", "city" : "Marseille", "nb_staff" : "11", "creation" : "2019"}'
    
    
    function jsonValueKey(str, key) {
        //JSON.parse() analyse une chaîne de caractères JSON et construit la valeur JavaScript ou l'objet décrit par cette chaîne.
        var obj = JSON.parse(str)
        return obj[key]
    }
    
    console.log(jsonValueKey(str, 'address'))


