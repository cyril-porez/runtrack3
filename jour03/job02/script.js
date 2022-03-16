jQuery(document).ready(function() {
    
    
    $("#button").click(function(){
        //.children retourne tous les enfantans direct de élements sélectionnés dans ce cas #melangees
        var divMelangees = $('#melangees').children();
        while (divMelangees.length) {
            //.append permet d'inserer le contenu specifié
            //.splice permet de modifier le contenu du tableau
            //Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre pour math.random
            //Math.random() renvoie un nombre flottant pseudo-aléatoire Ce nombre peut ensuite être multiplié afin de couvrir un autre intervalle.
            $('#melangees').append(divMelangees.splice(Math.floor(Math.random() * divMelangees.length), 1)[0]);
           
        }
        $("#arc1").click(function(){
            $("#arc1").detach().append("#rangees")
        })
        $("#arc2").click(function() {
            $("#arc2").detach().append("#rangees")
        })
        $("#arc3").click(function() {
            $("#arc3").detach().append("#rangees")
        })
        $("#arc4").click(function() {
            $("#arc4").detach().append("#rangees")
        })
        $("#arc5").click(function() {
            $("#arc5").detach().append("#rangees")
        })
        $("#arc6").click(function() {
            $("#arc6").detach().append("#rangees")
        })
    })

   

   
})