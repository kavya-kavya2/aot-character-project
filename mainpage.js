setTimeout(() => {
      const btn = document.getElementById('joinBtn');
      btn.style.pointerEvents = 'auto';
      btn.addEventListener('click', () => {
        window.location.href = 'eren.html'; 
      });
    }, 3000);
setTimeout(() => {
      const btn = document.getElementById('nojoin');
      btn.style.pointerEvents = 'auto';
      btn.addEventListener('click', () => {
        window.location.href = 'exit.html'; 
      });
    }, 3000);