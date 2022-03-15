document.addEventListener('DOMContentLoaded', (event) => {
    var Code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
    var codePosition = 0


    document.addEventListener('keydown', (event) => {
        var key = event.keyCode
        var valueKey = Code[codePosition]
       
        if (key == valueKey) {
            console.log("b")
            codePosition++
            if (codePosition == Code.length) {
                document.write('<link rel="stylesheet" href="style.css"></link>')
                codePosition = 0
            }
        }
        else {
            codePosition = 0
        }
    })

})