document.addEventListener("DOMContentLoaded", function() {
  // Navbar toggle for mobile
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');
  
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
      const isExpanded = navbarMenu.classList.contains('active');
      navbarToggle.setAttribute('aria-expanded', isExpanded.toString());
    });

    // Close menu when clicking a nav link
    const navLinks = navbarMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navbarMenu.classList.remove('active');
        navbarToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = navbarToggle.contains(event.target) || navbarMenu.contains(event.target);
      if (!isClickInside && navbarMenu.classList.contains('active')) {
        navbarMenu.classList.remove('active');
        navbarToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

