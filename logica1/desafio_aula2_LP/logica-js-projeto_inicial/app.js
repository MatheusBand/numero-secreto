
//desafio5//
let nome = prompt('Me diga seu nome:');

alert(`Bem vindo(a) ${nome}`);

//desafio1//
let dia = prompt('Em qual dia da semana estamos?');

if(dia == 'Sabado'|dia == 'Domigo'){
    alert('Bom final de semana!');
}else{
    alert('Boa semana!');
}

//desafio2//
let num = prompt('Digite um número direi se é negativo ou positivo');

if(num < 0){
    alert(`Este nímero é negativo ${num}`);
}else if(num >= 0){
    alert(`Este número é positivo ${num}`);
}

let jogo = prompt('Gostaria de jogar?');

if(jogo == 'sim'){

    alert('Legal vamos começar');

//desafio3//

let ponto = 0;

let resp1 = 'banana';

let resp2 = 'amarela';

let resp3 = 'bananeira';

let pergunta1 = prompt('Qual a fruta favorita do macaco?');

if(pergunta1 == resp1){
    ponto = ponto + 50;
}

let pergunta2 = prompt('Qual a cor da banana?');

if(pergunta2 == resp2){
    ponto = ponto + 45;
}

let pergunta3 = prompt('Qual o nome da árvore q nasce a banana?');

if(pergunta3 == resp3){
    ponto = ponto + 45;
}

if(ponto >= 100){
    alert('Parabéns, você GANHOU!!');
}else{
    alert('Tente novamente para vencer');
}

}else{
    alert('Tudo bem');
}