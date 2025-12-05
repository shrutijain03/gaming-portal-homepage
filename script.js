// script.js - populate games and handle UI interactions
document.getElementById('year').textContent = new Date().getFullYear();

const sampleGames = [
  {title: "Nebula Drift", desc: "Fast-paced space racer with neon tracks.", thumb: "assets/game1.jpg"},
  {title: "Citadel Siege", desc: "Tactical castle defense with roguelike depth.", thumb: "assets/game2.jpg"},
  {title: "Pixel Pioneers", desc: "Co-op survival with charming pixel art.", thumb: "assets/game3.jpg"},
  {title: "Voidbound", desc: "Single-player narrative with branching choices.", thumb: "assets/game4.jpg"}
];

const grid = document.getElementById('gameGrid');
const tpl = document.getElementById('gameCardTpl');

// Populate sample games
sampleGames.forEach(g=>{
  const node = tpl.content.cloneNode(true);
  node.querySelector('.thumb').src = g.thumb;
  node.querySelector('.thumb').alt = g.title + " thumbnail";
  node.querySelector('.title').textContent = g.title;
  node.querySelector('.desc').textContent = g.desc;
  node.querySelector('.play').addEventListener('click', ()=> alert('Demo launch: ' + g.title));
  node.querySelector('.info').addEventListener('click', ()=> alert(g.title + "\n\n" + g.desc));
  grid.appendChild(node);
});

// Add Tic-Tac-Toe Game Card dynamically
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

// Contact form (fake)
document.getElementById('contactForm').addEventListener('submit',(e)=>{
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const msg = document.getElementById('message').value.trim();
  const out = document.getElementById('formMsg');
  out.textContent = `Thanks ${name || 'friend'}! We received your message${msg?': "'+msg+'"':''}.`;
  e.target.reset();
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', ()=>{
  const nav = document.querySelector('.nav');
  nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
});
