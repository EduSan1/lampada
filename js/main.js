"use strict";

const lampada = document.getElementById("lampada");
const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");
const piscar = document.getElementById("piscar");
let idPiscar = null;

const ligarLampada = () => {
  if (!lampada.src.includes("quebrada")) {
    lampada.src = "../img/ligada.jpg";
  }
};

const desligarLampada = () => {
  if (!lampada.src.includes("quebrada")) {
    lampada.src = "../img/desligada.jpg";
  }
};

const ligarDesligar = () => {
  if (lampada.src.includes("desligada")) {
    ligarLampada();
  } else {
    desligarLampada();
  }
};

const piscarLampada = () => {
  //setTimeout(ligarLampada, 1000) executa a ação uma vez
  if (!lampada.src.includes("quebrada")) {
    if (idPiscar == null) {
      idPiscar = setInterval(ligarDesligar, 300);
      piscar.textContent = "Parar";
    } else {
      clearInterval(idPiscar);
      piscar.textContent = "Piscar";
      idPiscar = null;
    }
  }
};

const quebrarLampada = () => {
  lampada.src = "../img/quebrada.jpg";
  piscar.textContent = "-";
};

ligar.addEventListener("click", ligarLampada);
desligar.addEventListener("click", desligarLampada);
lampada.addEventListener("dblclick", quebrarLampada);
piscar.addEventListener("click", piscarLampada);
