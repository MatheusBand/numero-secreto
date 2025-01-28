// alert serve para escrever mensagens //

alert('Boas vindas ao jogo do Número Secreto');
let numMaximo = 10;
// let armazena uma informação// 
// parsenInt() limita nomente números inteiros e Math.radom() *n +1 gera um número aleatorio//
let numSecreto = parseInt(Math.random()*numMaximo + 1);
//prompt serve para interagir com o usuario//


let chute;

let tentativas = 1;

// console.log pode ser visto na pagina do site como teste ora ver se o codigo esta funcionando//
console.log(numSecreto);

//while = enquanto, para q se repita o codigo//

while(chute != numSecreto){
    chute = prompt(`Escolha um númro de 1 a ${numMaximo}`);

    // if serve para comparação//
    if (chute == numSecreto){
    
        break;
        
    }else{
        if(chute > numSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas++ = tentativas = tentativas + 1;//
        tentativas++
    }
}

 //operador ternario//
let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;

alert(`Parabéns esse era exatamente o número secreto ${chute}, você acertou com ${tentativas} ${palavraTentativa}`);
    //if(tentativas>1){
    //    alert(`Parabéns esse era exatamente o número secreto ${chute}, você acertou com ${tentativas} tentativas`);
    //}else{
    //    alert(`Parabéns esse era exatamente o número secreto ${chute}, você acertou com uma tentativa`);
    //}