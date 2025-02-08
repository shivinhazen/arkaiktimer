/* =======================
   Dados do Bestiário
   ======================= */
   const monstersData = [
    { "name": "Dragão Mutante", "time": 20, "instances": 3, "location": "cmd_fild03" },
    { "name": "Dragão Mutante", "time": 1, "instances": 3, "location": "cmd_fild05" },
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
    { "name": "Lunático Natalino", "time": 120, "instances": 5, "location": "lutie" },
    { "name": "Orc Herói", "time": 120, "instances": 1, "location": "lutie" },
    { "name": "Senhor dos Orcs", "time": 120, "instances": 1, "location": "lutie" },
    { "name": "Faraó", "time": 120, "instances": 5, "location": "lutie" },
    { "name": "Osíris", "time": 120, "instances": 5, "location": "lutie" },
    { "name": "Hatii", "time": 120, "instances": 5, "location": "xmas_fild01" },
    { "name": "Cavaleiro da Tempestade", "time": 120, "instances": 5, "location": "xmas_dun02" },
    { "name": "Phreeoni", "time": 120, "instances": 5, "location": "lutie" },
    { "name": "Maya", "time": 120, "instances": 5, "location": "anthell02" },
    { "name": "Lady Tanee", "time": 120, "instances": 5, "location": "lutie" },
    { "name": "Amon Ra", "time": 120, "instances": 5, "location": "lutie" },
    { "name": "Baphomet", "time": 120, "instances": 1, "location": "prt_maze03" },
    { "name": "Quimera", "time": 120, "instances": 5, "location": "lutie" },
    { "name": "Detale", "time": 120, "instances": 5, "location": "abyss_03" },
    { "name": "Doppelganger", "time": 120, "instances": 5, "location": "gef_dun03" },
    { "name": "Drácula", "time": 120, "instances": 5, "location": "gef_dun02" },
    { "name": "Drake", "time": 120, "instances": 5, "location": "treasure02" },
    { "name": "Eddga", "time": 120, "instances": 5, "location": "lutie" },
    { "name": "Besouro Ladrão Dourado", "time": 120, "instances": 5, "location": "prt_sewb4" },
    { "name": "Kraken", "time": 120, "instances": 5, "location": "lutie" },
    { "name": "Senhor dos Mortos", "time": 120, "instances": 5, "location": "niff" },
    { "name": "Abelha Rainha", "time": 120, "instances": 5, "location": "lutie" },
    { "name": "Flor do Luar", "time": 120, "instances": 5, "location": "lutie" },
    { "name": "Polvo Gigante", "time": 120, "instances": 5, "location": "lutie" },
    { "name": "RSX-0806", "time": 120, "instances": 5, "location": "lutie" },
    { "name": "General Tartaruga", "time": 120, "instances": 5, "location": "lutie" },
    { "name": "Vesper", "time": 120, "instances": 5, "location": "lutie" }
  ];
  
  /* =======================
     Variáveis Globais e Storage
     ======================= */
  let activeTimers = [];   // Cada timer ativo: { id, name, location, duration, endTime }
  let pendingTimers = [];  // Cada timer pendente: { id, name, location, expiredAt }
  let isMuted = JSON.parse(localStorage.getItem('isMuted')) || false;
  
  /* Atualiza o botão de mutar */
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
  
  /* Recupera dados salvos, se houver */
  if (localStorage.getItem('activeTimers')) {
    activeTimers = JSON.parse(localStorage.getItem('activeTimers'));
  }
  if (localStorage.getItem('pendingTimers')) {
    pendingTimers = JSON.parse(localStorage.getItem('pendingTimers'));
  }
  
  /* Função de Salvamento dos timers */
  function saveData() {
    localStorage.setItem('activeTimers', JSON.stringify(activeTimers));
    localStorage.setItem('pendingTimers', JSON.stringify(pendingTimers));
  }
  
  /* =======================
     Função para Obter o Sprite do Monstro
     ======================= */
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
      "Lunático Natalino": "XMAS_LUNATIC.gif",
      "Orc Herói": "ORC_HERO.gif",
      "Senhor dos Orcs": "ORC_LORD.gif",
      "Faraó": "PHARAOH.gif",
      "Osíris": "OSIRIS.gif",
      "Hatii": "GARM.gif",
      "Cavaleiro da Tempestade": "STORMKNIGHT.gif",
      "Phreeoni": "PHREEONI.gif",
      "Maya": "MAYA.gif",
      "Lady Tanee": "LADY_TANEE.gif",
      "Amon Ra": "AMON_RA.gif",
      "Baphomet": "BAPHOMET.gif",
      "Quimera": "CHIMERA.gif",
      "Detale": "DETALE.gif",
      "Doppelganger": "Doppelganger.gif",
      "Drácula": "DRACULA.gif",
      "Drake": "DRAKE.gif",
      "Eddga": "EDDGA.gif",
      "Besouro Ladrão Dourado": "GOLDEN_BUG.gif",
      "Kraken": "KRAKEN.gif",
      "Senhor dos Mortos": "LORD_OF_DEATH.gif",
      "Abelha Rainha": "MISTRESS.gif",
      "Flor do Luar": "MOONLIGHT.gif",
      "Polvo Gigante": "POLVO_GIGANTE.gif",
      "RSX-0806": "RSX_0806.gif",
      "General Tartaruga": "TURTLE_GENERAL.gif",
      "Vesper": "VESPER.gif",
    };
    return `sprites/${mapping[monsterName] || "default.gif"}`;
  }
  
  /* Atualiza o gradiente conforme o mouse se move */
  document.addEventListener("DOMContentLoaded", function() {
    const gradient = document.querySelector(".gradient");
    function onMouseMove(event) {
      gradient.style.backgroundImage =
        'radial-gradient(at ' +
        event.clientX +
        'px ' +
        event.clientY +
        'px, rgba(174, 213, 174, 0.95) 0, rgb(254, 201, 154) 70%)';
    }
    document.addEventListener("mousemove", onMouseMove);
  });
  
  /* =======================
     Função para formatar o tempo relativo
     ======================= */
  function formatRelativeTime(timestamp) {
    const diffInSeconds = Math.floor((Date.now() - timestamp) / 1000);
    if (diffInSeconds < 60) {
      return `${diffInSeconds} segundo${diffInSeconds !== 1 ? 's' : ''}`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minuto${minutes !== 1 ? 's' : ''}`;
    } else {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hora${hours !== 1 ? 's' : ''}`;
    }
  }
  
  /* =======================
     Função para aplicar o efeito 3D (com efeito aumentado)
     ======================= */
  function attach3DEffect(card) {
    card.style.transformStyle = 'preserve-3d';
    card.style.clipPath = 'none'; // Garante formato retangular
  
    // Adiciona o elemento "glow" se não existir
    if (!card.querySelector('.glow')) {
      const glow = document.createElement('div');
      glow.classList.add('glow');
      card.appendChild(glow);
    }
  
    let bounds;
  
    function onMouseMove(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
      // Multiplicador de ângulo aumentado para efeito mais dramático
      const angle = Math.log(distance + 1) * 3;
  
      // Aplica transformação 3D com perspective menor e escala maior
      card.style.transform = `
        perspective(1200px)
        scale3d(1.1, 1.1, 1.1)
        rotate3d(${center.y / 50}, ${-center.x / 50}, 0, ${angle}deg)
      `;
  
      // Transformação para o sprite (GIF) interno
      const gif = card.querySelector('.monster-sprite');
      if (gif) {
        gif.style.transformStyle = 'preserve-3d';
        gif.style.transform = `
          perspective(1200px)
          translateZ(40px)
          rotate3d(${center.y / 75}, ${-center.x / 75}, 0, ${angle / 1.2}deg)
        `;
      }
  
      // Atualiza o glow
      const glow = card.querySelector('.glow');
      if (glow) {
        glow.style.backgroundImage = `
          radial-gradient(
            circle at ${center.x * 2 + bounds.width / 2}px ${center.y * 2 + bounds.height / 2}px,
            #ffffff55,
            #0000000f
          )
        `;
      }
    }
  
    card.addEventListener('mouseenter', () => {
      bounds = card.getBoundingClientRect();
      document.addEventListener('mousemove', onMouseMove);
    });
  
    card.addEventListener('mouseleave', () => {
      document.removeEventListener('mousemove', onMouseMove);
      card.style.transform = '';
      const gif = card.querySelector('.monster-sprite');
      if (gif) {
        gif.style.transform = '';
      }
    });
  }
  
  /* =======================
     Função para Obter a Imagem do Mapa
     ======================= */
  function getMapImage(location) {
    return `maps/${location}.webp`;
  }
  
  /* =======================
     Função para salvar a ordem do Bestiário
     ======================= */
  function saveBestiaryOrder() {
    const container = document.getElementById('bestiario-cards');
    const order = [];
    container.querySelectorAll('.card').forEach(card => {
      const name = card.querySelector('h3').textContent;
      order.push(name);
    });
    localStorage.setItem('bestiaryOrder', JSON.stringify(order));
  }
  
  /* =======================
     Renderização do Bestiário (com reordenação, botões e teclado)
     ======================= */
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
  
    // Cria um array com os nomes (chaves) dos grupos
    let order = Object.keys(grouped);
  
    // Se existir uma ordem salva, usamos ela para ordenar
    const savedOrder = JSON.parse(localStorage.getItem('bestiaryOrder'));
    if (savedOrder && Array.isArray(savedOrder)) {
      order.sort((a, b) => {
        const indexA = savedOrder.indexOf(a);
        const indexB = savedOrder.indexOf(b);
        return (indexA === -1 ? savedOrder.length : indexA) - (indexB === -1 ? savedOrder.length : indexB);
      });
    }
  
    // Cria os cards seguindo a ordem definida
    order.forEach(name => {
      const monsters = grouped[name];
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('tabindex', '0'); // Para navegação via teclado
      card.innerHTML = `
        <div class="card-content">
          <img src="${getSprite(name)}" alt="${name}" class="monster-sprite">
          <h3>${name}</h3>
        </div>
        <div class="reorder-buttons">
          <button class="move-first" title="Mover para o início">
            <i class="fa-solid fa-angle-double-left"></i>
          </button>
          <button class="move-last" title="Mover para o fim">
            <i class="fa-solid fa-angle-double-right"></i>
          </button>
        </div>
      `;
  
      attach3DEffect(card);
  
      // Evento de clique no sprite
      card.querySelector('.monster-sprite').addEventListener('click', () => {
        if (monsters.length === 1) {
          iniciarTimer(monsters[0]);
        } else {
          openModal(monsters);
        }
      });
  
      // Botões de reordenação rápida
      const moveFirstBtn = card.querySelector('.move-first');
      const moveLastBtn = card.querySelector('.move-last');
  
      moveFirstBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        container.prepend(card);
        saveBestiaryOrder();
      });
  
      moveLastBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        container.appendChild(card);
        saveBestiaryOrder();
      });
  
      // Suporte à navegação via teclado para reordenação
      card.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          const prev = card.previousElementSibling;
          if (prev) {
            container.insertBefore(card, prev);
            saveBestiaryOrder();
          }
        } else if (e.key === 'ArrowRight') {
          const next = card.nextElementSibling;
          if (next) {
            container.insertBefore(next, card);
            saveBestiaryOrder();
          }
        } else if (e.key === 'Home') {
          container.prepend(card);
          saveBestiaryOrder();
        } else if (e.key === 'End') {
          container.appendChild(card);
          saveBestiaryOrder();
        }
      });
  
      container.appendChild(card);
    });
  }
  
  /* Evento para busca no Bestiário */
  document.getElementById('searchBar').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const filteredMonsters = monstersData.filter(monster =>
      monster.name.toLowerCase().includes(filter)
    );
    renderBestiary(filteredMonsters);
  });
  
  /* Inicializa o Sortable para a grid do Bestiário com auto-scroll */
  document.addEventListener('DOMContentLoaded', function() {
    const bestiaryContainer = document.getElementById('bestiario-cards');
    Sortable.create(bestiaryContainer, {
      animation: 150,
      ghostClass: 'sortable-ghost',
      scroll: true,
      scrollSensitivity: 50,
      scrollSpeed: 15,
      bubbleScroll: true,
      onEnd: function(evt) {
        saveBestiaryOrder();  // Salva a ordem após o drag and drop
      }
    });
  });
  
  /* =======================
     Modal para Seleção de Mapa
     ======================= */
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
        <p class="map-name">${monster.location}</p>
        <p class="map-time"><i class="fa-solid fa-clock"></i> ${monster.time} min</p>
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
  
  /* =======================
     Inicia um Timer
     ======================= */
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
    // Remove o timer pendente, se existir
    pendingTimers = pendingTimers.filter(p => !(p.name === monster.name && p.location === monster.location));
    saveData();
    renderActiveTimers();
    renderPendingTimers();
  }
  
  /* =======================
     Renderização dos Timers Ativos
     ======================= */
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
        <button class="btn-remove">×</button>
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
  
      attach3DEffect(card);
  
      card.querySelector('.btn-remove').addEventListener('click', () => {
        activeTimers = activeTimers.filter(t => t.id !== timer.id);
        saveData();
        renderActiveTimers();
      });
      container.appendChild(card);
    });
  }
  
  /* =======================
     Renderização dos Timers Pendentes
     ======================= */
  function renderPendingTimers() {
    const container = document.getElementById('pending-timers-cards');
    container.innerHTML = '';
  
    pendingTimers.forEach(pend => {
      const card = document.createElement('div');
      card.classList.add('card', 'pending-timer');
      card.innerHTML = `
        <img src="${getSprite(pend.name)}" alt="${pend.name}" class="monster-sprite">
        <h3>${pend.name}</h3>
        <p>${pend.location}</p>
        <span class="expired-time">Nasceu há ${formatRelativeTime(pend.expiredAt)}</span>
      `;
  
      attach3DEffect(card);
  
      card.querySelector('.monster-sprite').addEventListener('click', () => {
        const monster = monstersData.find(m => m.name === pend.name && m.location === pend.location);
        if (monster) {
          iniciarTimer(monster);
        }
        saveData();
        renderPendingTimers();
      });
      container.appendChild(card);
    });
  }
  
  /* =======================
     Atualização dos Timers (a cada segundo)
     ======================= */
  function updateTimers() {
    const now = Date.now();
    let changed = false;
    // Atualiza os timers ativos e move os expirados para os pendentes
    activeTimers = activeTimers.filter(timer => {
      const timeRemaining = (timer.endTime - now) / 1000;
      if (timeRemaining < 1) {  // se o tempo restante for menor que 1 segundo
        pendingTimers.push({
          id: timer.id,
          name: timer.name,
          location: timer.location,
          expiredAt: now
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
  
  /* =======================
     Função para Formatar o Tempo (hh:mm:ss)
     ======================= */
  function formatTime(totalSeconds) {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h > 0 ? h.toString().padStart(2, '0') + ':' : ''}${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
  
  /* =======================
     Função de Notificação Sonora
     ======================= */
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
  
  /* =======================
     Inicializações
     ======================= */
  renderBestiary();
  renderActiveTimers();
  renderPendingTimers();
  
  /* =======================
     Toggle das Seções (Minimizar/Expandir)
     ======================= */
  document.querySelectorAll('.toggle-icon').forEach(icon => {
    icon.addEventListener('click', function() {
      const sectionContent = this.closest('section').querySelector('.section-content');
      if (sectionContent.style.display === 'none') {
        sectionContent.style.display = '';
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
      } else {
        sectionContent.style.display = 'none';
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
      }
    });
  });
  