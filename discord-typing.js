document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.discord-btn');
  if (!btn) return;
  const textEl = btn.querySelector('.discord-text');
  const full = 'discord';
  let typingTimer = null;
  let deletingTimer = null;

  const clearTimers = () => {
    if (typingTimer) { clearInterval(typingTimer); typingTimer = null; }
    if (deletingTimer) { clearInterval(deletingTimer); deletingTimer = null; }
  };

  btn.addEventListener('mouseenter', () => {
    clearTimers();
    textEl.textContent = '';
    textEl.style.display = 'inline-block';
    textEl.style.opacity = '1';
    let i = 0;
    typingTimer = setInterval(() => {
      i += 1;
      textEl.textContent = full.slice(0, i);
      if (i >= full.length) {
        clearTimers();
      }
    }, 90);
  });

  btn.addEventListener('mouseleave', () => {
    clearTimers();
    deletingTimer = setInterval(() => {
      const cur = textEl.textContent;
      if (!cur || cur.length === 0) {
        textEl.style.opacity = '0';
        textEl.style.display = 'none';
        clearTimers();
        return;
      }
      // remove one char to simulate backspace
      textEl.textContent = cur.slice(0, -1);
    }, 60);
  });
});
