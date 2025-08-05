let listaAmigos = [];
//agregar amigos
function agregarAmigo() {
  const input = document.getElementById("nombreInput");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Agrega un nombre válido");
    return;
  }

  listaAmigos.push(nombre);
  console.log("Lista actual de amigos:", listaAmigos);
  mostrarAmigos();
  input.value = "";
}

function mostrarAmigos() {
  const listaHTML = document.getElementById("listaNombres");
  listaHTML.innerHTML = "";

  for (let i = 0; i < listaAmigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = listaAmigos[i];
    listaHTML.appendChild(li);
  }
}
//sorteo de amigo
function seleccionarAmigoAleatorio() {
  if (listaAmigos.length === 0) {
    alert("La lista de amigos está vacía.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const nombreAleatorio = listaAmigos[indiceAleatorio];

  document.getElementById("amigoSeleccionado").textContent =
    "El amigo seleccionado es: " + nombreAleatorio;
}
//volver a empezar el juego
function reiniciarJuego() {
  listaAmigos = []; 
  document.getElementById("listaNombres").innerHTML = ""; 
  document.getElementById("amigoSeleccionado").textContent = ""; 
  document.getElementById("nombreInput").value = ""; 

  console.log("Juego reiniciado");
}
