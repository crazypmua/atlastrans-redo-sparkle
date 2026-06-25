export type SiteAssets = {
  logo: string;
  hero: string;
  trust: string;
  clientsBg: string;
};

export function extractSiteParts(siteHtml: string) {
  const styleMatch = siteHtml.match(/<style>([\s\S]*?)<\/style>/);
  const bodyMatch = siteHtml.match(/<body>([\s\S]*?)<\/body>/);
  return {
    rawStyles: styleMatch ? styleMatch[1] : "",
    rawBody: bodyMatch ? bodyMatch[1] : "",
  };
}

export function buildOverrideStyles(assets: SiteAssets) {
  const { hero, trust, clientsBg } = assets;

  return `
  .site-nav .logo, footer .f-logo { gap: .6rem; }
  .site-nav .logo img { height: 56px !important; width: auto !important; display: block; border-radius: 8px; }
  footer .f-logo img { height: 48px !important; width: auto !important; display: block; border-radius: 6px; }

  #hero {
    background-image: linear-gradient(115deg, rgba(11,26,46,.92) 0%, rgba(18,48,92,.78) 45%, rgba(11,26,46,.55) 75%, rgba(11,26,46,.85) 100%), url(${hero});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .hero-grid { grid-template-columns: 1fr !important; }
  .hero-visual { display: none !important; }
  .hero-inner { max-width: 760px !important; }

  .trust-row { display: grid; grid-template-columns: 1.05fr .95fr; gap: 2.5rem; align-items: stretch; margin-top: 1.5rem; }
  .trust-row .trust-doc { margin: 0; max-width: none; }
  .trust-side {
    border-radius: 16px; overflow: hidden;
    background: url(${trust}) center/cover no-repeat;
    min-height: 420px;
    box-shadow: 0 20px 50px -20px rgba(11,26,46,.35);
  }
  @media (max-width: 860px) {
    .trust-row { grid-template-columns: 1fr; }
    .trust-side { min-height: 240px; }
  }

  #forwhom {
    background-image: linear-gradient(180deg, rgba(11,26,46,.92) 0%, rgba(11,26,46,.88) 100%), url(${clientsBg}) !important;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
  }
  .whom-card { background: rgba(255,255,255,.06) !important; backdrop-filter: blur(6px); border: 1px solid rgba(255,255,255,.08); }
  .whom-icon { display: none !important; }

  #hero { padding-top: 6rem; padding-bottom: 6rem; }
  .hero-inner { max-width: 880px !important; }
  .hero-brand {
    font-family: var(--font-display, ui-sans-serif, system-ui);
    font-weight: 800;
    letter-spacing: .14em;
    font-size: clamp(2.6rem, 6.5vw, 5.25rem);
    line-height: 1;
    color: #fff;
    margin: 0 0 1.4rem;
    text-shadow: 0 8px 40px rgba(0,0,0,.35);
  }
  .hero-brand .dot { color: #f5a623; }
  .hero-headline {
    font-size: clamp(1.45rem, 2.6vw, 2rem) !important;
    line-height: 1.25 !important;
    margin: 0 0 1rem !important;
    color: #fff;
    font-weight: 600;
  }
  .hero-lead {
    font-size: 1.05rem; line-height: 1.6; color: rgba(255,255,255,.86);
    max-width: 720px; margin: 0 0 1.4rem;
  }
  .hero-bullets { list-style: none; padding: 0; margin: 0 0 1.8rem; display: grid; gap: .55rem; }
  .hero-bullets li { display: flex; align-items: center; gap: .65rem; color: #fff; font-weight: 500; }
  .hero-bullets li::before {
    content: ""; width: 22px; height: 22px; border-radius: 50%;
    background: #16a34a url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>") center/14px no-repeat;
    flex: 0 0 22px;
  }
  .hero-cta {
    display: inline-block; padding: 1rem 2.2rem; border-radius: 999px;
    background: linear-gradient(135deg, #f5a623, #e07b00);
    color: #0b1a2e !important; font-weight: 700; letter-spacing: .02em;
    box-shadow: 0 14px 34px -10px rgba(245,166,35,.55);
    transition: transform .25s ease, box-shadow .25s ease;
    border: none; cursor: pointer; font-size: 1rem;
  }
  .hero-cta:hover { transform: translateY(-2px); box-shadow: 0 20px 42px -10px rgba(245,166,35,.7); }
  .hero-license {
    margin-top: .9rem; display: flex; align-items: center; gap: .5rem;
    color: rgba(255,255,255,.7); font-size: .78rem; line-height: 1.3;
  }
  .hero-license b { font-weight: 500; color: rgba(255,255,255,.85); }
  .hero-license small { font-size: .72rem; opacity: .8; margin-left: .35rem; }

  .reveal { opacity: 0; transform: translateY(28px); transition: opacity .8s ease, transform .9s cubic-bezier(.2,.7,.2,1); will-change: opacity, transform; }
  .reveal-left { opacity: 0; transform: translateX(-40px); transition: opacity .8s ease, transform .9s cubic-bezier(.2,.7,.2,1); }
  .reveal-right { opacity: 0; transform: translateX(40px); transition: opacity .8s ease, transform .9s cubic-bezier(.2,.7,.2,1); }
  .reveal-zoom { opacity: 0; transform: scale(.92); transition: opacity .7s ease, transform .8s cubic-bezier(.2,.8,.2,1); }
  .reveal.is-visible, .reveal-left.is-visible, .reveal-right.is-visible, .reveal-zoom.is-visible { opacity: 1; transform: none; }
  .reveal-delay-1 { transition-delay: .08s; }
  .reveal-delay-2 { transition-delay: .18s; }
  .reveal-delay-3 { transition-delay: .28s; }
  .reveal-delay-4 { transition-delay: .38s; }
  .reveal-delay-5 { transition-delay: .48s; }
  .reveal-delay-6 { transition-delay: .58s; }

  .card, .why-item, .whom-card { transition: transform .35s ease, box-shadow .35s ease; }
  .card:hover, .why-item:hover, .whom-card:hover { transform: translateY(-6px); box-shadow: 0 24px 50px -24px rgba(11,26,46,.35); }

  @keyframes at-hero-zoom { from { background-size: 110% auto; } to { background-size: 118% auto; } }
  #hero { animation: at-hero-zoom 18s ease-in-out infinite alternate; }

  @media (prefers-reduced-motion: reduce) {
    .reveal, .reveal-left, .reveal-right, .reveal-zoom { opacity: 1; transform: none; transition: none; }
    #hero { animation: none; }
  }

  .at-modal { position: fixed; inset: 0; z-index: 9999; display: none; align-items: center; justify-content: center; padding: 1rem; }
  .at-modal.is-open { display: flex; animation: at-fade .25s ease; }
  .at-modal-backdrop { position: absolute; inset: 0; background: rgba(11,26,46,.72); backdrop-filter: blur(6px); }
  .at-modal-panel {
    position: relative; max-width: 560px; width: 100%;
    background: #fff; border-radius: 18px; padding: 2rem 1.8rem;
    box-shadow: 0 30px 80px -20px rgba(0,0,0,.5);
    animation: at-pop .35s cubic-bezier(.2,.8,.2,1);
    max-height: 92vh; overflow: auto;
  }
  .at-modal-close {
    position: absolute; top: .7rem; right: .8rem;
    width: 38px; height: 38px; border-radius: 50%; border: none;
    background: #f3f4f6; color: #0b1a2e; font-size: 1.2rem; cursor: pointer;
  }
  .at-modal-close:hover { background: #e5e7eb; }
  .at-modal h3 { margin: 0 0 .35rem; font-size: 1.4rem; color: #0b1a2e; }
  .at-modal p.at-modal-sub { margin: 0 0 1.2rem; color: #475569; font-size: .95rem; }
  @keyframes at-fade { from { opacity: 0; } to { opacity: 1; } }
  @keyframes at-pop { from { opacity: 0; transform: translateY(20px) scale(.96); } to { opacity: 1; transform: none; } }
`;
}

const newHero = `
<section id="hero">
  <div class="hero-grid">
    <div class="hero-inner">
      <div class="hero-brand reveal">ATLAS TRANS<span class="dot">.</span></div>
      <h1 class="hero-headline reveal reveal-delay-1">Закриваємо всі питання ЗЕД для вашого бізнесу</h1>
      <p class="hero-lead reveal reveal-delay-2">Працюємо як зовнішній відділ ЗЕД: організовуємо імпорт, митне оформлення, сертифікацію, міжнародну логістику та супроводжуємо поставку до її завершення.</p>
      <ul class="hero-bullets reveal reveal-delay-3">
        <li>Повний аутсорс ЗЕД</li>
        <li>Авторизований митний брокер України</li>
        <li>Один підрядник для всіх задач</li>
      </ul>
      <button type="button" class="hero-cta reveal reveal-delay-4" data-open-contact>Обговорити задачу</button>
      <div class="hero-license reveal reveal-delay-5">
        <span class="hero-auth-dot" style="width:6px;height:6px;border-radius:50%;background:#22c55e;display:inline-block;"></span>
        <span><b>Авторизований митний брокер</b><small>Ліцензія № UACBR126002924</small></span>
      </div>
    </div>
  </div>
</section>`;

export function applyAssetPaths(body: string, assets: SiteAssets) {
  return body
    .replace(/(["'(])\/?logo\.png/g, `$1${assets.logo}`)
    .replace(/(["'(])\/?hero-logistics\.jpg/g, `$1${assets.hero}`)
    .replace(/(["'(])\/?trust-broker\.jpg/g, `$1${assets.trust}`)
    .replace(/(["'(])\/?clients-bg\.jpg/g, `$1${assets.clientsBg}`);
}

export function buildSiteBody(rawBody: string) {
  let body = rawBody;

  body = body.replace(
    /<section id="trust">([\s\S]*?)<\/section>/,
    (_m, inner) => {
      if (inner.includes('class="trust-row"')) return `<section id="trust">${inner}</section>`;
      const idx = inner.indexOf('<div class="trust-doc">');
      if (idx === -1) return `<section id="trust">${inner}</section>`;
      const head = inner.slice(0, idx);
      const doc = inner.slice(idx);
      return `<section id="trust">${head}<div class="trust-row">${doc}<div class="trust-side reveal-right" aria-hidden="true"></div></div></section>`;
    },
  );

  body = body.replace(/<section id="hero">[\s\S]*?<\/section>/, newHero);
  body = body.replace(/href="#contact"/g, 'href="#contact" data-open-contact');

  body = body
    .replace(/<h2(\s+class=")([^"]*)"/g, '<h2$1$2 reveal"')
    .replace(/<h2>/g, '<h2 class="reveal">')
    .replace(/<h2(\s+)(?!class=)/g, '<h2 class="reveal"$1')
    .replace(/class="card(\s|")/g, 'class="card reveal-zoom$1')
    .replace(/class="trust-doc(\s|")/g, 'class="trust-doc reveal-left$1');

  return body;
}

export function initSiteInteractions() {
  const revealEls = document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right, .reveal-zoom");
  document.querySelectorAll<HTMLElement>(".cards, .why-grid, .whom-grid").forEach((grid) => {
    Array.from(grid.children).forEach((child, i) => {
      (child as HTMLElement).style.transitionDelay = `${Math.min(i * 90, 540)}ms`;
    });
  });
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  revealEls.forEach((el) => io.observe(el));

  const contactSection = document.getElementById("contact");
  const modal = document.createElement("div");
  modal.className = "at-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `
    <div class="at-modal-backdrop" data-close></div>
    <div class="at-modal-panel">
      <button type="button" class="at-modal-close" aria-label="Закрити" data-close>×</button>
      <h3>Обговорити задачу</h3>
      <p class="at-modal-sub">Залиште контакти — повернемося протягом робочого дня.</p>
      <div class="at-modal-form-slot"></div>
    </div>`;
  document.body.appendChild(modal);

  const slot = modal.querySelector(".at-modal-form-slot")!;
  const formBox = contactSection?.querySelector(".form-box");
  if (formBox) slot.appendChild(formBox);
  if (contactSection) contactSection.style.display = "none";

  const openModal = () => {
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  const onTriggerClick = (e: Event) => {
    const t = (e.target as HTMLElement).closest("[data-open-contact]");
    if (!t) return;
    e.preventDefault();
    openModal();
  };
  document.addEventListener("click", onTriggerClick);

  const onModalClick = (e: Event) => {
    if ((e.target as HTMLElement).hasAttribute("data-close")) closeModal();
  };
  modal.addEventListener("click", onModalClick);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
  };
  document.addEventListener("keydown", onKey);

  const form = document.querySelector<HTMLFormElement>(".form-box form");
  const phone = document.querySelector<HTMLInputElement>("#phone");
  if (form && phone) {
    const format = (raw: string) => {
      let d = raw.replace(/\D/g, "");
      if (d.startsWith("380")) d = d.slice(3);
      if (d.startsWith("0")) d = d.slice(1);
      d = d.slice(0, 9);
      let out = "+38";
      if (d.length > 0) out += " (0" + d.slice(0, 2);
      if (d.length >= 2) out += ")";
      if (d.length > 2) out += " " + d.slice(2, 5);
      if (d.length > 5) out += " " + d.slice(5, 7);
      if (d.length > 7) out += " " + d.slice(7, 9);
      return out;
    };
    const onInput = () => {
      phone.value = format(phone.value);
      phone.setCustomValidity("");
    };
    phone.addEventListener("input", onInput);

    const onSubmit = (e: Event) => {
      const digits = phone.value.replace(/\D/g, "");
      const ok = /^380\d{9}$/.test(digits);
      if (!ok) {
        e.preventDefault();
        phone.setCustomValidity("Введіть коректний номер у форматі +38 (0XX) XXX XX XX");
        phone.reportValidity();
        phone.focus();
      } else {
        phone.setCustomValidity("");
      }
    };
    form.addEventListener("submit", onSubmit);
  }

  return () => {
    io.disconnect();
    document.removeEventListener("click", onTriggerClick);
    document.removeEventListener("keydown", onKey);
    modal.remove();
    if (contactSection) contactSection.style.display = "";
  };
}

// Plain JS for static index.html (no TypeScript syntax)
export const siteInteractionsScript = `
(() => {
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');
  document.querySelectorAll('.cards, .why-grid, .whom-grid').forEach((grid) => {
    Array.from(grid.children).forEach((child, i) => {
      child.style.transitionDelay = Math.min(i * 90, 540) + 'ms';
    });
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));

  const contactSection = document.getElementById('contact');
  const modal = document.createElement('div');
  modal.className = 'at-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.innerHTML = '<div class="at-modal-backdrop" data-close></div><div class="at-modal-panel"><button type="button" class="at-modal-close" aria-label="Закрити" data-close>×</button><h3>Обговорити задачу</h3><p class="at-modal-sub">Залиште контакти — повернемося протягом робочого дня.</p><div class="at-modal-form-slot"></div></div>';
  document.body.appendChild(modal);
  const slot = modal.querySelector('.at-modal-form-slot');
  const formBox = contactSection && contactSection.querySelector('.form-box');
  if (formBox && slot) slot.appendChild(formBox);
  if (contactSection) contactSection.style.display = 'none';
  const openModal = () => { modal.classList.add('is-open'); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { modal.classList.remove('is-open'); document.body.style.overflow = ''; };
  document.addEventListener('click', (e) => { if (e.target.closest('[data-open-contact]')) { e.preventDefault(); openModal(); } });
  modal.addEventListener('click', (e) => { if (e.target.hasAttribute('data-close')) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
  const form = document.querySelector('.form-box form');
  const phone = document.getElementById('phone');
  if (form && phone) {
    const format = (raw) => {
      let d = raw.replace(/\\D/g, '');
      if (d.startsWith('380')) d = d.slice(3);
      if (d.startsWith('0')) d = d.slice(1);
      d = d.slice(0, 9);
      let out = '+38';
      if (d.length > 0) out += ' (0' + d.slice(0, 2);
      if (d.length >= 2) out += ')';
      if (d.length > 2) out += ' ' + d.slice(2, 5);
      if (d.length > 5) out += ' ' + d.slice(5, 7);
      if (d.length > 7) out += ' ' + d.slice(7, 9);
      return out;
    };
    phone.addEventListener('input', () => { phone.value = format(phone.value); phone.setCustomValidity(''); });
    form.addEventListener('submit', (e) => {
      const digits = phone.value.replace(/\\D/g, '');
      if (!/^380\\d{9}$/.test(digits)) {
        e.preventDefault();
        phone.setCustomValidity('Введіть коректний номер у форматі +38 (0XX) XXX XX XX');
        phone.reportValidity();
        phone.focus();
      } else { phone.setCustomValidity(''); }
    });
  }
})();
`;

export function buildStaticHtml(siteHtml: string, assets: SiteAssets) {
  const { rawStyles } = extractSiteParts(siteHtml);
  const body = buildSiteBody(extractSiteParts(siteHtml).rawBody);
  const bodyWithAssets = applyAssetPaths(body, assets);
  const overrideStyles = buildOverrideStyles(assets);

  return `<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Atlas Trans — Відділ ЗЕД на аутсорсі</title>
  <meta name="description" content="Митне оформлення, імпорт під ключ та сертифікація. Atlas Trans — ваш зовнішньоекономічний відділ на аутсорсі." />
  <style>${rawStyles}</style>
  <style>${overrideStyles}</style>
</head>
<body>
${bodyWithAssets}
<script>${siteInteractionsScript}</script>
</body>
</html>`;
}
