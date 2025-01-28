let listaNumSorteados = [];// listas começa pelo indice 0//
let numLimte = 50;
let numSecreto = numAleatorio();
let tentativas = 1;

function exibirTexto(tag, Texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = Texto;
    responsiveVoice.speak(Texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function mensagemInicial() {
    exibirTexto('h1', 'Jogo do Número Secreto');
exibirTexto('p', 'Escolha um número entre 1 e 50');
}

mensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;

    console.log(chute == numSecreto);

    if(chute==numSecreto){

        exibirTexto('h1', 'Acertouu');
        
        let palavraTentativa= tentativas > 1 ? 'Tentativas' : 'Tentativa';

        let mensagemtentativas=`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

        exibirTexto('p', mensagemtentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numSecreto){
            exibirTexto('p', 'O número secreto é menor');
        }else{
            exibirTexto('p', 'O número secreto é maior');
        }

        tentativas++
        limparCampo()
    }
}

function numAleatorio() {
    let quatElementLista = listaNumSorteados.length;

    if(quatElementLista == numLimte){
        listaNumSorteados =[];
    }

   let numEscolhido = parseInt(Math.random() * numLimte + 1);
   if(listaNumSorteados.includes(numEscolhido)){
    return numAleatorio();
   }else{
    listaNumSorteados.push(numEscolhido);
    console.log(listaNumSorteados);
    return numEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(params) {
    numSecreto = numAleatorio();
    limparCampo();
    tentativas=1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}