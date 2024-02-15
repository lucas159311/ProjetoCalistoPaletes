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

$(document).ready(function() {
    VerificaTamanho();
  });