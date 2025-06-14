// Datos de cada planta
/*
const plantas = {
  tomate: {
    frecuencia: 12,
    hora: "06:00",
    descripcion: "🌱 El tomate necesita riego constante cada 12 horas. Riega temprano en la mañana y al atardecer para evitar la evaporación.",
  },
  cactus: {
    frecuencia: 72,
    hora: "08:00",
    descripcion: "🌵 El cactus requiere muy poca agua. Riega cada 3 días (72h) y asegúrate de que el suelo esté seco antes de regar de nuevo.",
  },
  albahaca: {
    frecuencia: 24,
    hora: "07:00",
    descripcion: "🌿 La albahaca necesita riego diario, idealmente por la mañana. No mojes las hojas para evitar hongos.",
  },
};

let calendar;

document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');
  calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'es',
    height: 'auto', 
    events: []
  });
  calendar.render();
});

function mostrarDescripcion() {
  const planta = document.getElementById('plant').value;
  const descripcionDiv = document.getElementById('descripcion');

  if (plantas[planta]) {
    descripcionDiv.innerText = plantas[planta].descripcion;
    descripcionDiv.style.display = 'block';
  } else {
    descripcionDiv.style.display = 'none';
  }
}

function generarCalendario() {
  const planta = document.getElementById('plant').value;
  const startDateStr = document.getElementById('start').value;
  const duracion = parseInt(document.getElementById('duracion').value);

  if (!planta || !startDateStr || isNaN(duracion)) {
    alert("Por favor, elige una planta, fecha de inicio y duración válida.");
    return;
  }

  const plan = plantas[planta];
  const frecuenciaHoras = plan.frecuencia;
  const horaRiego = plan.hora;
  const eventos = 10;

  const eventosRiego = [];

  const [anio, mes, dia] = startDateStr.split("-");
  const [hora, minuto] = horaRiego.split(":");
  const startDate = new Date(anio, mes - 1, dia, hora, minuto);

  for (let i = 0; i < eventos; i++) {
    const inicio = new Date(startDate.getTime() + i * frecuenciaHoras * 60 * 60 * 1000);
    const fin = new Date(inicio.getTime() + duracion * 60000);

    eventosRiego.push({
      title: `Riego ${planta} (${duracion} min)`,
      start: inicio.toISOString(),
      end: fin.toISOString()
    });
  }

  calendar.removeAllEvents();
  eventosRiego.forEach(evento => calendar.addEvent(evento));
}

*/

const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
  nav.classList.add('visible');

})

cerrar.addEventListener('click', () => {
  nav.classList.remove('visible');
})