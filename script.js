window.addEventListener('resize', VerificaTamanho);
window.addEventListener('load', VerificaTamanho);

VerificaTamanho();

function VerificaTamanho(){
    if(window.innerWidth < 876){
        //CriaProdutosMobile();
    }else{
        //CriaProdutosDesktop();
    }
}

function CriaProdutosMobile(){
    document.getElementById("ProdutosDesktop").innerHTML = "";

}

function CriaProdutosDesktop(){
    document.getElementById("ProdutosMobile").innerHTML = "";
}


$(document).ready(function() {
    VerificaTamanho();
  });