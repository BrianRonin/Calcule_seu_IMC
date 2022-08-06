/*
IMC = peso / ( altura x altura )
⚠
⚪



*/
function a() {
  var form = document.querySelector("#form");

  y = $("#input-teste-4").keyup(function () {
    x = true;
    init();
  });

  x = $("#input-teste-5").keyup(function () {
    y = true;
    init();
  });

  x = false;
  y = false;

  function init() {
    if (x & y) {
      calcular();
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  function calcular() {
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");
    var a4 = document.getElementById("a4");
    var a5 = document.getElementById("a5");
    var a6 = document.getElementById("a6");

    var peso = $("#input-teste-4").val();

    var altura = $("#input-teste-5").val();

    var resultado = document.getElementById("resultado");

    imc = peso / (altura * altura);
    result = Object.assign(imc);
    console.log(result);
    result = Number(result);

    a1.style = `border-style: none;`;
    a2.style = `border-style: none;`;
    a3.style = `border-style: none;`;
    a4.style = `border-style: none;`;
    a5.style = `border-style: none;`;
    a6.style = `border-style: none;`;

    if (result < 0.1 || result > 100000 || false || NaN) {
      resultado.innerHTML = `IMC:`;
    } else if (result < 18.5) {
      resultado.innerHTML = `IMC: ${result.toFixed(2)}`;
      a1.style = `border: 5px;
      border-style: solid;
      border-color: white;
      border-radius: 10%;`;
    } else if (result <= 24.9) {
      resultado.innerHTML = `IMC: ${result.toFixed(2)}`;
      a2.style = `border: 5px;
      border-style: solid;
      border-color: white;
      border-radius: 10%;`;
    } else if (result <= 29.9) {
      resultado.innerHTML = `IMC: ${result.toFixed(2)}`;
      a3.style = `border: 5px;
      border-style: solid;
      border-color: white;
      border-radius: 10%;`;
    } else if (result <= 34.9) {
      resultado.innerHTML = `IMC: ${result.toFixed(2)}`;
      a4.style = `border: 5px;
      border-style: solid;
      border-color: white;
      border-radius: 10%;`;
    } else if (result >= 39.9) {
      resultado.innerHTML = `IMC: ${result.toFixed(2)}`;
      a5.style = `border: 5px;
      border-style: solid;
      border-color: white;
      border-radius: 10%;`;
    } else if (result < 39.9) {
      resultado.innerHTML = `IMC: ${result.toFixed(2)}`;
      a6.style = `border: 5px;
      border-style: solid;
      border-color: white;
      border-radius: 10%;`;
    } else {
      resultado.innerHTML = `IMC: ERROR`;
    }

    result = 0;

    console.log(result);

    console.log(imc);
  }
}
a();
