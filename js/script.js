function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  m.classList.toggle('open');
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('nav') && !e.target.closest('#mobileMenu')) {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) mobileMenu.classList.remove('open');
  }
});

function orderWA(product) {
  window.open(
    'https://wa.me/21698425955?text=Bonjour%20Verona%20Collection%2C%20je%20voudrais%20commander%20: ' +
    encodeURIComponent(product),
    '_blank'
  );
}

// ─── Nav scroll shadow ───────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 20);
});

// ─── Hero Canvas Particles ──────────────────────────────
(function () {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // Soft rose particles for the feminine theme
  const ROSE = 'rgba(232,180,184,';
  const COUNT = 120;
  const particles = Array.from({ length: COUNT }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 5.0 + 1.5,
    speed: Math.random() * 0.6 + 0.2,
    opacity: Math.random() * 0.5 + 0.2,
    drift: (Math.random() - 0.5) * 0.4,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = ROSE + p.opacity + ')';
      ctx.fill();

      p.y -= p.speed;
      p.x += p.drift;
      p.opacity += (Math.random() - 0.5) * 0.006;
      p.opacity = Math.min(0.75, Math.max(0.15, p.opacity));

      if (p.y + p.r < 0) {
        p.y = canvas.height + p.r;
        p.x = Math.random() * canvas.width;
      }
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
})();
