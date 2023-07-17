// VARIÁVEIS => Um espaço da memória do computador que guardamos algo (um numero, uma letra, um texto, uma imagem)
// FUNÇÃO => Um trecho de código que só é executado quando é chamado

const key = "0d67c279f85c5bdcba2bd4f32965f278";

     // o código roda efeito cascata, com o async, essa função roda mais rápido
async function buscarCidade(cidade) {
    // o "await" vai esperar o servidor responder - Crase em java é chamada de Template String
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`).then(resposta => resposta.json())
    console.log(dados)
}

function cliqueiNoBotao() {
    // seleciona o html com o queryselctor, e value, apresenta apenas o valor 
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}