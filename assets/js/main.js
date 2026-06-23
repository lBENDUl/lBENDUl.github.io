// --- HELPERS ---
const SVG = {
  github: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  linkedin: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  blog: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  email: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d6ff3c" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>`,
  arrow: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowSmall: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  clock: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  send: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  check: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
  alertCircle: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  terminal: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#d6ff3c" stroke-width="2.5" stroke-linecap="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
};

// Iconos de proyectos por tipo
const PROJ_ICONS = {
  search: (color) => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  code:   (color) => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  shield: (color) => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  lock:   (color) => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
  globe:  (color) => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>`,
};

const CSS_COLOR = { lime: '#d6ff3c', indigo: '#8b8fff' };

function tagHTML(label, color = 'lime') {
  const cls = color === 'indigo' ? 'tag tag-indigo' : 'tag';
  return `<span class="${cls}">${label}</span>`;
}

// --- RENDER: NAVBAR ---
function renderNavbar() {
  const C = CONFIG;
  document.querySelector('.nav-logo').innerHTML = `
    <span class="logo-mark">${SVG.terminal}</span>
    <span>${C.name.initials} <span style="color:var(--dim);font-weight:400">/</span> portfolio</span>
  `;
  // External links
  document.querySelectorAll('[data-link="github"]').forEach(el => el.href = C.links.github);
  document.querySelectorAll('[data-link="linkedin"]').forEach(el => el.href = C.links.linkedin);
  document.querySelectorAll('[data-link="blog"]').forEach(el => el.href = C.links.blog);
}

// --- RENDER: HERO ---
function renderHero() {
  const C = CONFIG;

  // Name
  document.getElementById('hero-name').innerHTML = `
    <span class="first">${C.name.first}<span class="accent">.</span></span>
    <span class="last">${C.name.last}</span>
  `;

  // Tagline
  document.getElementById('hero-tagline').textContent = C.tagline;

  // Socials
  document.getElementById('hero-socials').innerHTML = `
    <a href="${C.links.github}" target="_blank" rel="noopener" class="hero-social">${SVG.github} GitHub</a>
    <a href="${C.links.linkedin}" target="_blank" rel="noopener" class="hero-social">${SVG.linkedin} LinkedIn</a>
    <a href="${C.links.blog}" target="_blank" rel="noopener" class="hero-social">${SVG.blog} Blog / Notas</a>
  `;

  // Stats
  document.getElementById('hero-stats').innerHTML = C.stats
    .map(s => `<div class="stat-card"><span class="stat-value">${s.value}</span><span class="stat-label">${s.label}</span></div>`)
    .join('');
}

//  --- RENDER: ABOUT ---
function renderAbout() {
  const C = CONFIG;

  // Bio
  document.getElementById('about-bio').innerHTML =
    C.bio.map(p => `<p class="bio-text">${p}</p>`).join('');
  document.getElementById('philosophy-quote').textContent = C.philosophyQuote;

  // Education
  document.getElementById('edu-list').innerHTML = C.education.map(e => `
    <div class="edu-item ${e.highlight ? 'highlight' : ''}">
      <span class="edu-icon">${e.icon}</span>
      <div>
        <p class="edu-title">${e.title}</p>
        <p class="edu-meta">${e.institute} · ${e.year}${e.highlight ? ' <span class="edu-badge">★ Top</span>' : ''}</p>
      </div>
    </div>
  `).join('');

  // Dev skills
  document.getElementById('skill-bars').innerHTML = C.devSkills.map(s => `
    <div class="skill-item skill-bar-item" data-level="${s.level}" data-color="${CSS_COLOR[s.color]}">
      <div class="skill-row">
        <span class="skill-name">${s.name}</span>
        <span class="skill-pct" style="color:${CSS_COLOR[s.color]}">${s.level}%</span>
      </div>
      <div class="skill-track"><div class="skill-fill" style="background:${CSS_COLOR[s.color]}"></div></div>
    </div>
  `).join('');

  // Sec tags
  document.getElementById('sec-tags').innerHTML = C.secTags
    .map(t => tagHTML(t.label, t.color)).join('');
}

//  --- RENDER: PROJECTS ---
function renderProjects() {
  const C = CONFIG;
  const statusLabels = { completed: 'Completado', 'in-progress': 'En desarrollo', paused: 'Pausado' };

  document.getElementById('projects-grid').innerHTML = C.projects.map(p => {
    const iconColor = CSS_COLOR[p.iconColor] || '#d6ff3c';
    const iconFn = PROJ_ICONS[p.iconType] || PROJ_ICONS.code;
    const tagsHTML = p.tags.map(t => tagHTML(t.label, t.color)).join('');
    const linkHTML = p.repoUrl
      ? `<a href="${p.repoUrl}" target="_blank" rel="noopener" class="proj-link">${SVG.github} GitHub</a>`
      : `<span class="proj-link" style="opacity:.4;cursor:default">Privado — En desarrollo</span>`;

    return `
      <div class="reveal">
        <article class="card proj-card">
          <div class="proj-header">
            <div class="proj-icon">${iconFn(iconColor)}</div>
            <div class="proj-badges">
              <span class="proj-status ${p.status}">${statusLabels[p.status] || p.status}</span>
              <span class="tag tag-white">${p.category}</span>
            </div>
          </div>
          <h3 class="proj-title">${p.title}</h3>
          <p class="proj-desc">${p.desc}</p>
          <div class="proj-tags">${tagsHTML}</div>
          <div class="proj-links">${linkHTML}</div>
        </article>
      </div>
    `;
  }).join('');
}

// --- RENDER: HTB ---
function renderHTB() {
  const C = CONFIG;
  const circum = 2 * Math.PI * 26; // radio 26

  // Certificaciones
  document.getElementById('htb-certs').innerHTML = C.htbCerts.map(cert => {
    const color = CSS_COLOR[cert.color];
    const profileLink = cert.showProfileLink
      ? `<a href="${C.links.htb}" target="_blank" rel="noopener"
           style="display:inline-flex;align-items:center;gap:5px;font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--dim);margin-top:12px;transition:color .2s"
           onmouseover="this.style.color='var(--lime)'" onmouseout="this.style.color='var(--dim)'">
           Ver perfil HTB ${SVG.arrowSmall}
         </a>`
      : '';

    return `
      <div class="htb-course-card" id="htb-${cert.id}">
        <div class="htb-course-header">
          <div>
            <p class="htb-cert" style="color:${color}">${cert.cert}</p>
            <p class="htb-course-name">${cert.name}</p>
          </div>
          <div class="htb-ring-wrap">
            <svg width="64" height="64" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="26" fill="none" stroke="var(--border2)" stroke-width="4"/>
              <circle id="ring-${cert.id}" cx="32" cy="32" r="26" fill="none" stroke="${color}" stroke-width="4"
                stroke-dasharray="${circum.toFixed(1)}" stroke-dashoffset="${circum.toFixed(1)}" stroke-linecap="round"
                class="htb-ring"/>
            </svg>
            <span class="htb-ring-pct" style="color:${color}">${cert.progress}%</span>
          </div>
        </div>
        <div class="skill-track">
          <div class="skill-fill" id="fill-${cert.id}" style="background:${color}"></div>
        </div>
        ${profileLink}
      </div>
    `;
  }).join('');

  // Máquinas
  const DIFF_STYLE = {
    Easy:   'background:rgba(214,255,60,.1);border:1px solid rgba(214,255,60,.2);color:#d6ff3c',
    Medium: 'background:rgba(245,158,11,.1);border:1px solid rgba(245,158,11,.2);color:#f59e0b',
    Hard:   'background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);color:#ef4444',
    Insane: 'background:rgba(139,143,255,.1);border:1px solid rgba(139,143,255,.2);color:#8b8fff',
  };
  const PLAT_COLOR = { HackTheBox: '#9fef00', DockerLabs: '#00d4ff', TryHackMe: '#ff3c3c' };

  document.getElementById('machines-tbody').innerHTML = C.machines.map(m => {
    const nameCell = m.url
      ? `<a href="${m.url}" target="_blank" rel="noopener" style="color:var(--text);font-weight:500;transition:color .2s" onmouseover="this.style.color='var(--lime)'" onmouseout="this.style.color='var(--text)'">${m.name}</a>`
      : `<span style="font-weight:500">${m.name}</span>`;
    const platColor = PLAT_COLOR[m.platform] || '#8b8fa8';
    const diffStyle = DIFF_STYLE[m.difficulty] || '';

    return `
      <tr>
        <td>${nameCell}</td>
        <td><span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:${platColor}">${m.platform}</span></td>
        <td><span class="diff-badge" style="${diffStyle}">${m.difficulty}</span></td>
        <td><span style="font-size:12px;color:var(--muted)">${m.os}</span></td>
      </tr>
    `;
  }).join('');
}

// --- RENDER: BLOG ---
function renderBlog() {
  const C = CONFIG;

  document.getElementById('blog-link').href = C.links.blog;
  document.getElementById('blog-grid').innerHTML = C.blogPosts.map(post => `
    <div class="reveal">
      <a href="${post.url}" target="_blank" rel="noopener" class="card blog-card" style="display:block;padding:28px">
        <div class="blog-meta">
          <time class="blog-date">${post.date}</time>
          <span class="blog-read">${SVG.clock} ${post.readMin} min</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <div class="blog-footer">
          <div class="blog-tags">${post.tags.map(t => tagHTML(t.label, t.color)).join('')}</div>
          <svg class="blog-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--dim)" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </div>
      </a>
    </div>
  `).join('');
}

// --- RENDER: CONTACT ---
function renderContact() {
  const C = CONFIG;

  // Disponibilidad
  const availColor = C.availability.open ? 'var(--lime)' : '#ef4444';
  const availLabel = C.availability.open ? 'Disponible' : 'No disponible';
  document.getElementById('avail-dot-circle').style.background = availColor;
  document.getElementById('avail-label').textContent = availLabel;
  document.getElementById('avail-label').style.color = availColor;
  document.getElementById('avail-text').textContent = C.availability.text;

  // Links de contacto
  document.getElementById('contact-email').href = `mailto:${C.links.email}`;
  document.getElementById('contact-email-value').textContent = C.links.email;
  document.getElementById('contact-linkedin').href = C.links.linkedin;
  document.getElementById('contact-github').href = C.links.github;

  // Footer
  document.getElementById('footer-copy').textContent = C.footerCopy;
  document.querySelectorAll('[data-footer-link="github"]').forEach(el => el.href = C.links.github);
  document.querySelectorAll('[data-footer-link="linkedin"]').forEach(el => el.href = C.links.linkedin);
  document.querySelectorAll('[data-footer-link="blog"]').forEach(el => el.href = C.links.blog);
}

// --- INTERACTIVIDAD ---
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const icoMenu = document.getElementById('ico-menu');
  const icoClose = document.getElementById('ico-close');
  let menuOpen = false;

  hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.style.display = menuOpen ? 'block' : 'none';
    icoMenu.style.display = menuOpen ? 'none' : 'block';
    icoClose.style.display = menuOpen ? 'block' : 'none';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuOpen = false;
      mobileMenu.style.display = 'none';
      icoMenu.style.display = 'block';
      icoClose.style.display = 'none';
    });
  });
}

function initActiveNav() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = ['about','projects','htb','blog','contact'];
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
}

function initHeroEntrance() {
  requestAnimationFrame(() => {
    ['hero-name','hero-role','hero-tagline','hero-ctas'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.cssText = 'opacity:1;transform:translateY(0)';
    });
    setTimeout(() => {
      const socials = document.getElementById('hero-socials');
      const stats = document.getElementById('hero-stats');
      if (socials) socials.style.opacity = '1';
      if (stats) stats.style.cssText = 'opacity:1;transform:translateY(0)';
    }, 100);
  });
}

function initTypewriter() {
  const roles = CONFIG.roles;
  const tw = document.getElementById('typewriter');
  if (!tw) return;
  let ri = 0, ci = 0, del = false, paused = false;
  function tick() {
    const r = roles[ri];
    if (paused) { setTimeout(tick, 1800); paused = false; del = true; return; }
    if (!del && ci === r.length) { paused = true; setTimeout(tick, 80); return; }
    if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; }
    ci = del ? ci - 1 : ci + 1;
    tw.textContent = r.slice(0, ci);
    setTimeout(tick, del ? 38 : 75);
  }
  tick();
}

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.style.transitionDelay = (i * 60) + 'ms';
      el.classList.add('visible');
      obs.unobserve(el);
    });
  }, { rootMargin: '-50px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function initSkillBars() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, idx) => {
      if (!e.isIntersecting) return;
      const item = e.target;
      const fill = item.querySelector('.skill-fill');
      const level = item.dataset.level;
      if (!fill || !level) return;
      setTimeout(() => { fill.style.width = level + '%'; }, 600 + idx * 50);
      obs.unobserve(item);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.skill-bar-item').forEach(el => obs.observe(el));
}

function initHTBRings() {
  const circum = 2 * Math.PI * 26;
  function animateRing(id, pct) {
    const el = document.getElementById('ring-' + id);
    if (!el) return;
    const offset = circum * (1 - pct / 100);
    setTimeout(() => {
      el.style.transition = 'stroke-dashoffset 1.3s cubic-bezier(.25,.46,.45,.94)';
      el.style.strokeDashoffset = offset;
    }, 400);
  }
  function animateBar(id, pct) {
    const el = document.getElementById('fill-' + id);
    if (!el) return;
    setTimeout(() => { el.style.width = pct + '%'; }, 450);
  }

  const htbEl = document.getElementById('htb');
  if (!htbEl) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      CONFIG.htbCerts.forEach(cert => {
        animateRing(cert.id, cert.progress);
        animateBar(cert.id, cert.progress);
      });
      obs.unobserve(e.target);
    });
  }, { threshold: 0.3 });
  obs.observe(htbEl);
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('cf-submit');
    const txt = document.getElementById('cf-text');
    btn.disabled = true; txt.textContent = 'Enviando...';
    try {
      const res = await fetch(`https://formspree.io/f/${CONFIG.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      });
      if (res.ok) {
        form.reset();
        document.getElementById('cf-success').style.display = 'flex';
        txt.textContent = '¡Enviado!';
      } else throw new Error();
    } catch {
      document.getElementById('cf-error').style.display = 'flex';
      btn.disabled = false; txt.textContent = 'Enviar Mensaje';
    }
    setTimeout(() => {
      document.getElementById('cf-success').style.display = 'none';
      document.getElementById('cf-error').style.display = 'none';
      btn.disabled = false; txt.textContent = 'Enviar Mensaje';
    }, 6000);
  });
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Renderizar datos desde config
  renderNavbar();
  renderHero();
  renderAbout();
  renderProjects();
  renderHTB();
  renderBlog();
  renderContact();

  // 2. Inicializar interactividad
  initNavbar();
  initHamburger();
  initActiveNav();
  initHeroEntrance();
  initTypewriter();
  initReveal();
  initSkillBars();
  initHTBRings();
  initContactForm();
});
