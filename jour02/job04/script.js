document.addEventListener('DOMContentLoaded', (event) => {

    let keylogger = document.getElementById("keylogger");
    let alltime = document.body

    alltime.addEventListener('keydown', (event) => {
        
        let alphabet = event.key;
        if (keylogger.focus) {   
            if (alphabet <=  "z" && alphabet >= "a") {             
                keylogger.value = keylogger.value + alphabet; 
            }
            else {
               alert('Met des lettres minuscules')
            }
        }
        else {
            keylogger.value = alphabet;
        }
    })
})

