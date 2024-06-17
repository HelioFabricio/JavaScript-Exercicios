let quantJogosAlugados = 1;

function alterarStatus(id){
    let jogoEscolhido = document.getElementById(`game-${id}`);
    let botao = jogoEscolhido.querySelector(".dashboard__item__button");
    let img = jogoEscolhido.querySelector(".dashboard__item__img");
    let nome = jogoEscolhido.querySelector(".dashboard__item__name");

    // Retira o jogo da loja
    if(!botao.classList.contains("dashboard__item__button--return")){
        botao.classList.add("dashboard__item__button--return");
        img.classList.add("dashboard__item__img--rented");
        botao.textContent = "Devolver";

        quantJogosAlugados++;
    } else{ // Adiciona o jogo a loja
        let resultado = confirm("Tem certeza que deseja devolver o jogo?")
        
        if (resultado == true){    
        botao.classList.remove("dashboard__item__button--return");
        img.classList.remove("dashboard__item__img--rented");
        botao.textContent = "Alugar";
        quantJogosAlugados--;
        }
    }
    mostrarJogosAlugadosTotal();
}

function mostrarJogosAlugadosTotal(){
    console.log("A quantidade de jogos alugados foi de: "+ quantJogosAlugados);
}