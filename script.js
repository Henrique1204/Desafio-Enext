let img = document.getElementById("imagem");
let caixaDaLegenda = document.getElementById("caixaDaLegenda");
let legenda = document.getElementById("legenda");
let novoNome = document.getElementById("nomeNovo");
let salvos = document.getElementById("salvos");
let raca;


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

document.getElementById("salvar").addEventListener("click", function(){
    
    let nomeCachorro = legenda.textContent;
    let select = document.getElementById("racas");
    let option = select.children[select.selectedIndex];
    raca = option.textContent;
    let data = new Date().toUTCString();

    if((img.src != "") && (legenda.textContent != "")){

        let itemSalvo = document.createElement("li");
        salvos.appendChild(itemSalvo);
        itemSalvo.textContent = "Nome: " + nomeCachorro + " | " + "Raça: " + raca + " | " + "Data: " + data; 
        itemSalvo.style.color = legenda.style.color;
        itemSalvo.style.fontFamily = legenda.style.fontFamily;

        alert("Cachorro salvo com sucesso");
    }
    else{
        alert("Escolha a raça e um nome para o cachorro");
    }

    
});
