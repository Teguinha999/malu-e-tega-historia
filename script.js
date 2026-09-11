// ===============================
// CONFIGURAÇÃO RÁPIDA
// ===============================
// Coloque sua música em assets/musica/ e escreva o nome do arquivo abaixo.
// Exemplo: "nossa-musica.mp3"
const MUSIC_FILE = "nossa-musica.mp3";

// Data do reencontro: 01/09/2026.
// O contador começa exatamente à 00:00 desse dia.
const START_DATE = new Date("2026-09-01T00:00:00");

const audio = document.getElementById("audio");
const musicButton = document.getElementById("musicButton");
const musicIcon = document.getElementById("musicIcon");
const playerPlay = document.getElementById("playerPlay");

audio.src = `assets/musica/${MUSIC_FILE}`;

function toggleMusic() {
  if (audio.paused) {
    audio.play().then(() => {
      musicIcon.textContent = "❚❚";
      playerPlay.textContent = "❚❚";
    }).catch(() => {
      alert("O navegador bloqueou a reprodução automática. Clique novamente para tocar.");
    });
  } else {
    audio.pause();
    musicIcon.textContent = "▶";
    playerPlay.textContent = "▶";
  }
}
musicButton.addEventListener("click", toggleMusic);
playerPlay.addEventListener("click", toggleMusic);

audio.addEventListener("ended", () => {
  musicIcon.textContent = "▶";
  playerPlay.textContent = "▶";
});

// Carregamento das fotos do site
// Os espaços com data-photo recebem automaticamente a imagem correspondente.
document.querySelectorAll("[data-photo]").forEach((placeholder) => {
  const fileName = placeholder.dataset.photo;
  const img = document.createElement("img");
  img.src = `assets/fotos/${fileName}`;
  img.alt = "Foto da nossa história";
  img.loading = "lazy";
  img.addEventListener("error", () => {
    img.remove();
  });
  placeholder.replaceChildren(img);
  placeholder.classList.add("has-photo");
});

// Contador
function updateCounter() {
  const now = new Date();
  let diff = now - START_DATE;
  if (diff < 0) diff = 0;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(diff / day);
  const hours = Math.floor((diff % day) / hour);
  const minutes = Math.floor((diff % hour) / minute);
  const seconds = Math.floor((diff % minute) / second);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCounter();
setInterval(updateCounter, 1000);

// Animações de entrada
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Easter eggs
const eggMessages = {
  olhar: {
    eyebrow: "EASTER EGG #01 — O OLHAR",
    title: "Eu ainda lembro daquele olhar.",
    text: "Tem coisas que a gente esquece com o tempo. O seu olhar não foi uma delas. Eu vi uma vez e, por algum motivo, minha memória decidiu guardar até hoje."
  },
  paixao: {
    eyebrow: "EASTER EGG #02 — A PRIMEIRA PAIXÃO",
    title: "Você foi a minha primeira paixão.",
    text: "E, sinceramente? Até hoje é a que mais sabe bagunçar a minha cabeça. Algumas pessoas passam pela nossa vida. Outras deixam um lugar reservado."
  },
  anos80: {
    eyebrow: "EASTER EGG #03 — E SE FOSSE NOS ANOS 80?",
    title: "A estética mudaria. A escolha, não.",
    text: "Talvez a gente tivesse jaquetas de couro, música alta e uma história com cara de filme. Mas tenho quase certeza de que, no meio daquela década, eu ainda acabaria encontrando você."
  },
  anos60: {
    eyebrow: "EASTER EGG #04 — E SE FOSSE NOS ANOS 60?",
    title: "Em preto e branco, eu ainda reconheceria você.",
    text: "Talvez a gente se conhecesse em outra época, com outros costumes e outras músicas. Mas tem coisas que não dependem da época. Seu jeito continuaria sendo seu."
  },
  futuro: {
    eyebrow: "EASTER EGG #05 — O FUTURO",
    title: "Essa foto ainda não existe.",
    text: "E talvez isso seja justamente o mais bonito. Entre tantas fotos que já existem, ainda falta aquela que a gente vai tirar juntos daqui para frente."
  },
  carta: {
    eyebrow: "EASTER EGG #06 — UMA CARTA",
    title: "Tem coisas que ficam melhores escritas.",
    text: "Eu deixei uma carta inteira logo mais abaixo. É um daqueles lugares do site em que você pode parar por alguns minutos e ler com calma."
  }
};

const modal = document.getElementById("eggModal");
const modalEyebrow = document.getElementById("modalEyebrow");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

function openEgg(key) {
  const item = eggMessages[key];
  modalEyebrow.textContent = item.eyebrow;
  modalTitle.textContent = item.title;
  modalText.textContent = item.text;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeEgg() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".egg-card").forEach(card => {
  card.querySelector(".egg-button").addEventListener("click", () => {
    openEgg(card.dataset.egg);
  });
});

document.querySelector(".modal-close").addEventListener("click", closeEgg);
document.querySelector(".modal-backdrop").addEventListener("click", closeEgg);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeEgg();
});
