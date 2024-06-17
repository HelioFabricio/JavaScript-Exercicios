function comprar(){
    let tipoIngressoUser = document.getElementById("tipo-ingresso").value;
    let qtdIngressoUser = parseInt(document.getElementById("qtd").value);

    if (qtdIngressoUser > 0){
        if(tipoIngressoUser == "pista"){
            comprarPista(qtdIngressoUser);
        }else if(tipoIngressoUser == "superior"){
            comprarCadeiraSup(qtdIngressoUser);
        } else if(tipoIngressoUser == "inferior"){
            comprarCadeiraInf(qtdIngressoUser);
        }
    } else {
        alert("Insira um valor Válido!")
    }
}

function comprarPista(qtdIngressoUser){
    let qtdPistaTotal = parseInt(document.getElementById("qtd-pista").textContent);

    if(qtdIngressoUser <= qtdPistaTotal){
        qtdPistaTotal = qtdPistaTotal - qtdIngressoUser;
        document.getElementById("qtd-pista").textContent = qtdPistaTotal;

        alert("Compra realizada com Sucesso!")
        limpaCampoQtd();
    } else{
        alert("Insira um valor menor!")
    }
}

function comprarCadeiraSup(qtdIngressoUser){
    let qtdCadeiraSupTotal = parseInt(document.getElementById("qtd-superior").textContent);
    
    if(qtdIngressoUser <= qtdCadeiraSupTotal){
        qtdCadeiraSupTotal = qtdCadeiraSupTotal - qtdIngressoUser;
        document.getElementById("qtd-superior").textContent = qtdCadeiraSupTotal;

        alert("Compra realizada com Sucesso!")
        limpaCampoQtd();
    } else{
        alert("Insira um valor menor!");
    }
}

function comprarCadeiraInf(qtdIngressoUser){
    let qtdCadeiraInferiorTotal = parseInt(document.getElementById("qtd-inferior").textContent);

    if(qtdIngressoUser <= qtdCadeiraInferiorTotal){
        qtdCadeiraInferiorTotal = qtdCadeiraInferiorTotal - qtdIngressoUser;
        document.getElementById("qtd-inferior").textContent = qtdCadeiraInferiorTotal;

        alert("Compra realizada com Sucesso!")
        limpaCampoQtd();
    }else{
        alert("Insira um valor menor!");
    }
}

function limpaCampoQtd(){
    document.getElementById("qtd").value = "";
}