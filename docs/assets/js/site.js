// Namespace globale semplice
window.WT = window.WT || {};

WT.toggleSidebar = function () {
  var sb = document.getElementById('wt-sidebar');
  if (sb) sb.classList.toggle('open');
};
