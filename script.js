// =======================
// Dados do Bestiário
// =======================
const monstersData = [
  { "name": "Dragão Mutante", "time": 20, "instances": 3, "location": "cmd_fild03" },
  { "name": "Dragão Mutante", "time": 400, "instances": 3, "location": "hu_fild05" },
  { "name": "Eclipse", "time": 30, "instances": 1, "location": "prt_fild02" },
  { "name": "Eclipse", "time": 32, "instances": 1, "location": "prt_maze03" },
  { "name": "Grifo", "time": 60, "instances": 1, "location": "cmd_fild08" },
  { "name": "Grifo", "time": 60, "instances": 1, "location": "um_fild03" },
  { "name": "Ghostring", "time": 60, "instances": 1, "location": "pay_fild04" },
  { "name": "Ghostring", "time": 114, "instances": 1, "location": "prt_maze03" },
  { "name": "Ghostring", "time": 33, "instances": 1, "location": "treasure02" },
  { "name": "Angeling", "time": 75, "instances": 1, "location": "xmas_dun02" },
  { "name": "Angeling", "time": 60, "instances": 1, "location": "pay_fild04" },
  { "name": "Angeling", "time": 60, "instances": 1, "location": "yuno_fild03" },
  { "name": "Archangeling", "time": 60, "instances": 1, "location": "yuno_fild04" },
  { "name": "Archangeling", "time": 60, "instances": 1, "location": "yuno_fild05" },
  { "name": "Deviling", "time": 120, "instances": 1, "location": "pay_fild04" },
  { "name": "Deviling", "time": 60, "instances": 1, "location": "yuno_fild03" },
  { "name": "Chepet", "time": 28, "instances": 1, "location": "xmas_dun01" },
  { "name": "Ilusão das Trevas", "time": 60, "instances": 1, "location": "gl_chyard" },
  { "name": "Maya Macho", "time": 120, "instances": 1, "location": "anthell01" },
  { "name": "Gato de Nove Caudas", "time": 60, "instances": 1, "location": "pay_dun04" },
  { "name": "Lobo Errante", "time": 60, "instances": 1, "location": "prt_maze01" },
  { "name": "Lobo Errante", "time": 32, "instances": 1, "location": "prt_maze03" },
  { "name": "Lobo Errante", "time": 30, "instances": 1, "location": "moc_fild03" },
  { "name": "Donzela Verde", "time": 50, "instances": 5, "location": "lou_dun03" },
  { "name": "Rosa Selvagem", "time": 120, "instances": 5, "location": "morocc" },
  { "name": "Rosa Selvagem", "time": 120, "instances": 5, "location": "alberta" },
  { "name": "Rosa Selvagem", "time": 120, "instances": 5, "location": "aldebaran" },
  { "name": "Rosa Selvagem", "time": 120, "instances": 5, "location": "geffen" },
  { "name": "Rosa Selvagem", "time": 120, "instances": 5, "location": "payon" },
  { "name": "Rosa Selvagem", "time": 120, "instances": 5, "location": "comodo" },
  { "name": "Rosa Selvagem", "time": 120, "instances": 5, "location": "izlude" },
  { "name": "Rosa Selvagem", "time": 120, "instances": 5, "location": "yuno" },
  { "name": "Rosa Selvagem", "time": 120, "instances": 5, "location": "umbala" },
  { "name": "Rosa Selvagem", "time": 120, "instances": 5, "location": "eldoria" },
  { "name": "Rosa Selvagem", "time": 120, "instances": 5, "location": "zero" },
  { "name": "Rosa Selvagem", "time": 120, "instances": 5, "location": "prontera" },
  { "name": "Rosa Selvagem", "time": 120, "instances": 5, "location": "louyang" },

  { "name": "Sussurro", "time": 30, "instances": 1, "location": "gl_cas02" },
  { "name": "Sussurro", "time": 30, "instances": 1, "location": "pay_dun03" },

  { "name": "Ungoliant", "time": 60, "instances": 2, "location": "ein_dun01" },

  { "name": "Libélula", "time": 60, "instances": 1, "location": "moc_fild18" },

  { "name": "Sapo Cururu", "time": 60, "instances": 1, "location": "cmd_fild03" },
  { "name": "Sapo Cururu", "time": 60, "instances": 1, "location": "gef_fild01" },

  { "name": "Mysteltainn", "time": 120, "instances": 1, "location": "gl_cas02" },
  { "name": "Mysteltainn", "time": 30, "instances": 1, "location": "gl_knt02" },

  { "name": "Tirfing", "time": 60, "instances": 1, "location": "c_tower4" },
  { "name": "Tirfing", "time": 120, "instances": 1, "location": "gl_cas01" },
  { "name": "Tirfing", "time": 120, "instances": 1, "location": "gl_cas02" },
  { "name": "Tirfing", "time": 30, "instances": 1, "location": "gef_dun01" },

  { "name": "Executioner", "time": 60, "instances": 1, "location": "c_tower4" },

  { "name": "Lunático Natalino", "time": 120, "instances": 5, "location": "lutie" }
];

// =======================
// Variáveis Globais e Storage
// =======================
let activeTimers = [];  // Cada timer ativo: { id, name, location, duration, endTime }
let pendingTimers = []; // Cada pendente: { id, name, location }
let isMuted = JSON.parse(localStorage.getItem('isMuted')) || false;

// Atualiza o botão de mutar com ícone (caso você queira manter essa funcionalidade)
function updateMuteButton() {
  const muteBtn = document.getElementById('mute-btn');
  if (isMuted) {
    muteBtn.innerHTML = '<i class="fa-solid fa-volume-mute"></i>';
  } else {
    muteBtn.innerHTML = '<i class="fa-solid fa-volume-up"></i>';
  }
}
updateMuteButton();
document.getElementById('mute-btn').addEventListener('click', () => {
  isMuted = !isMuted;
  localStorage.setItem('isMuted', JSON.stringify(isMuted));
  updateMuteButton();
});

// Recupera dados salvos, se houver
if (localStorage.getItem('activeTimers')) {
  activeTimers = JSON.parse(localStorage.getItem('activeTimers'));
}
if (localStorage.getItem('pendingTimers')) {
  pendingTimers = JSON.parse(localStorage.getItem('pendingTimers'));
}

// =======================
// Função de Salvamento
// =======================
function saveData() {
  localStorage.setItem('activeTimers', JSON.stringify(activeTimers));
  localStorage.setItem('pendingTimers', JSON.stringify(pendingTimers));
}

// =======================
// Função para Obter o Sprite do Monstro
// =======================
function getSprite(monsterName) {
  const mapping = {
    "Dragão Mutante": "MUTANT_DRAGON.gif",
    "Eclipse": "ECLIPSE.gif",
    "Grifo": "GRYPHON.gif",
    "Ghostring": "GHOSTRING.gif",
    "Angeling": "ANGELING.gif",
    "Archangeling": "ARCHANGELING.gif",
    "Deviling": "DEVILING.gif",
    "Chepet": "CHEPET.gif",
    "Ilusão das Trevas": "DARK_ILLUSION.gif",
    "Maya Macho": "MAYA_PUPLE.gif",
    "Gato de Nove Caudas": "CAT_O_NINE_TAIL.gif",
    "Lobo Errante": "VAGABOND_WOLF.gif",
    "Donzela Verde": "Green_Maiden.gif",
    "Rosa Selvagem": "WILD_ROSE.gif",
    "Sussurro": "WHISPER.gif",
    "Ungoliant": "UNGOLIANT.gif",
    "Libélula": "DRAGON_FLY.gif",
    "Sapo Cururu": "TOAD.gif",
    "Mysteltainn": "MYSTELTAINN.gif",
    "Tirfing": "TIRFING.gif",
    "Executioner": "EXECUTIONER.gif",
    "Lunático Natalino": "XMAS_LUNATIC.gif"
  };
  return `sprites/${mapping[monsterName] || "default.gif"}`;
}

// =======================
// Função para Obter a Imagem do Mapa (em webp)
// =======================
function getMapImage(location) {
  return `maps/${location}.webp`;
}

// =======================
// Renderização do Bestiário (Slider via Swiper.js)
// =======================
function renderBestiary(filteredData = monstersData) {
  const container = document.getElementById('bestiario-cards');
  container.innerHTML = '';

  // Agrupa os monstros por nome
  const grouped = {};
  filteredData.forEach(monster => {
    if (!grouped[monster.name]) {
      grouped[monster.name] = [];
    }
    grouped[monster.name].push(monster);
  });

  // Cria os slides do Swiper apenas para os monstros filtrados
  Object.keys(grouped).forEach(name => {
    const monsters = grouped[name];
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    slide.innerHTML = `
      <div class="card">
        <img src="${getSprite(name)}" alt="${name}" class="monster-sprite">
        <h3>${name}</h3>
      </div>
    `;

    slide.querySelector('.monster-sprite').addEventListener('click', () => {
      if (monsters.length === 1) {
        iniciarTimer(monsters[0]);
      } else {
        openModal(monsters);
      }
    });

    container.appendChild(slide);
  });

  // Re-inicializa o Swiper com os novos slides
  new Swiper('.swiper-container', {
    grid: { rows: 2, fill: "row" },
    slidesPerView: 2,
    spaceBetween: 8,
    centeredSlides: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      640: { slidesPerView: 1, grid: { rows: 1 } },
      768: { slidesPerView: 2, grid: { rows: 2 } },
      1024: { slidesPerView: 3, grid: { rows: 2 } }
    }
  });
}


document.getElementById('searchBar').addEventListener('input', function () {
  let filter = this.value.toLowerCase();

  // Filtra os monstros que contêm o texto digitado no nome
  let filteredMonsters = monstersData.filter(monster => 
    monster.name.toLowerCase().includes(filter)
  );

  // Renderiza o bestiário apenas com os monstros filtrados
  renderBestiary(filteredMonsters);
});


// =======================
// Modal para Seleção de Mapa
// =======================
const modal = document.getElementById('modal');
const modalMaps = document.getElementById('modal-maps');
const modalClose = document.getElementById('modal-close');

function openModal(monsters) {
  modalMaps.innerHTML = '';
  monsters.forEach(monster => {
    const div = document.createElement('div');
    div.classList.add('modal-map');
    div.innerHTML = `
      <img src="${getMapImage(monster.location)}" alt="${monster.location}">
      <span>${monster.location} – Respawn: ${monster.time} min</span>
    `;
    div.addEventListener('click', () => {
      iniciarTimer(monster);
      closeModal();
    });
    modalMaps.appendChild(div);
  });
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

modalClose.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// =======================
// Inicia um Timer (ou reinicia após reiniciar do pending)
// =======================
function iniciarTimer(monster) {
  const id = Date.now();
  const duration = monster.time * 60; // duração em segundos
  const endTime = Date.now() + duration * 1000;
  activeTimers.push({
    id,
    name: monster.name,
    location: monster.location,
    duration,
    endTime
  });
  // Se houver o timer pendente deste monstro, remove-o
  pendingTimers = pendingTimers.filter(p => !(p.name === monster.name && p.location === monster.location));
  saveData();
  renderActiveTimers();
  renderPendingTimers();
}

// =======================
// Renderização dos Timers Ativos
// =======================
function renderActiveTimers() {
  const container = document.getElementById('active-timers-cards');
  container.innerHTML = '';

  // Ordena os timers pelo tempo restante
  activeTimers.sort((a, b) => (a.endTime - Date.now()) - (b.endTime - Date.now()));

  activeTimers.forEach(timer => {
    const card = document.createElement('div');
    card.classList.add('card', 'active-timer');
    const timeRemaining = Math.max(0, Math.floor((timer.endTime - Date.now()) / 1000));
    card.innerHTML = `
      <div class="btn-remove">×</div>
      <div class="card-header">
        <img src="${getSprite(timer.name)}" alt="${timer.name}" class="monster-sprite">
        <img src="${getMapImage(timer.location)}" alt="${timer.location}" class="map-thumb">
      </div>
      <div class="monster-info">
        <h3>${timer.name}</h3>
      </div>
      <div class="time-remaining">${formatTime(timeRemaining)}</div>
      <div class="progress-container">
        <div class="progress-fill" style="width: ${((timeRemaining / timer.duration) * 100).toFixed(0)}%;"></div>
      </div>
    `;
    // Botão para remover o timer ativo
    card.querySelector('.btn-remove').addEventListener('click', () => {
      activeTimers = activeTimers.filter(t => t.id !== timer.id);
      saveData();
      renderActiveTimers();
    });
    container.appendChild(card);
  });
}

// =======================
// Renderização dos Timers Pendentes
// =======================
function renderPendingTimers() {
  const container = document.getElementById('pending-timers-cards');
  container.innerHTML = '';
  pendingTimers.forEach(pend => {
    const card = document.createElement('div');
    card.classList.add('card', 'pending-timer');
    card.innerHTML = `
      <img src="${getSprite(pend.name)}" alt="${pend.name}" class="monster-sprite">
      <h3>${pend.name}</h3>
      <p> ${pend.location}</p>
    `;
    // Ao clicar na imagem do monstro pendente, reinicia o timer
    card.querySelector('.monster-sprite').addEventListener('click', () => {
      const monster = monstersData.find(m => m.name === pend.name && m.location === pend.location);
      if (monster) {
        iniciarTimer(monster);
      }
      // Remove o item pendente (já feito na função iniciarTimer)
      saveData();
      renderPendingTimers();
    });
    container.appendChild(card);
  });
}

// =======================
// Atualização dos Timers (a cada segundo)
// =======================
function updateTimers() {
  const now = Date.now();
  let changed = false;
  activeTimers = activeTimers.filter(timer => {
    const timeRemaining = (timer.endTime - now) / 1000;
    if (timeRemaining <= 0) {
      pendingTimers.push({
        id: timer.id,
        name: timer.name,
        location: timer.location
      });
      if (!isMuted) {
        playBeep();
      }
      changed = true;
      return false;
    }
    return true;
  });
  if (changed) {
    saveData();
    renderActiveTimers();
    renderPendingTimers();
  } else {
    document.querySelectorAll('#active-timers-cards .active-timer').forEach((card, index) => {
      const timer = activeTimers[index];
      if (timer) {
        const timeRemaining = Math.max(0, Math.floor((timer.endTime - Date.now()) / 1000));
        card.querySelector('.time-remaining').textContent = formatTime(timeRemaining);
        const fillPercent = ((timeRemaining / timer.duration) * 100).toFixed(0);
        card.querySelector('.progress-fill').style.width = `${fillPercent}%`;
      }
    });
  }
}
setInterval(updateTimers, 1000);

// =======================
// Função para Formatar o Tempo (hh:mm:ss)
// =======================
function formatTime(totalSeconds) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${h > 0 ? h.toString().padStart(2, '0') + ':' : ''}${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// =======================
// Função de Notificação Sonora
// =======================
function playBeep() {
  const context = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = context.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(440, context.currentTime);
  oscillator.connect(context.destination);
  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
  }, 300);
}

// =======================
// Inicializações
// =======================
renderBestiary();
renderActiveTimers();
renderPendingTimers();
