document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.getElementById('button');
    let text = document.createElement('p');
    let main = document.querySelector('main');
  
    button.addEventListener("click", (event) => {
      fetch("expression.txt")
        .then((response) => response.text())
        .then((txt) => {
          text.innerHTML = txt;
          main.append(text);
        })
        .catch((error) => console.log(error));
    });
  });