let chave = "d1cf5d6cfe511189bb4731722a87a0f1";

function colocarNaTela(dados) {
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".icone").src =
    "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
  document.querySelector(".umidade").innerHTML =
    "Umidade: " + dados.main.humidity + "%";
}

function cliqueiNoBotao() {
  let cidade = document.querySelector(".input-cidade").value;
  buscarCidade(cidade);
}

document.getElementById(".input-cidade").value;
addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    buscarCidade(cidade);
  }
});

async function buscarCidade(cidade) {
  let dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cidade +
      "&appid=d1cf5d6cfe511189bb4731722a87a0f1&units=metric"
  ).then((resposta) => resposta.json());

  colocarNaTela(dados);
  console.log(dados);
}
