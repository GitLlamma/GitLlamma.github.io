let isSecret = false;

document.addEventListener("DOMContentLoaded", function() {
  // Navbar toggle for mobile
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');
  
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
      const isExpanded = navbarMenu.classList.contains('active');
      navbarToggle.setAttribute('aria-expanded', isExpanded);
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

  // Secret button functionality
  const secretButton = document.getElementById('secret');
  if (secretButton) {
    secretButton.addEventListener('click', secretClick);
  }
});

function secretClick() {
  isSecret = true;
  const profileImg = document.getElementById("profile");
  if (profileImg) {
    profileImg.src = "images/beardman.png";
  }
  document.body.style.backgroundColor = "black";
}

// Name animation effect
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const nameElement = document.getElementById("myName");
if (nameElement) {
  nameElement.addEventListener('mouseover', (event) => {
    if (!isSecret) {
      return;
    }
    
    let i = 0;
    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index === 4) {
            return " ";
          }
          if (index < i) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 52)];
        })
        .join("");

      if (i >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      i += 1 / 3;
    }, 40);
  });
}
