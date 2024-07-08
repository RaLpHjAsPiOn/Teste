let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

console.log (numeroSecreto);

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak (texto, 'Brazilian Portuguese Female', {rate : 1.2} );
}

function exibirMensagemInicial (){
    exibirTextoNaTela ('h1', 'Bem Vindo ao Jogo do Número Secreto!');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial ();

function verificarChute () {
    let chute = document.querySelector ('input') . value;

    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1', 'Acertooouuu!!!')
        let palaavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o Número Secreto com ${tentativas} ${palaavraTentativa}!`;
        exibirTextoNaTela ("p", mensagemTentativas);  
        document.getElementById ('reiniciar').removeAttribute ('disabled'); 
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('h1', 'Errrooouuu!');
            exibirTextoNaTela ('p', 'O Número Secreto é Menor');
        } else {
            exibirTextoNaTela ('h1', 'Errrooouuu!');
            exibirTextoNaTela ('p', 'O Número Secreto é Maior');
        }
        tentativas ++;
        limparCampo ();
    }
    
}

function gerarNumeroAleatorio () {
   return parseInt (Math.random () * 10 + 1 );
}

function limparCampo (){
    chute = document.querySelector ('input')
    chute.value = '';
}
function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo ();
    tentativas = 1;
    exibirMensagemInicial ();
    document.getElementById ('reiniciar') . setAttribute ('disabled', true);
}