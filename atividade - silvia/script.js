document.getElementById("aumentar").addEventListener("click", function(){
    mudarTamanho(1);
});

document.getElementById("diminuir").addEventListener("click", function(){
    mudarTamanho(-1);
});

function mudarTamanho(step){
    var currentFontSize = parseFloat(getComputedStyle(document.body).fontSize);
    var novoTamanho = currentFontSize + step;
    document.body.style.fontSize = novoTamanho + "px";
}