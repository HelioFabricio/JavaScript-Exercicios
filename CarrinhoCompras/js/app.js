let valorTotalCarrinho;
limpar();
function adicionar(){
    // seleciona todas informações que serão utilizadas na página
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitarioProduto = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    
    if (quantidade <= 0){
        alert("Erro, insira uma quantidade válida!");
        quantidade = document.getElementById("quantidade").value = 0;
    }else{
        let preco = quantidade * valorUnitarioProduto;

        // seleciona lista de produtos
        let carrinho = document.getElementById("lista-produtos");

        // adiciona carrinho mantendo produto anterior
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
            </section>`;

        // soma valor total 
        valorTotalCarrinho = valorTotalCarrinho + preco
        let campoValorTotal = document.getElementById("valor-total");
        campoValorTotal.textContent = `${valorTotalCarrinho}`;
        quantidade = document.getElementById("quantidade").value = 0;
    }

}

function limpar(){
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0";
    valorTotalCarrinho = 0;
}