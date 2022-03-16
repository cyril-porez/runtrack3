$(document).ready(function(){
    $("p").hide()
    $('#button').click( function() {
        //toggle est une fonction qui permet de cacher et afficher
        $("p").show()
    })
    $('#button2').click( function() {
        $("html").hide()
    })
})