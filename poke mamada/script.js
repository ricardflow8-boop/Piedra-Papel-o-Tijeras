let nombre = prompt("Ingresa tu nombre:")
let opciones = ["piedra", "papel", "tijeras"];
let bpiedra = document.getElementById("piedra");
let bpapel = document.getElementById("papel");
let btijeras = document.getElementById("tijeras");
function jugar(eleccion){
  let pc = opciones[Math.floor(Math.random() * 3)];
  let resultado = "";
  if (eleccion === pc){
    resultado = "➖Empate➖";
  } else if(
    (eleccion === "piedra" && pc === "tijeras")||
    (eleccion === "papel" && pc === "piedra")||
    (eleccion === "tijeras" && pc === "papel")
  ){
    resultado = "🏆​GANASTE🏆​";
  } else{
    resultado = "💔​P3Rd1$tE💔​";
  }
  document.getElementById("resultado").innerText =
  `Esperando...`
  document.getElementById("nombre").innerText =
    ``;
    document.getElementById("cmp").innerText =
    ``;
  setTimeout(() => {
    document.getElementById("nombre").innerText =
    `${nombre} elegiste: ${eleccion}`;
    document.getElementById("cmp").innerText =
    `Computadora eligio: ${pc}`;
    document.getElementById("resultado").innerText =
    `${resultado}`;
  },3000);
}

bpiedra.addEventListener("click", () => jugar("piedra"));
bpapel.addEventListener("click", () => jugar("papel"));
btijeras.addEventListener("click", () => jugar("tijeras"));