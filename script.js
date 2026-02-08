

const sectionOrder = ['home', 'skills', 'projects', 'social', 'about', 'contact'];
let isTransitioning = false; 
function showSection(id) {
  if (isTransitioning) return; 
  const current = document.querySelector('section.active');
  const next = document.getElementById(id);

  if (!next || current === next) return;

  const currentIndex = current ? sectionOrder.indexOf(current.id) : 0;
  const nextIndex = sectionOrder.indexOf(id);
  const direction = nextIndex > currentIndex ? 1 : -1;

  isTransitioning = true;

  
  if (current) {
    current.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
    current.style.transform = `translateX(${-100 * direction}%)`;
    current.style.opacity = '0';
  }

  next.style.display = 'block';
  next.style.transition = 'none';
  next.style.transform = `translateX(${100 * direction}%)`;
  next.style.opacity = '0';

  next.offsetHeight;

  next.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
  next.style.transform = 'translateX(0)';
  next.style.opacity = '1';
  next.classList.add('active');

  setTimeout(() => {
    if (current) {
      current.classList.remove('active');
      current.style.display = 'none';
      current.style.transform = '';
      current.style.opacity = '';
    }
    isTransitioning = false;
  }, 600);
}



document.addEventListener('DOMContentLoaded', () => {

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('✅ Message sent successfully!');
      contactForm.reset();
    });
  }


  const matrixContainer = document.querySelector('.matrix');
  if (matrixContainer) {
    const fragment = document.createDocumentFragment(); 
    for (let i = 0; i < 300; i++) {
      const span = document.createElement('span');
      span.textContent = '.';
      span.style.left = Math.random() * 100 + '%';
      span.style.animationDuration = Math.random() * 9 + 4 + 's';
      fragment.appendChild(span);
    }
    matrixContainer.appendChild(fragment);
  }

  
  const hoverText = document.querySelector('.hover-text');
  if (hoverText) {
    hoverText.addEventListener('animationend', (e) => {
      if (e.animationName === 'typing') {
        hoverText.style.borderRight = 'none';
      }
    });
  }

});