document.addEventListener("DOMContentLoaded", () => {
    // Minden kártyát figyelünk: szolgáltatások kártyái
    const cards = document.querySelectorAll(".service-card");
  
// script.js
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });
  
  
    // Kártyák megfigyelése
    cards.forEach(card => {
      observer.observe(card);
    });
  });
  
// Végtelen konfetti generálása
const container = document.getElementById("confetti-container");

function createConfettiPiece() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti", `color${Math.floor(Math.random() * 5) + 1}`);
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.animationDelay = Math.random() * 5 + "s";
  confetti.style.width = (Math.random() * 6 + 4) + "px";
  confetti.style.height = (Math.random() * 6 + 4) + "px";
  container.appendChild(confetti);

  // Törlés az animáció után
  setTimeout(() => {
    confetti.remove();
  }, 6000);
}

// Indítás: folyamatos konfetti
setInterval(() => {
  for (let i = 0; i < 30; i++) {
    createConfettiPiece();
  }
}, 300); // 5 konfetti 300ms-ként

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Egyszerű validáció
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Kérlek, tölts ki minden mezőt!');
      return;
    }

    // Ha minden rendben, űrlap törlése
    form.reset();

    // Üzenet megjelenítése
    alert('Üzenet elküldve! Köszönjük!');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const shapes = document.querySelectorAll('.floating-shapes .shape');
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Minden alakzathoz véletlenszerű kezdő pozíció és sebesség
  const balls = Array.from(shapes).map(shape => ({
    el: shape,
    x: Math.random() * vw,
    y: Math.random() * vh,
    vx: (Math.random() * 4 + 2) * (Math.random() < 0.5 ? 1 : -1), // gyors és véletlenszerű irány
    vy: (Math.random() * 4 + 2) * (Math.random() < 0.5 ? 1 : -1),
  }));

  function animate() {
    balls.forEach(ball => {
      ball.x += ball.vx;
      ball.y += ball.vy;

      // Visszapattanás a képernyő széleinél
      if(ball.x <= 0 || ball.x + ball.el.offsetWidth >= vw) {
        ball.vx *= -1;
        ball.x = ball.x <= 0 ? 0 : vw - ball.el.offsetWidth;
      }
      if(ball.y <= 0 || ball.y + ball.el.offsetHeight >= vh) {
        ball.vy *= -1;
        ball.y = ball.y <= 0 ? 0 : vh - ball.el.offsetHeight;
      }

      ball.el.style.transform = `translate(${ball.x}px, ${ball.y}px)`;
    });
    requestAnimationFrame(animate);
  }

  animate();

  // Ha az ablak mérete változik, frissítjük a határokat
  window.addEventListener('resize', () => {
    balls.forEach(ball => {
      ball.x = Math.min(ball.x, window.innerWidth - ball.el.offsetWidth);
      ball.y = Math.min(ball.y, window.innerHeight - ball.el.offsetHeight);
    });
  });
});


const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Betöltéskor ellenőrizzük a beállítást
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️';
} else {
  toggleBtn.textContent = '🌙';
}

// Gomb eseménykezelő
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    toggleBtn.textContent = '☀️';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    toggleBtn.textContent = '🌙';
  }
});

