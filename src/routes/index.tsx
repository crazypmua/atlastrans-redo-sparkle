import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import siteHtml from "../content/site.html?raw";
import logoUrl from "../assets/logo.png";
import heroUrl from "../assets/hero-logistics.jpg";
import trustUrl from "../assets/trust-broker.jpg";
import clientsBgUrl from "../assets/clients-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atlas Trans — Відділ ЗЕД на аутсорсі" },
      { name: "description", content: "Митне оформлення, імпорт під ключ та сертифікація. Atlas Trans — ваш зовнішньоекономічний відділ на аутсорсі." },
      { property: "og:title", content: "Atlas Trans — Відділ ЗЕД на аутсорсі" },
      { property: "og:description", content: "Митне оформлення, імпорт під ключ та сертифікація." },
    ],
  }),
  component: Index,
});

const styleMatch = siteHtml.match(/<style>([\s\S]*?)<\/style>/);
const bodyMatch = siteHtml.match(/<body>([\s\S]*?)<\/body>/);
const rawStyles = styleMatch ? styleMatch[1] : "";
const rawBody = (bodyMatch ? bodyMatch[1] : "")
  .replace(/(["'(])\/?logo\.png/g, `$1${logoUrl}`)
  .replace(/(["'(])\/?hero-logistics\.jpg/g, `$1${heroUrl}`)
  .replace(/(["'(])\/?trust-broker\.jpg/g, `$1${trustUrl}`)
  .replace(/(["'(])\/?clients-bg\.jpg/g, `$1${clientsBgUrl}`);

const overrideStyles = `
  /* Logo: show full uploaded logo image */
  nav .logo, footer .f-logo { gap: .6rem; }
  nav .logo img { height: 56px !important; width: auto !important; display: block; border-radius: 8px; }
  footer .f-logo img { height: 48px !important; width: auto !important; display: block; border-radius: 6px; }

  #hero {
    background-image: linear-gradient(115deg, rgba(11,26,46,.92) 0%, rgba(18,48,92,.78) 45%, rgba(11,26,46,.55) 75%, rgba(11,26,46,.85) 100%), url(${heroUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .hero-grid { grid-template-columns: 1fr !important; }
  .hero-visual { display: none !important; }
  .hero-inner { max-width: 760px !important; }

  /* Trust: image on the right */
  .trust-row { display: grid; grid-template-columns: 1.05fr .95fr; gap: 2.5rem; align-items: stretch; margin-top: 1.5rem; }
  .trust-row .trust-doc { margin: 0; }
  .trust-side {
    border-radius: 16px; overflow: hidden;
    background: url(${trustUrl}) center/cover no-repeat;
    min-height: 420px;
    box-shadow: 0 20px 50px -20px rgba(11,26,46,.35);
  }
  @media (max-width: 860px) {
    .trust-row { grid-template-columns: 1fr; }
    .trust-side { min-height: 240px; }
  }

  /* For whom: background image */
  #forwhom {
    background-image: linear-gradient(180deg, rgba(11,26,46,.92) 0%, rgba(11,26,46,.88) 100%), url(${clientsBgUrl}) !important;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
  }
  .whom-card { background: rgba(255,255,255,.06) !important; backdrop-filter: blur(6px); border: 1px solid rgba(255,255,255,.08); }
  .whom-icon { display: none !important; }

  /* ===== Hero redesign ===== */
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

  /* ===== Reveal-on-scroll animations ===== */
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

  /* Subtle hover lift for cards */
  .card, .why-card, .whom-card { transition: transform .35s ease, box-shadow .35s ease; }
  .card:hover, .why-card:hover, .whom-card:hover { transform: translateY(-6px); box-shadow: 0 24px 50px -24px rgba(11,26,46,.35); }

  /* Hero background slow zoom */
  @keyframes at-hero-zoom { from { background-size: 110% auto; } to { background-size: 118% auto; } }
  #hero { animation: at-hero-zoom 18s ease-in-out infinite alternate; }

  @media (prefers-reduced-motion: reduce) {
    .reveal, .reveal-left, .reveal-right, .reveal-zoom { opacity: 1; transform: none; transition: none; }
    #hero { animation: none; }
  }

  /* ===== Contact modal ===== */
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

// Wrap trust-doc + side image in a grid inside the trust section
let bodyWithExtras = rawBody.replace(
  /<section id="trust">([\s\S]*?)<\/section>/,
  (_m, inner) => {
    const idx = inner.indexOf('<div class="trust-doc">');
    if (idx === -1) return `<section id="trust">${inner}</section>`;
    const head = inner.slice(0, idx);
    const doc = inner.slice(idx);
    return `<section id="trust">${head}<div class="trust-row">${doc}<div class="trust-side" aria-hidden="true"></div></div></section>`;
  }
);

// Replace hero block with new copy + reveal classes
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
bodyWithExtras = bodyWithExtras.replace(/<section id="hero">[\s\S]*?<\/section>/, newHero);

// Make every #contact link open the modal
bodyWithExtras = bodyWithExtras.replace(/href="#contact"/g, 'href="#contact" data-open-contact');

function Index() {
  useEffect(() => {
    // Reveal-on-scroll
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));

    // Contact modal: move existing form into a modal panel
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
    if (contactSection) (contactSection as HTMLElement).style.display = "none";

    const openModal = () => { modal.classList.add("is-open"); document.body.style.overflow = "hidden"; };
    const closeModal = () => { modal.classList.remove("is-open"); document.body.style.overflow = ""; };

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
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", onKey);

    const form = document.querySelector<HTMLFormElement>(".form-box form");
    const phone = document.querySelector<HTMLInputElement>("#phone");
    let cleanupForm = () => {};
    if (form && phone) {

    // Mask: keep "+" and digits only, format as +38 (0XX) XXX XX XX
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
      const onInput = () => { phone.value = format(phone.value); phone.setCustomValidity(""); };
      phone.addEventListener("input", onInput);

      const onSubmit = (e: Event) => {
      const digits = phone.value.replace(/\D/g, "");
      // Expect 12 digits: 380 + 9 more
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
      cleanupForm = () => {
        phone.removeEventListener("input", onInput);
        form.removeEventListener("submit", onSubmit);
      };
    }

    return () => {
      io.disconnect();
      document.removeEventListener("click", onTriggerClick);
      document.removeEventListener("keydown", onKey);
      modal.remove();
      cleanupForm();
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: rawStyles }} />
      <style dangerouslySetInnerHTML={{ __html: overrideStyles }} />
      <div dangerouslySetInnerHTML={{ __html: bodyWithExtras }} />
    </>
  );
}
