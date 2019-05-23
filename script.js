let img = document.getElementById("imagem");
let racas = document.getElementById("racas");

function trocaImg(item){

    img.innerHTML = '<img src="' + item + '">';
    img.style.display = "block";

};