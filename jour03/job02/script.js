jQuery(document).ready(function() {
    
    $("#button").click(function(){
        var divsMelangees = $('#melangees').children();
        while (divsMelangees.length) {
            $("#melangees").append(divsMelangees.splice(Math.floor(Math.random() * divsMelangees.length), 1)[0]);
        }
    })
})