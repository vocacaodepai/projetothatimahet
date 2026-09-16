// Menu mobile
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Filtro de categorias do blog
  const pills = document.querySelectorAll('.category-pill');
  const posts = document.querySelectorAll('[data-category]');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.dataset.filter;
      posts.forEach(post => {
        post.style.display = (cat === 'todas' || post.dataset.category === cat) ? '' : 'none';
      });
    });
  });

  // Newsletter (placeholder de captura)
  const form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      form.innerHTML = `<p style="margin:0;font-weight:700;color:#fff;">Obrigada! Confirme seu e-mail em ${input.value} 💌</p>`;
    });
  }
});
