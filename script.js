  const sectionOrder = ['home','skills', 'projects','social','about','contact'];

  function showSection(id) {
    const current = document.querySelector('section.active');
    const next = document.getElementById(id);

    if (!current || !next || current === next) return;

    const currentIndex = sectionOrder.indexOf(current.id);
    const nextIndex = sectionOrder.indexOf(id);
    const direction = nextIndex > currentIndex ? 1 : -1;

    current.classList.remove('active');
    current.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
    current.style.transform = `translateX(${-100 * direction}%)`;
    current.style.opacity = 0;

    next.style.display = 'block';
    next.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
    next.style.transform = `translateX(${100 * direction}%)`;
    next.style.opacity = 0;

    requestAnimationFrame(() => {
      next.classList.add('active');
      next.style.transform = 'translateX(0)';
      next.style.opacity = 1;
    });
  }

  document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
  });

  const matrixContainer = document.querySelector('.matrix');
  for (let i = 0; i < 300; i++) {
    const span = document.createElement('span');
    span.textContent = "."
    span.style.left = `${Math.random() * 100}%`;
    span.style.animationDuration = `${Math.random() * 5 + 5}s`;
    matrixContainer.appendChild(span);
  }
  hoverText.addEventListener('animationend', (event) => {
    if (event.animationName === 'typing') {
      hoverText.style.borderRight = 'none';
    }
  });