document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Set dark mode as default
  document.body.classList.add('dark');
  
  const toggleTheme = document.getElementById('toggleTheme');
  toggleTheme.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      
      // Update the icon based on current mode
      if (document.body.classList.contains('dark')) {
          toggleTheme.innerHTML = '<i class="fas fa-sun">🌞</i>';
      } else {
          toggleTheme.innerHTML = '<i class="fas fa-moon">🌜</i>';
      }
  });
  
  // Initialize the correct icon
  toggleTheme.innerHTML = '<i class="fas fa-sun">🌞</i>';
});