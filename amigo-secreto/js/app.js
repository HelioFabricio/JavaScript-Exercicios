let amigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");

    if(nomeAmigo.value == ""){
        alert("Insira um nome válido!");
    } else if(verificarNomeJaExistente(nomeAmigo.value)){
        alert("Insira um nome que não esteja na lista!")
        nomeAmigo.value = "";
    } else if (!verificarNomeJaExistente(nomeAmigo.value)){
        amigos.push (nomeAmigo.value);
        atualizarLista();
        nomeAmigo.value = "";
    }
}

function sortear(){
    
    if(verificarQuantidadePart()){
        embaralhar(amigos);
        let sorteioLista = document.getElementById("lista-sorteio");

        for(let i = 0; i < amigos.length; i++){

            if(i != amigos.length -1){
                sorteioLista.innerHTML += amigos[i] + " --> " + amigos[i+1] + "</br>";
            } else{
                sorteioLista.innerHTML += amigos[i] + " --> " + amigos[0] + "</br>";
            }

        }
    } else{
        alert("Insira ao menos 4 participantes!");
    }
}

function excluirNome(i){
    amigos.splice(i, 1);
    limparLista();
    limparSorteio();
    atualizarLista();
}

function limparSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function limparLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
}
// atualiza lista e adiona evento de click com function
function atualizarLista(){
    let lista = document.getElementById("lista-amigos");
    limparLista();

    // percorre for loop e executa laço
    for(let i = 0; i < amigos.length; i++){
        // cria paragrafo atribui amigos[i] 
        let paragrafo = document.createElement("p");
        paragrafo.textContent = amigos[i];

        // adiciona clicavel
        paragrafo.addEventListener("click", function(){ excluirNome(i)});

        // adiciona p a lista
        lista.appendChild(paragrafo);
    }

}

function verificarQuantidadePart(){
    let boolean = false

    if(amigos.length >= 4){
        return boolean = true;
    }
    return boolean;
    
}

//  ou usar amigos.includes
function verificarNomeJaExistente(nome){
    let boolean = false;
    for(let i = 0; i < amigos.length; i++){
        if(nome == amigos[i]){
            boolean = true;
        }
    }
    return boolean;
}

function reiniciar(){
    document.getElementById("lista-sorteio").textContent = "";
    document.getElementById("lista-amigos").textContent = "";
    amigos = [];

}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

