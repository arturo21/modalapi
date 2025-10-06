var modalapi = (function (global) {
  const registry = new Map();
  let modalIndex = 1000;

  function createModal(options = {}) {
    const defaults = {
      id: `modal-${Date.now()}`,
      title: '',
      content: '',
      buttons: [],
      closable: true,
      overlay: true,
      width: '400px',
      animation: 'fade', // fade, slide, none
      closeOnEsc: true,
      closeOnOutsideClick: true,
      onOpen: null,
      onClose: null,
      onAction: null,
      meta: {}
    };
    const settings = { ...defaults, ...options };
    registry.set(settings.id, settings);

    const overlay = document.createElement('div');
    overlay.className = `modal-overlay ${settings.animation}`;
    overlay.style.zIndex = modalIndex++;
    overlay.dataset.modalId = settings.id;

    const modal = document.createElement('div');
    modal.className = 'modal-box';
    modal.style.width = settings.width;
    modal.id = settings.id;

    const header = document.createElement('div');
    header.className = 'modal-header';
    header.innerHTML = `<h3>${settings.title}</h3>`;

    const body = document.createElement('div');
    body.className = 'modal-body';
    body.innerHTML = settings.content;

    const footer = document.createElement('div');
    footer.className = 'modal-footer';

    settings.buttons.forEach(btn => {
      const button = document.createElement('button');
      button.textContent = btn.label;
      button.className = btn.class || 'modal-btn';
      button.onclick = () => {
        if (typeof btn.action === 'function') btn.action();
        if (typeof settings.onAction === 'function') settings.onAction(btn.label);
        if (btn.closeOnClick !== false) closeModal(settings.id);
      };
      footer.appendChild(button);
    });

    if (settings.closable) {
      const closeBtn = document.createElement('span');
      closeBtn.className = 'modal-close';
      closeBtn.innerHTML = '&times;';
      closeBtn.onclick = () => closeModal(settings.id);
      header.appendChild(closeBtn);
    }

    modal.append(header, body, footer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    if (settings.closeOnEsc) {
      overlay.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal(settings.id);
      });
      overlay.tabIndex = -1;
      overlay.focus();
    }

    if (settings.closeOnOutsideClick) {
      overlay.addEventListener('click', e => {
        if (e.target === overlay) closeModal(settings.id);
      });
    }

    if (typeof settings.onOpen === 'function') settings.onOpen();
  }

  function closeModal(id) {
    const overlay = document.querySelector(`.modal-overlay[data-modal-id="${id}"]`);
    if (overlay) {
      overlay.remove();
      const settings = registry.get(id);
      if (settings && typeof settings.onClose === 'function') settings.onClose();
      registry.delete(id);
    }
  }

  function updateModal(id, updates = {}) {
    const settings = registry.get(id);
    if (!settings) return;

    Object.assign(settings, updates);
    const modal = document.getElementById(id);
    if (!modal) return;

    if (updates.title) modal.querySelector('.modal-header h3').innerHTML = updates.title;
    if (updates.content) modal.querySelector('.modal-body').innerHTML = updates.content;
    if (updates.buttons) {
      const footer = modal.querySelector('.modal-footer');
      footer.innerHTML = '';
      updates.buttons.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn.label;
        button.className = btn.class || 'modal-btn';
        button.onclick = () => {
          if (typeof btn.action === 'function') btn.action();
          if (typeof settings.onAction === 'function') settings.onAction(btn.label);
          if (btn.closeOnClick !== false) closeModal(id);
        };
        footer.appendChild(button);
      });
    }
  }

  function isOpen(id) {
    return registry.has(id);
  }

  function getConfig(id) {
    return registry.get(id) || null;
  }

  function closeAll() {
    [...registry.keys()].forEach(closeModal);
  }

  function getOpenModals() {
    return [...registry.keys()];
  }

  return {
    open: createModal,
    close: closeModal,
    closeAll,
    update: updateModal,
    isOpen,
    getConfig,
    getOpenModals
  };
})(window);

export const methods = el => ({
  openModal(options = {}) {
    modalapi.open(options);
  },
  closeModal(id) {
    modalapi.close(id);
  },
  updateModal(id, updates) {
    modalapi.update(id, updates);
  },
  isModalOpen(id) {
    return modalapi.isOpen(id);
  },
  getModalConfig(id) {
    return modalapi.getConfig(id);
  }
});
