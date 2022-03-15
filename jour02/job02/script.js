
document.addEventListener('DOMContentLoaded', (event) => {
    
    let button = document.getElementById("button");
    let article = document.getElementById("article");
    
    article.style.display = 'none'
    
    button.addEventListener('click', function citation(){
        if (article.style.display == 'block'){
            article.style.display = 'none'
        }
        else {
            article.style.display = "block"
        }
    })
})