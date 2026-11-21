// Builds the pages from games.js and students.js. No need to edit this file.
{
const ICONS = {
  cards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="6" width="11" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v13"/></svg>',
  book:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 5c3-1 6-1 9 1v14c-3-2-6-2-9-1z"/><path d="M21 5c-3-1-6-1-9 1v14c3-2 6-2 9-1z"/></svg>',
  sound: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19 6a8.5 8.5 0 0 1 0 12"/></svg>',
  car:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 15v-3l2-5h12l3 5v3z"/><path d="M3 15h18v3H3z"/><circle cx="7.5" cy="18.5" r="1.8" fill="currentColor"/><circle cx="16.5" cy="18.5" r="1.8" fill="currentColor"/></svg>',
  grid:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/></svg>',
  mic:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>'
};

// ---------- theme pictures (original drawings) ----------
function redPanda(){
  return `<svg viewBox="0 0 300 210" role="img" aria-label="A red panda">
  <g fill="#3f7d4a"><path d="M18 200c6-40 10-90 6-160" stroke="#6aa84f" stroke-width="8" fill="none"/>
    <ellipse cx="40" cy="70" rx="26" ry="8" transform="rotate(-30 40 70)"/><ellipse cx="44" cy="120" rx="28" ry="8" transform="rotate(25 44 120)"/>
    <path d="M282 205c-4-50-2-100 4-150" stroke="#6aa84f" stroke-width="8" fill="none"/>
    <ellipse cx="262" cy="90" rx="26" ry="8" transform="rotate(30 262 90)"/><ellipse cx="262" cy="150" rx="24" ry="7" transform="rotate(-25 262 150)"/></g>
  <path d="M210 190c40-5 60-40 45-75" stroke="#a8431f" stroke-width="30" fill="none" stroke-linecap="round"/>
  <path d="M248 140l20 6M252 120l20-2M240 162l16 12" stroke="#5a2410" stroke-width="10" stroke-linecap="round"/>
  <ellipse cx="150" cy="185" rx="70" ry="30" fill="#5a2410"/>
  <path d="M88 60l-14-38 44 18z" fill="#c2552b"/><path d="M212 60l14-38-44 18z" fill="#c2552b"/>
  <path d="M90 52l-6-20 22 10z" fill="#3a1608"/><path d="M210 52l6-20-22 10z" fill="#3a1608"/>
  <path d="M84 30l4 10M216 30l-4 10" stroke="#fff3e3" stroke-width="5" stroke-linecap="round"/>
  <ellipse cx="150" cy="105" rx="80" ry="64" fill="#c2552b"/>
  <ellipse cx="150" cy="128" rx="34" ry="26" fill="#fff3e3"/>
  <ellipse cx="102" cy="116" rx="22" ry="18" fill="#fff3e3"/><ellipse cx="198" cy="116" rx="22" ry="18" fill="#fff3e3"/>
  <ellipse cx="118" cy="76" rx="12" ry="7" fill="#fff3e3"/><ellipse cx="182" cy="76" rx="12" ry="7" fill="#fff3e3"/>
  <path d="M120 98c-2 18-10 30-22 40M180 98c2 18 10 30 22 40" stroke="#8a3517" stroke-width="7" fill="none" stroke-linecap="round"/>
  <circle cx="122" cy="96" r="9" fill="#2a1208"/><circle cx="178" cy="96" r="9" fill="#2a1208"/>
  <circle cx="125" cy="93" r="3" fill="#fff"/><circle cx="181" cy="93" r="3" fill="#fff"/>
  <ellipse cx="150" cy="118" rx="10" ry="7" fill="#2a1208"/>
  <path d="M140 132q10 9 20 0" stroke="#2a1208" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <ellipse cx="116" cy="186" rx="18" ry="12" fill="#3a1608"/><ellipse cx="184" cy="186" rx="18" ry="12" fill="#3a1608"/>
  </svg>`;
}

function bricks(){
  const b = (x,y,w,c) => {
    let studs = '';
    for (let i = 0; i < w/30; i++) studs += `<rect x="${x+8+i*30}" y="${y-9}" width="16" height="10" rx="3" fill="${c}"/><rect x="${x+8+i*30}" y="${y-9}" width="16" height="3" rx="1.5" fill="#fff" opacity=".35"/>`;
    return studs + `<rect x="${x}" y="${y}" width="${w}" height="34" rx="4" fill="${c}"/><rect x="${x}" y="${y+28}" width="${w}" height="6" rx="3" fill="#000" opacity=".15"/><rect x="${x+4}" y="${y+3}" width="${w-8}" height="4" rx="2" fill="#fff" opacity=".3"/>`;
  };
  return `<svg viewBox="0 0 300 210" role="img" aria-label="A tower of toy bricks">
  <ellipse cx="150" cy="200" rx="130" ry="8" fill="#000" opacity=".08"/>
  ${b(30,160,120,'#d62828')}${b(150,160,120,'#1d6fd6')}
  ${b(60,116,90,'#e9a400')}${b(150,116,90,'#2a9d4a')}
  ${b(90,72,120,'#1d6fd6')}
  ${b(120,28,60,'#d62828')}
  ${b(240,116,30,'#ff7a1a')}
  </svg>`;
}

function pixel(){
  const P = 10; let r = '';
  const px = (x,y,c,w=1,h=1) => { r += `<rect x="${x*P}" y="${y*P}" width="${w*P}" height="${h*P}" fill="${c}"/>`; };
  px(0,0,'#8fd0ff',30,21);
  px(23,2,'#ffd23f',4,4); px(24,3,'#fff27a',2,2);
  px(3,3,'#fff',6,2); px(5,2,'#fff',3,1); px(13,5,'#fff',5,1); px(14,4,'#fff',3,1);
  const hill = [14,13,12,12,11,11,11,12,12,13,13,12,12,11,10,10,10,11,11,12,13,13,14,14,13,13,12,12,13,14];
  hill.forEach((h,x) => { px(x,h,'#5cb83a'); px(x,h+1,'#4c9a2a'); px(x,h+2,'#8a5a2b',1,21-h-2); });
  [[2,16],[9,18],[17,17],[25,19],[6,19],[21,16]].forEach(([x,y]) => px(x,y,'#6b4421'));
  [[11,15],[19,15],[27,17]].forEach(([x,y]) => px(x,y,'#9aa0a6'));
  px(6,7,'#6b4421',1,4); px(4,4,'#2f7d1f',5,3); px(5,3,'#2f7d1f',3,1); px(5,5,'#3f9a2a',2,1);
  px(20,6,'#6b4421',1,4); px(18,3,'#2f7d1f',5,3); px(19,2,'#2f7d1f',3,1); px(21,4,'#3f9a2a',1,1);
  return `<svg viewBox="0 0 300 210" role="img" aria-label="A pixel world with hills, trees and a sun">${r}</svg>`;
}

function shepherd(){
  const T='#c8873a', L='#e0a868', D='#2a1f18', F='#a96d2c';
  return `<svg viewBox="0 0 300 210" role="img" aria-label="A German Shepherd dog standing">
  <ellipse cx="150" cy="194" rx="110" ry="7" fill="#000" opacity=".08"/>
  <circle cx="268" cy="184" r="11" fill="#cfe04a"/><path d="M259 178q9 6 18 0M259 190q9-6 18 0" stroke="#fff" stroke-width="2.5" fill="none"/>
  <path d="M74 96Q40 108 36 152Q44 166 54 156Q58 122 86 108z" fill="${T}"/>
  <path d="M74 96Q48 104 40 128" stroke="${D}" stroke-width="7" fill="none" stroke-linecap="round"/>
  <path d="M100 104Q90 132 100 150L98 184H110L116 148Q114 124 122 108z" fill="${F}"/>
  <ellipse cx="104" cy="190" rx="10" ry="5" fill="${F}"/>
  <path d="M176 116L178 186H190L192 116z" fill="${F}"/><ellipse cx="187" cy="190" rx="10" ry="5" fill="${F}"/>
  <ellipse cx="136" cy="106" rx="68" ry="31" fill="${T}"/>
  <ellipse cx="92" cy="120" rx="24" ry="28" fill="${T}"/>
  <path d="M80 112Q70 136 84 154L80 186H94L100 152Q98 132 106 116z" fill="${T}"/>
  <ellipse cx="88" cy="191" rx="11" ry="5" fill="${T}"/>
  <path d="M194 116L198 186H212L210 114z" fill="${T}"/><ellipse cx="208" cy="191" rx="11" ry="5" fill="${T}"/>
  <path d="M74 98Q86 72 138 74Q182 76 196 94Q172 102 140 100Q100 102 74 98z" fill="${D}"/>
  <ellipse cx="196" cy="112" rx="18" ry="24" fill="${L}"/>
  <path d="M164 98Q182 62 204 42L234 64Q224 92 214 118z" fill="${T}"/>
  <path d="M206 42L212 6L232 34z" fill="${D}"/><path d="M211 35L214 16L226 33z" fill="${L}"/>
  <ellipse cx="224" cy="56" rx="27" ry="21" fill="${T}"/>
  <path d="M236 46L276 56Q283 64 274 72L238 76z" fill="${T}"/>
  <path d="M206 40Q224 30 240 44L276 55L276 60L238 56Q222 52 206 48z" fill="${D}"/>
  <ellipse cx="275" cy="61" rx="6" ry="5" fill="#111"/>
  <path d="M252 72q8 4 18 0" stroke="${D}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <ellipse cx="258" cy="78" rx="5" ry="6" fill="#f07a8a"/>
  <ellipse cx="228" cy="70" rx="12" ry="7" fill="${L}"/>
  <circle cx="234" cy="52" r="4.5" fill="#3a2210"/><circle cx="235.5" cy="50.5" r="1.5" fill="#fff"/>
  <path d="M196 66L214 96" stroke="#2f7fc1" stroke-width="9" stroke-linecap="round"/>
  <circle cx="210" cy="102" r="5" fill="#ffd23f"/>
  </svg>`;
}

function robots(){
  const bot=(x,y,body,face,eyes)=>`<g transform="translate(${x} ${y})">
    <path d="M30 -2v-14" stroke="#33415c" stroke-width="3"/><circle cx="30" cy="-18" r="5" fill="#ff7a1a"/>
    <rect x="0" y="0" width="60" height="46" rx="10" fill="${body}"/>
    <rect x="8" y="8" width="44" height="28" rx="6" fill="${face}"/>
    ${eyes}
    <rect x="-6" y="16" width="6" height="14" rx="3" fill="#33415c"/><rect x="60" y="16" width="6" height="14" rx="3" fill="#33415c"/>
    <rect x="22" y="46" width="16" height="6" fill="#33415c"/>
    <rect x="4" y="52" width="52" height="40" rx="8" fill="${body}"/>
    <circle cx="18" cy="64" r="4" fill="#ff7a1a"/><circle cx="30" cy="64" r="4" fill="#ffd23f"/><circle cx="42" cy="64" r="4" fill="#3ddc97"/>
    <rect x="14" y="74" width="32" height="10" rx="3" fill="#33415c"/><rect x="17" y="77" width="10" height="4" rx="2" fill="#3ddc97"/>
    <rect x="-8" y="58" width="12" height="26" rx="6" fill="#33415c"/><rect x="56" y="58" width="12" height="26" rx="6" fill="#33415c"/>
    <rect x="12" y="92" width="12" height="16" rx="3" fill="#33415c"/><rect x="36" y="92" width="12" height="16" rx="3" fill="#33415c"/>
    <rect x="8" y="106" width="20" height="7" rx="3" fill="${body}"/><rect x="32" y="106" width="20" height="7" rx="3" fill="${body}"/></g>`;
  const gear=(cx,cy,r,c)=>{let t='';for(let i=0;i<8;i++)t+=`<rect x="${cx-r*.18}" y="${cy-r*1.3}" width="${r*.36}" height="${r*.5}" rx="2" fill="${c}" transform="rotate(${i*45} ${cx} ${cy})"/>`;return t+`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/><circle cx="${cx}" cy="${cy}" r="${r*.4}" fill="#e7f3fb"/>`;};
  return `<svg viewBox="0 0 300 210" role="img" aria-label="Three friendly robots">
  <rect width="300" height="210" rx="18" fill="#e7f3fb"/>
  <path d="M0 40h60v30h40M300 30h-50v40h-30M0 150h30v-20h20" stroke="#bcd7ea" stroke-width="3" fill="none"/>
  <circle cx="100" cy="70" r="4" fill="#bcd7ea"/><circle cx="220" cy="70" r="4" fill="#bcd7ea"/><circle cx="50" cy="130" r="4" fill="#bcd7ea"/>
  ${gear(150,34,14,'#bcd7ea')}${gear(200,52,9,'#bcd7ea')}
  <rect x="0" y="196" width="300" height="14" fill="#c9dcea"/>
  ${bot(20,82,'#4fa3e0','#1b2b45','<rect x="16" y="15" width="8" height="10" rx="2" fill="#3ddc97"/><rect x="36" y="15" width="8" height="10" rx="2" fill="#3ddc97"/>')}
  ${bot(120,82,'#ff7a1a','#1b2b45','<circle cx="21" cy="19" r="5" fill="#ffd23f"/><circle cx="39" cy="19" r="5" fill="#ffd23f"/><path d="M22 28q8 5 16 0" stroke="#ffd23f" stroke-width="2.5" fill="none" stroke-linecap="round"/>')}
  ${bot(218,82,'#3ddc97','#1b2b45','<path d="M15 21q5-6 10 0M35 21q5-6 10 0" stroke="#4fa3e0" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M24 28h12" stroke="#4fa3e0" stroke-width="3" stroke-linecap="round"/>')}
  </svg>`;
}

const ART = { 'red-panda': redPanda, bricks, pixel, 'german-shepherd': shepherd, robots };
const THEME_NAMES = { 'red-panda':'Red panda', bricks:'Toy bricks', pixel:'Pixel world', 'german-shepherd':'German Shepherd', robots:'Robots', plain:'Plain' };
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const app = document.getElementById('app');

function renderStudent(id){
  const s = STUDENTS[id];
  if (!s){ app.innerHTML = '<div class="wrap"><p class="empty">This page isn\'t set up yet.</p></div>'; return; }
  const theme = ART[s.theme] ? s.theme : 'plain';
  document.body.dataset.theme = theme;
  document.title = s.name + "'s English Corner";
  const list = (s.games || []).filter(g => GAMES[g]).map(g => {
    const G = GAMES[g];
    return `<a class="game" href="${esc(G.url)}"><span class="ic">${ICONS[G.icon] || ICONS.cards}</span><span><h2>${esc(G.name)}</h2><p>${esc(G.about)}</p><span class="go">Play →</span></span></a>`;
  }).join('');
  app.innerHTML = `<div class="wrap">
    <header class="hero"><div><h1>${esc(s.name)}'s English Corner</h1><p>Pick a game and play!</p></div>
    ${theme !== 'plain' ? `<div class="art">${ART[theme]()}</div>` : ''}</header>
    <main class="games">${list || '<p class="empty">New games are coming soon!</p>'}</main>
    <p class="foot">Made for ${esc(s.name)} by Tali</p></div>`;
}

function renderMaster(){
  document.title = 'English Corner – Teacher page';
  const base = location.href.replace(/[^/]*([?#].*)?$/, '');
  const ids = Object.keys(STUDENTS);
  const kids = ids.map(id => {
    const s = STUDENTS[id], url = base + id + '.html';
    const games = (s.games || []).map(g => `<li>${esc(GAMES[g] ? GAMES[g].name : g + ' (not found in games.js)')}</li>`).join('');
    return `<div class="kid"><h3>${esc(s.name)}</h3><div class="theme">Theme: ${esc(THEME_NAMES[s.theme] || s.theme)}</div>
      <ul>${games || '<li>No games yet</li>'}</ul>
      <div class="row"><a class="btn" href="${esc(id)}.html">Open page</a><button class="btn alt" data-copy="${esc(url)}">Copy link</button></div></div>`;
  }).join('');
  const rows = Object.keys(GAMES).map(g => `<tr><td><a href="${esc(GAMES[g].url)}">${esc(GAMES[g].name)}</a></td><td><code>${esc(g)}</code></td>${ids.map(id => `<td class="c">${(STUDENTS[id].games || []).includes(g) ? '✓' : ''}</td>`).join('')}</tr>`).join('');
  app.innerHTML = `<div class="wrap master">
    <h1>English Corner</h1><p class="lead">Teacher page. Don't share this link with students: send each child their own page.</p>
    <h2>Students</h2><div class="kids">${kids}</div>
    <h2>All games</h2><div class="scroll"><table><thead><tr><th>Game</th><th>Id</th>${ids.map(id => `<th>${esc(STUDENTS[id].name)}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div>
    <p class="note">To change who gets what, edit <code>students.js</code> in the repo. Instructions are in the README.</p></div>`;
  app.addEventListener('click', e => {
    const b = e.target.closest('[data-copy]'); if (!b) return;
    const done = () => { const t = b.textContent; b.textContent = 'Copied!'; setTimeout(() => b.textContent = t, 1500); };
    try { navigator.clipboard.writeText(b.dataset.copy).then(done, () => prompt('Copy this link:', b.dataset.copy)); }
    catch (err) { prompt('Copy this link:', b.dataset.copy); }
  });
}

if (typeof STUDENT === 'string') renderStudent(STUDENT); else renderMaster();
}
