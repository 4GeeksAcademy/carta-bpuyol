const palos = ["♠", "♥", "♣", "♦"];
const valores = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

function obtenerCartaAleatoria() {
  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

  return { palo: paloAleatorio, valor: valorAleatorio };
}

function generarCarta() {
  const cartaAleatoria = obtenerCartaAleatoria();
  const cartaElement = document.getElementById("cartaAleatoria");
  cartaElement.innerHTML = `
        <div class="esquina-superior-izquierda">${cartaAleatoria.palo}</div>
        <div class="numero">${cartaAleatoria.valor}</div>
        <div class="esquina-inferior-derecha">${cartaAleatoria.palo}</div>
    `;
}

generarCarta();
