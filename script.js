let img = document.getElementById("imagem");
let caixaDaLegenda = document.getElementById("caixaDaLegenda");
let legenda = document.getElementById("legenda");
let novoNome = document.getElementById("nomeNovo");

function trocaImg(item){

    img.setAttribute("src", item);
    img.style.display = "block";

};

function trocaCor(item){

    legenda.style.color = item;

};

function trocaFonte(item){

    legenda.style.fontFamily = item;

};

document.getElementById("pronto").addEventListener("click", function(){

    if(img.src != ""){
        caixaDaLegenda.style.display = "block";
        legenda.textContent = novoNome.value;
        novoNome.value = "";
    }

});

document.getElementById("limpar").addEventListener("click", function(){

    img.src = "";
    legenda.textContent = "";
    caixaDaLegenda.style.display = "none";

});