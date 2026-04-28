const mensajes = [
  "💖 Buenos días, mi amor. Hoy será un día hermoso.",
  "✨ Estoy muy orgulloso de ti.",
  "🌸 Sigue adelante, puedes con todo.",
  "💕 Nunca olvides lo especial que eres.",
  "💫 Eres increíble.",
  "🌷 Hoy es un nuevo día para brillar.",
  "💪 Sé que lograrás todo lo que te propongas.",
  "🌸 Confía en ti, tienes una fuerza hermosa.",
  "💕 Eres más capaz de lo que imaginas.",
  "✨ Nunca dejes de creer en tu magia.",
  "🌹 Cada esfuerzo tuyo vale muchísimo.",
  "💖 Tu dedicación te llevará muy lejos.",
  "🌼 Hoy también puedes sorprenderte a ti misma.",
  "💫 Sigue creciendo, lo estás haciendo increíble.",
  "🌸 Tu disciplina construye tus sueños.",
  "💕 Incluso en días difíciles sigues siendo maravillosa.",
  "✨ Eres fuerte, inteligente y especial.",
  "🌷 No te rindas, vas mucho mejor de lo que crees.",
  "💪 Tu esfuerzo algún día será tu mayor orgullo.",
  "🌹 Mereces todo lo bonito que estás construyendo.",
  "💖 Recuerda descansar, también forma parte del progreso.",
  "🌸 Cada día estás más cerca de tus metas.",
  "✨ Tu futuro será brillante porque tú también lo eres.",
  "💕 Sigue luchando por tus sueños, valen totalmente la pena.",
  "🌼 Hoy también cuentas con todo mi apoyo.",
  "💫 Eres una inspiración incluso en los días difíciles.",
  "🌷 Paso a paso estás logrando cosas grandes.",
  "💖 Nunca olvides lo maravillosa que eres.",
  "✨ Hoy puede ser un gran día para ti.",
  "💕 Siempre habrá razones para seguir adelante.",
  "🌹 Estoy feliz de verte crecer cada día.",
  "💖 Eres más fuerte de lo que imaginas.",
  "🌸 Tu esfuerzo está construyendo algo hermoso.",
  "✨ Confía en tu proceso.",
  "💕 Estoy aquí, creyendo en ti siempre.",
  "🌷 Lo estás haciendo mejor de lo que piensas.",
  "💫 Tus sueños sí pueden cumplirse.",
  "🌼 Hoy da lo mejor de ti, como siempre.",
  "💖 Tu luz no pasa desapercibida.",
  "✨ Sigue siendo esa persona increíble que eres."
];
const mensajesEspeciales = [
  "💌 Te extraño mucho, pero me hace feliz saber que estás luchando por tus sueños.",
  "💕 Nunca olvides cuánto te quiero y lo importante que eres para mí.",
  "🌸 Eres mi pensamiento favorito, incluso en los días más ocupados.",
  "✨ Estoy orgulloso de cada paso que das, incluso de los más pequeños.",
  "💖 Aunque no siempre esté cerca, mi apoyo siempre estará contigo.",
  "🌷 Verte crecer y esforzarte me hace admirarte aún más.",
  "💫 Eres una de las cosas más bonitas que tengo en mi vida.",
  "💕 Espero que nunca dudes de lo increíble que eres.",
  "🌹 Incluso en la distancia, siempre estás presente en mi corazón.",
  "💌 Sigue adelante, mi amor. Lo estás haciendo hermoso.",
  "✨ Cuando dudes de ti, recuerda que yo creo muchísimo en ti.",
  "🌸 Tu felicidad siempre será importante para mí.",
  "💖 Estoy aquí, apoyándote incluso en silencio.",
  "🌼 No importa lo difícil que sea el día, sigues siendo maravillosa.",
  "💕 Eres mi persona favorita.",
  "💫 Nunca olvides que mereces cosas hermosas.",
  "🌷 Me encanta la persona en la que te estás convirtiendo.",
  "💌 Si hoy se pone difícil, recuerda que eres mucho más fuerte.",
  "✨ Te admiro más de lo que imaginas.",
  "🌹 Eres una mezcla hermosa de fuerza, ternura y valentía.",
  "💖 Siempre habrá un motivo para sonreír, y muchas veces eres tú.",
  "🌸 Gracias por existir y ser tan especial.",
  "💕 Verte feliz siempre será una de mis mayores alegrías.",
  "💫 Pase lo que pase, nunca olvides lo valiosa que eres.",
  "🌼 Te quiero más de lo que las palabras pueden explicar.",
  "💌 Incluso en tus días difíciles, sigues siendo increíble.",
  "✨ Tu esfuerzo vale la pena, y tú también.",
  "🌷 Estoy orgulloso de ti hoy, mañana y siempre.",
  "💕 Nunca dejes de ser esa persona tan maravillosa.",
  "💖 Eres una parte muy bonita de mi vida."
];
function actualizarMensaje() {
  const mensaje = document.getElementById("mensajeRomantico");
  if (mensaje) {
    mensaje.innerText = mensajes[Math.floor(Math.random() * mensajes.length)];
  }
}

function guardarNombre() {
  const nombre = document.getElementById("nombreUsuario").value.trim();
  if (!nombre) return;

  localStorage.setItem("nombreTalhiana", nombre);
  alert(`💖 Bienvenida ${nombre}`);
}

function cambiarTema() {
  const tema = document.getElementById("tema").value;
  document.body.className = tema;
  localStorage.setItem("temaTalhiana", tema);
}

function agregarRutina() {
  const hora = document.getElementById("hora").value;
  const actividad = document.getElementById("actividad").value.trim();
  const tipo = document.getElementById("tipo").value;

  if (!hora || !actividad) return;

  const li = document.createElement("li");
  li.innerText = `${hora} - ${tipo} - ${actividad}`;

  document.getElementById("listaRutina").appendChild(li);

  guardarRutinas();
  document.getElementById("actividad").value = "";
}

function guardarRutinas() {
  const rutinas = Array.from(
    document.querySelectorAll("#listaRutina li")
  ).map(li => li.innerText);

  localStorage.setItem("rutinasTalhiana", JSON.stringify(rutinas));
}

function cargarRutinas() {
  const rutinas = JSON.parse(localStorage.getItem("rutinasTalhiana")) || [];
  const lista = document.getElementById("listaRutina");

  lista.innerHTML = "";

  rutinas.forEach(rutina => {
    const li = document.createElement("li");
    li.innerText = rutina;
    lista.appendChild(li);
  });
}

if ("Notification" in window) {
  Notification.requestPermission();
}

let alarma;

function activarAlarma() {
  const horaAlarma = document.getElementById("horaAlarma").value;

  if (!horaAlarma) return;

  clearInterval(alarma);

  alarma = setInterval(() => {
    const horaActual = new Date().toTimeString().slice(0, 5);

    if (horaActual === horaAlarma) {
      if (Notification.permission === "granted") {
        new Notification("💖 Talhiana", {
          body: "Es hora de tu actividad mi amor ✨"
        });
      }

      playMusic();
      alert("💖 Es hora de tu actividad ✨");

      clearInterval(alarma);
    }
  }, 1000);
}

function playMusic() {
  document.getElementById("musica").play();
}

function pauseMusic() {
  document.getElementById("musica").pause();
}

function mostrarMensajeEspecial() {
  document.getElementById("mensajeEspecial").innerText =
    mensajesEspeciales[
      Math.floor(Math.random() * mensajesEspeciales.length)
    ];
}

window.addEventListener("DOMContentLoaded", () => {
  actualizarMensaje();
  cargarRutinas();

  document.body.className =
    localStorage.getItem("temaTalhiana") || "rosa";

  setInterval(actualizarMensaje, 5000);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
});