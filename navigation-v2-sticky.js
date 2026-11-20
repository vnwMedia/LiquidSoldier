(() => {
 const header = document.querySelector('.header');
 let compact = false;
 const sync = () => {
  const next = window.scrollY > (compact ? 40 : 100);
  if (next !== compact) {
   compact = next;
   header.classList.toggle('is-compact', compact);
  }
 };
 window.addEventListener('scroll', sync, { passive: true });
 window.addEventListener('pageshow', sync);
 sync();
})();
