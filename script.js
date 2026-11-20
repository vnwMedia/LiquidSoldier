const menu=document.querySelector('.menu-button'),nav=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('details[open]').forEach(d=>d.open=false);nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
document.querySelectorAll('details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('details').forEach(other=>{if(other!==d)other.open=false})}));
const video=document.querySelector('video'),toggle=document.querySelector('.video-toggle');
toggle.addEventListener('click',async()=>{if(video.paused){try{await video.play();toggle.textContent='Pause video';toggle.setAttribute('aria-label','Pause background video')}catch{toggle.textContent='Video unavailable'}}else{video.pause();toggle.textContent='Play video';toggle.setAttribute('aria-label','Play background video')}});
const updateVideoControl=()=>{toggle.textContent=video.paused?'Play video':'Pause video';toggle.setAttribute('aria-label',video.paused?'Play background video':'Pause background video')};
video.addEventListener('play',updateVideoControl);video.addEventListener('pause',updateVideoControl);
if(matchMedia('(prefers-reduced-motion: reduce)').matches){video.autoplay=false;video.pause()}else{video.muted=true;video.play().then(updateVideoControl).catch(updateVideoControl)}
document.querySelector('.newsletter')?.addEventListener('submit',event=>{event.preventDefault();document.querySelector('.form-status').textContent='Design preview only. Your email has not been submitted.'});
