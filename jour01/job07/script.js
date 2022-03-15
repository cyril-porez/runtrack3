function jourtravaille(date) {
    let dates = date.split('/');
    //console.log(date)
    const jourFeries = [
                            [
                                "01/01/2020", "13/04/2020", "01/05/2020", 
                                "8/05/2020", "21/05/2020", "01/06/2020",
                                "14/07/2020", "11/11/2020", "25/12/2020"
                            ],

                            ["15/08/2020", "01/11/2020",]
                        ];

    const mois = {
                    "01" : "janvier", "02" : "fevrier", "03" : "mars", "04" : "avril",
                    "05" : "mai", "06" : "juin", '07' : "juillet", '08' : 'aout', 
                    '09' : 'septembre', '10' : 'octobre', '11' : 'novembre', '12' : 'decembre'
                };

    
    let jour = dates[0]
    let Mois = dates[1]
    let annee = dates[2]

    /*for (let k = 0; k < mois.length; k++) {
        if (date[1] == mois[k]) {

            let Mois = mois[k]
            console.log(Mois);
        }
       
    }*/
    for (let i = 0; i < jourFeries.length; i++) {

        for (let j = 0; j < jourFeries[i].length; j++) {
            if (date == jourFeries[0][j]) {
                console.log("Oui," + jour +  Mois + annee + "est un jour travaillé");
                break;
            }
            else if (date == jourFeries[1][j]) {
                console.log("Non," + " " + jour + " " + Mois + " " + annee + " est un week-end");
                break;
            }
            else {
                console.log("Ce n'est pas un jour férié !")
                break;
            }
        }        
    }

}

jourtravaille("15/08/2020");