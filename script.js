
    
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const headerTop = document.querySelector('.header-top');

    if(toggle && menu){
      toggle.addEventListener('click', () => menu.classList.toggle('active'));
    }
   // Scroll to section smoothly AND close menu on mobile
document.querySelectorAll('nav.menu a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu after clicking
    if(menu.classList.contains('active')){
      menu.classList.remove('active');
    }
  });
});


    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
        }
      });
    }, {threshold:0.2});

    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', () => {
      if(window.scrollY > 150) headerTop.classList.add('slide-up');
      else headerTop.classList.remove('slide-up');
  });
