// VARIÁVEIS => Um espaço da memória do computador que guardamos algo (um numero, uma letra, um texto, uma imagem)
// FUNÇÃO => Um trecho de código que só é executado quando é chamado

const key = "0d67c279f85c5bdcba2bd4f32965f278";

function colocarDadosNaTela(dados) {
    // querySelector seleciona o campo do html, e o innerHTML apresenta o texto do HTML no site, pego em dados, na seleção name.
    // O "Math.floor" arredonda o número fracionário
    document.querySelector(".cidade").innerHTML = ` Tempo em ${dados.name}`
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = dados.main.humidity + " %";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

// o código roda efeito cascata, com o async, essa função roda mais rápido
async function buscarCidade(cidade) {
    // o "await" vai esperar o servidor responder - Crase em java é chamada de Template String
    // "&lang=pt_br" é para colocar os dados em português e "&units=metric" é pra colocar a umidade em Celcios
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())


    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    // seleciona o html com o queryselctor, e value, apresenta apenas o valor 
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}