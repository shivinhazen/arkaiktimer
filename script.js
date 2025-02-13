(() => {
  "use strict";

  /****************************
   * Dados e Estado do App
   ****************************/
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

  const AppState = {
    activeTimers: [],
    pendingTimers: [],
    isMuted: false,
    isDarkMode: true,
  };

  // Inicializa o volume padrão (beepVolume varia de 0 até 0.4)
  let beepVolume = 0.2;

  try {
    AppState.isMuted = JSON.parse(localStorage.getItem("isMuted")) || false;
    const savedActive = localStorage.getItem("activeTimers");
    const savedPending = localStorage.getItem("pendingTimers");
    if (savedActive) AppState.activeTimers = JSON.parse(savedActive);
    if (savedPending) AppState.pendingTimers = JSON.parse(savedPending);
  } catch (e) {
    console.error("Erro ao carregar dados do localStorage:", e);
  }

  /****************************
   * Funções Utilitárias
   ****************************/
  const saveData = () => {
    try {
      localStorage.setItem("activeTimers", JSON.stringify(AppState.activeTimers));
      localStorage.setItem("pendingTimers", JSON.stringify(AppState.pendingTimers));
    } catch (e) {
      console.error("Erro ao salvar dados no localStorage:", e);
    }
  };

  // playBeep usa GainNode com valor máximo de 0.4
  const playBeep = () => {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(440, context.currentTime);
    const gainNode = context.createGain();
    gainNode.gain.value = beepVolume;
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    oscillator.start();
    setTimeout(() => oscillator.stop(), 300);
  };

  const getSprite = (monsterName) => {
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
  };

  const getMapImage = (location) => `maps/${location}.webp`;

  const formatTime = (totalSeconds) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h > 0 ? String(h).padStart(2, "0") + ":" : ""}${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const formatRelativeTime = (timestamp) => {
    const diffInSeconds = Math.floor((Date.now() - timestamp) / 1000);
    if (diffInSeconds < 60)
      return `${diffInSeconds} segundo${diffInSeconds !== 1 ? "s" : ""}`;
    else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minuto${minutes !== 1 ? "s" : ""}`;
    } else {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hora${hours !== 1 ? "s" : ""}`;
    }
  };

  const attach3DEffect = (card) => {
    card.style.transformStyle = "preserve-3d";
    card.style.clipPath = "none";
    if (!card.querySelector(".card__glow")) {
      const glow = document.createElement("div");
      glow.classList.add("card__glow");
      card.appendChild(glow);
    }
    card.addEventListener("mousemove", (e) => {
      const bounds = card.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
      const angle = Math.log(distance + 1) * 3;
      card.style.transform = `perspective(1200px) scale3d(1.1, 1.1, 1.1) rotate3d(${center.y / 50}, ${-center.x / 50}, 0, ${angle}deg)`;
      const img = card.querySelector(".card__img");
      if (img) {
        img.style.transform = `perspective(1200px) translateZ(40px) rotate3d(${center.y / 75}, ${-center.x / 75}, 0, ${angle / 1.2}deg)`;
      }
      const glow = card.querySelector(".card__glow");
      if (glow) {
        glow.style.backgroundImage = `radial-gradient(circle at ${center.x * 2 + bounds.width / 2}px ${center.y * 2 + bounds.height / 2}px, transparent, rgba(0,0,0,0.9))`;
      }
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      const img = card.querySelector(".card__img");
      if (img) {
        img.style.transform = "";
      }
    });
  };

  /****************************
   * Renderização
   ****************************/
  const renderBestiary = (filteredData = monstersData) => {
    const container = document.getElementById("bestiary-cards");
    if (!container) return;
    container.innerHTML = "";
    const grouped = {};
    filteredData.forEach((monster) => {
      if (!grouped[monster.name]) grouped[monster.name] = [];
      grouped[monster.name].push(monster);
    });
    let order = Object.keys(grouped);
    try {
      const savedOrder = JSON.parse(localStorage.getItem("bestiaryOrder"));
      if (savedOrder && Array.isArray(savedOrder)) {
        order.sort((a, b) => {
          const indexA = savedOrder.indexOf(a);
          const indexB = savedOrder.indexOf(b);
          return (indexA === -1 ? savedOrder.length : indexA) - (indexB === -1 ? savedOrder.length : indexB);
        });
      }
    } catch (e) {
      console.error(e);
    }
    order.forEach((name) => {
      const monsters = grouped[name];
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("tabindex", "0");
      card.innerHTML = `
        <div class="card__content">
          <img src="${getSprite(name)}" alt="${name}" class="card__img">
          <h3 class="card__title">${name}</h3>
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
      // Toda a área do card (exceto as setas de reordenação) agora abre o modal ou inicia o timer
      card.addEventListener("click", (e) => {
        if (!e.target.closest(".reorder-buttons")) {
          if (monsters.length === 1) {
            iniciarTimer(monsters[0]);
          } else {
            openModal(monsters);
          }
        }
      });
      card.querySelector(".move-first").addEventListener("click", (e) => {
        e.stopPropagation();
        container.prepend(card);
        saveBestiaryOrder();
      });
      card.querySelector(".move-last").addEventListener("click", (e) => {
        e.stopPropagation();
        container.appendChild(card);
        saveBestiaryOrder();
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
          const prev = card.previousElementSibling;
          if (prev) {
            container.insertBefore(card, prev);
            saveBestiaryOrder();
          }
        } else if (e.key === "ArrowRight") {
          const next = card.nextElementSibling;
          if (next) {
            container.insertBefore(next, card);
            saveBestiaryOrder();
          }
        } else if (e.key === "Home") {
          container.prepend(card);
          saveBestiaryOrder();
        } else if (e.key === "End") {
          container.appendChild(card);
          saveBestiaryOrder();
        }
      });
      container.appendChild(card);
    });
  };

  const renderActiveTimers = () => {
    const container = document.getElementById("active-timers-cards");
    container.innerHTML = "";
    AppState.activeTimers.sort((a, b) => (a.endTime - Date.now()) - (b.endTime - Date.now()));
    AppState.activeTimers.forEach((timer) => {
      const timeRemaining = Math.max(0, Math.floor((timer.endTime - Date.now()) / 1000));
      const card = document.createElement("div");
      card.classList.add("card", "active-timer");
      card.innerHTML = `
        <button class="btn-remove">×</button>
        <div class="card-header">
          <img src="${getSprite(timer.name)}" alt="${timer.name}" class="card__img">
          <img src="${getMapImage(timer.location)}" alt="${timer.location}" class="map-thumb">
        </div>
        <div class="monster-info">
          <h3 class="card__title">${timer.name}</h3>
        </div>
        <div class="time-remaining">${formatTime(timeRemaining)}</div>
        <div class="progress-container">
          <div class="progress-fill" style="width: ${((timeRemaining / timer.duration) * 100).toFixed(0)}%;"></div>
        </div>
      `;
      attach3DEffect(card);
      card.querySelector(".btn-remove").addEventListener("click", () => {
        AppState.activeTimers = AppState.activeTimers.filter((t) => t.id !== timer.id);
        saveData();
        renderActiveTimers();
      });
      container.appendChild(card);
    });
  };

  const renderPendingTimers = () => {
    const container = document.getElementById("pending-timers-cards");
    container.innerHTML = "";
    AppState.pendingTimers.forEach((pend) => {
      const card = document.createElement("div");
      card.classList.add("card", "pending-timer");
      card.innerHTML = `
        <button class="btn-remove">×</button>
        <img src="${getSprite(pend.name)}" alt="${pend.name}" class="card__img">
        <h3 class="card__title">${pend.name}</h3>
        <p>${pend.location}</p>
        <span class="expired-time">Nasceu há ${formatRelativeTime(pend.expiredAt)}</span>
      `;
      attach3DEffect(card);
      card.querySelector(".card__img").addEventListener("click", () => {
        iniciarTimer({ name: pend.name, location: pend.location, time: pend.time }, pend.id);
        saveData();
        renderPendingTimers();
      });
      card.querySelector(".btn-remove").addEventListener("click", () => {
        AppState.pendingTimers = AppState.pendingTimers.filter((p) => p.id !== pend.id);
        saveData();
        renderPendingTimers();
      });
      container.appendChild(card);
    });
  };

  // Atualiza o texto "Nasceu há X segundos" dos timers pendentes
  const updatePendingRelativeTimes = () => {
    const pendingCards = document.querySelectorAll("#pending-timers-cards .pending-timer");
    pendingCards.forEach((card, index) => {
      const pend = AppState.pendingTimers[index];
      if (pend) {
        card.querySelector(".expired-time").textContent = "Nasceu há " + formatRelativeTime(pend.expiredAt);
      }
    });
  };

  const updateTimers = () => {
    const now = Date.now();
    let changed = false;
    AppState.activeTimers = AppState.activeTimers.filter((timer) => {
      const timeRemaining = (timer.endTime - now) / 1000;
      if (timeRemaining < 1) {
        AppState.pendingTimers.push({
          id: timer.id,
          name: timer.name,
          location: timer.location,
          time: timer.duration / 60,
          expiredAt: now,
        });
        if (!AppState.isMuted) playBeep();
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
      document.querySelectorAll("#active-timers-cards .active-timer").forEach((card, index) => {
        const timer = AppState.activeTimers[index];
        if (timer) {
          const timeRemaining = Math.max(0, Math.floor((timer.endTime - Date.now()) / 1000));
          card.querySelector(".time-remaining").textContent = formatTime(timeRemaining);
          const fillPercent = ((timeRemaining / timer.duration) * 100).toFixed(0);
          card.querySelector(".progress-fill").style.width = `${fillPercent}%`;
        }
      });
    }
    // Atualiza os textos dos timers pendentes
    updatePendingRelativeTimes();
  };

  setInterval(updateTimers, 1000);

  /****************************
   * Modal - Seleção de Mapa
   ****************************/
  const modal = document.getElementById("modal");
  const modalMaps = document.getElementById("modal-maps");
  const modalClose = document.getElementById("modal-close");

  const openModal = (monsters) => {
    modalMaps.innerHTML = "";
    monsters.forEach((monster) => {
      const div = document.createElement("div");
      div.classList.add("modal__map");
      div.innerHTML = `
        <img src="${getMapImage(monster.location)}" alt="${monster.location}">
        <p class="map-name">${monster.location}</p>
        <p class="map-time"><i class="fa-solid fa-clock"></i> ${monster.time} min</p>
      `;
      div.addEventListener("click", () => {
        iniciarTimer(monster);
        closeModal();
      });
      modalMaps.appendChild(div);
    });
    modal.style.display = "block";
  };

  const closeModal = () => {
    modal.style.display = "none";
  };

  modalClose.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  /****************************
   * Modal - Reset Defaults
   ****************************/
  const resetModal = document.getElementById("reset-modal");
  const resetModalClose = document.getElementById("reset-modal-close");
  const confirmReset = document.getElementById("confirm-reset");
  const cancelReset = document.getElementById("cancel-reset");

  const openResetModal = () => {
    resetModal.style.display = "block";
  };

  const closeResetModal = () => {
    resetModal.style.display = "none";
  };

  document.getElementById("reset-btn").addEventListener("click", openResetModal);
  resetModalClose.addEventListener("click", closeResetModal);
  cancelReset.addEventListener("click", closeResetModal);
  confirmReset.addEventListener("click", () => {
    if (confirm("Deseja realmente resetar as configurações?")) {
      localStorage.clear();
      location.reload();
    }
  });

  /****************************
   * Modal - Configurações de Visibilidade
   ****************************/
  const visibilityModal = document.getElementById("visibility-modal");
  const visibilityModalClose = document.getElementById("visibility-modal-close");
  const visibilityForm = document.getElementById("visibility-form");

  const openVisibilityModal = () => {
    visibilityModal.style.display = "block";
  };

  const closeVisibilityModal = () => {
    visibilityModal.style.display = "none";
  };

  document.getElementById("open-visibility-modal")?.addEventListener("click", openVisibilityModal);
  visibilityModalClose.addEventListener("click", closeVisibilityModal);

  visibilityForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const bestiaryVisible = document.getElementById("visibility-bestiary").checked;
    const activeVisible = document.getElementById("visibility-active").checked;
    const pendingVisible = document.getElementById("visibility-pending").checked;
    document.getElementById("bestiary").style.display = bestiaryVisible ? "" : "none";
    document.getElementById("active-timers").style.display = activeVisible ? "" : "none";
    document.getElementById("pending-timers").style.display = pendingVisible ? "" : "none";
    closeVisibilityModal();
  });

  /****************************
   * Timer
   ****************************/
  const iniciarTimer = (monster, pendingId = null) => {
    const id = Date.now();
    const duration = monster.time * 60;
    const endTime = Date.now() + duration * 1000;
    AppState.activeTimers.push({
      id,
      name: monster.name,
      location: monster.location,
      duration,
      endTime,
    });
    if (pendingId) {
      AppState.pendingTimers = AppState.pendingTimers.filter((p) => p.id !== pendingId);
    }
    saveData();
    renderActiveTimers();
    renderPendingTimers();
  };

  const saveBestiaryOrder = () => {
    const container = document.getElementById("bestiary-cards");
    const order = [];
    container.querySelectorAll(".card").forEach((card) => {
      const name = card.querySelector(".card__title").textContent;
      order.push(name);
    });
    try {
      localStorage.setItem("bestiaryOrder", JSON.stringify(order));
    } catch (e) {
      console.error(e);
    }
  };

  /****************************
   * Outras Funcionalidades
   ****************************/
  document.querySelectorAll(".toggle-icon").forEach((icon) => {
    icon.addEventListener("click", function () {
      const sectionContent = this.closest(".section").querySelector(".section__content");
      if (sectionContent.style.display === "none") {
        sectionContent.style.display = "";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
      } else {
        sectionContent.style.display = "none";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
      }
    });
  });

  document.getElementById("clear-pending-btn").addEventListener("click", () => {
    AppState.pendingTimers = [];
    saveData();
    renderPendingTimers();
  });

  document.getElementById("clear-timers")?.addEventListener("click", () => {
    AppState.activeTimers = [];
    AppState.pendingTimers = [];
    saveData();
    renderActiveTimers();
    renderPendingTimers();
  });

  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const gradient = document.querySelector(".gradient");
  // Efeito do mouse: radial transparente que revela a imagem de fundo
  const updateGradient = (event) => {
    gradient.style.backgroundImage = `radial-gradient(circle at ${event.clientX}px ${event.clientY}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50px, rgba(0,0,0,0.6) 100px, rgba(0,0,0,0.8) 150px)`;
  };

  document.addEventListener("mousemove", throttle(updateGradient, 50));

  // Inicializa Sortable.js para o Bestiário
  const initSortable = () => {
    const bestiaryContainer = document.getElementById("bestiary-cards");
    if (bestiaryContainer) {
      Sortable.create(bestiaryContainer, {
        animation: 150,
        ghostClass: "sortable-ghost",
        scroll: true,
        scrollSensitivity: 50,
        scrollSpeed: 15,
        bubbleScroll: true,
        onEnd: () => {
          saveBestiaryOrder();
        },
      });
    }
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSortable);
  } else {
    initSortable();
  }

  const searchBar = document.getElementById("searchBar");
  if (searchBar) {
    searchBar.addEventListener("input", function () {
      const filter = this.value.toLowerCase();
      const filteredMonsters = monstersData.filter((monster) =>
        monster.name.toLowerCase().includes(filter)
      );
      renderBestiary(filteredMonsters);
    });
  }

  // --- Controle do Volume e Mute com Slider ao lado ---
  const volumeBtn = document.getElementById("volume-btn");
  const volumeSliderContainer = document.querySelector(".volume-slider-container");
  let volumeHideTimeout;
  const volumeSlider = document.getElementById("volume-slider");
  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      beepVolume = (e.target.value / 100) * 0.4;
      console.log("Volume ajustado para:", beepVolume);
    });
  }
  const updateVolumeIcon = () => {
    const icon = volumeBtn.querySelector("i");
    if (AppState.isMuted) {
      icon.className = "fa-solid fa-volume-mute";
    } else {
      icon.className = "fa-solid fa-volume-up";
    }
  };
  volumeBtn.addEventListener("click", () => {
    AppState.isMuted = !AppState.isMuted;
    localStorage.setItem("isMuted", JSON.stringify(AppState.isMuted));
    updateVolumeIcon();
    // Exibe o slider (ao lado do ícone) com efeito de entrada
    volumeSliderContainer.classList.add("visible");
    if (volumeHideTimeout) clearTimeout(volumeHideTimeout);
    volumeHideTimeout = setTimeout(() => {
      volumeSliderContainer.classList.remove("visible");
    }, 5000);
  });
  volumeSliderContainer.addEventListener("mouseenter", () => {
    if (volumeHideTimeout) clearTimeout(volumeHideTimeout);
  });
  volumeSliderContainer.addEventListener("mouseleave", () => {
    volumeHideTimeout = setTimeout(() => {
      volumeSliderContainer.classList.remove("visible");
    }, 5000);
  });

  renderBestiary();
  renderActiveTimers();
  renderPendingTimers();
})();
