document.addEventListener('click',e=>{if(!e.target.closest('.header')){document.querySelectorAll('details[open]').forEach(d=>d.open=false);nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
