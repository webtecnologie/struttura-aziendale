window.WT = {
  toggleSidebar(){
    const el = document.getElementById('wt-sidebar');
    const burger = document.querySelector('.wt-burger');
    const open = el.classList.toggle('open');
    el.setAttribute('aria-hidden', open ? 'false' : 'true');
    burger?.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
};

// Smooth scroll per anchor interne
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const id = a.getAttribute('href').slice(1);
  const target = document.getElementById(id);
  if(target){
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
  }
});
