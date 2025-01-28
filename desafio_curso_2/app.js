let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole(){
    console.log('O botão foi clicado');
}

function verificarAlerta(){
    alert('Eu amo JS');
}

function verificarPrompt(){
    let cidade = prompt('Me diga uma cidade:');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function verificarSoma(){
    alert('Me diga 2 números');
     let Num1 = parseInt(prompt('Primeiro número:'));
    let Num2 = parseInt(prompt('Segundo número:'));

    let soma = Num1 + Num2
 

    alert(`O resultado da soma desses números é: ${soma}`)
}