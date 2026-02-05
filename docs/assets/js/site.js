// WT namespace unico e sicuro
window.WT = (function () {
  // --- Tema (lasciato per compatibilità; se non usi più il toggle, non fa nulla) ---
  const KEY = 'wt-theme'; // 'light' | 'dark'
  const html = document.documentElement;

  function prefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function swapLogo(theme) {
    const img = document.querySelector('.wt-logo');
    if (!img) return;
    const darkSrc = img.getAttribute('data-logo-dark');
    const lightSrc = img.getAttribute('data-logo-light') || img.getAttribute('src');
    if (!darkSrc) return; // nessuna variante scura, esci

    if (theme === 'dark') img.setAttribute('src', darkSrc);
    else if (theme === 'light') img.setAttribute('src', lightSrc);
    else {
      // segue prefers-color-scheme
      if (prefersDark()) img.setAttribute('src', darkSrc);
      else img.setAttribute('src', lightSrc);
    }
  }

  function applyTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      html.setAttribute('data-theme', theme);
      swapLogo(theme);
    } else {
      html.removeAttribute('data-theme');
      swapLogo(null);
    }
  }

  function getStoredTheme() {
    try { return localStorage.getItem(KEY); } catch (_) { return null; }
  }
  function setStoredTheme(v) {
    try { localStorage.setItem(KEY, v); } catch (_) {}
  }

  function toggleTheme() {
    const current = getStoredTheme();
    let next;
    if (current === 'dark') next = 'light';
    else if (current === 'light') next = 'dark';
    else next = prefersDark() ? 'light' : 'dark';
    setStoredTheme(next);
    applyTheme(next);
  }

  function applyStoredTheme() {
    const stored = getStoredTheme();
    if (stored) applyTheme(stored);
    else applyTheme(null);
  }

  // --- Sidebar mobile ---
  function toggleSidebar() {
    const el = document.getElementById('wt-sidebar');
    if (!el) return;
    const open = el.classList.toggle('open');
    el.setAttribute('aria-hidden', open ? 'false' : 'true');
  }

  // Inizializzazione
  document.addEventListener('DOMContentLoaded', function () {
    applyStoredTheme(); // non fa nulla di visibile se non usi il toggle tema
  });

  // API pubbliche
  return {
    toggleTheme,
    applyStoredTheme,
    toggleSidebar
  };
})();
