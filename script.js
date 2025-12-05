// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Game Grid
const grid = document.getElementById('gameGrid');

// Add only Tic Tac Toe game
const ticTacToeCard = document.createElement("div");
ticTacToeCard.classList.add("game-card");
ticTacToeCard.innerHTML = `
  <img class="thumb" src="assets/hero-illustration.svg" alt="Tic Tac Toe" />
  <div class="meta">
    <h3 class="title">Tic Tac Toe</h3>
    <p class="desc">Play the classic Tic Tac Toe game, hosted on the cloud.</p>
    <div class="game-actions">
      <a class="btn small play" href="https://funny-cucurucho-0d31b4.netlify.app/" target="_blank">
        Play Now
      </a>
    </div>
  </div>
`;
grid.appendChild(ticTacToeCard);

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const msg = document.getElementById('message').value.trim();
  const out = document.getElementById('formMsg');
  out.textContent = `Thanks ${name || 'friend'}! We received your message${msg ? ': "' + msg + '"' : '.'}`;
  e.target.reset();
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
});
