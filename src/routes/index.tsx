import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import siteHtml from "../../public/site.html?raw";
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
  .replace(/(["'(])\/?hero-logistics\.jpg/g, `$1${heroUrl}`);

const overrideStyles = `
  /* Logo: blend navy background with dark navbar so only white mark shows */
  nav .logo img, footer .f-logo img {
    mix-blend-mode: screen;
  }
  nav .logo img { height: 52px !important; }
  nav .logo::after {
    content: "ATLAS TRANS";
    margin-left: .7rem;
    font-weight: 800;
    letter-spacing: .14em;
    font-size: 1rem;
    color: #fff;
  }
  footer .f-logo img { height: 44px !important; }

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
`;

// Wrap trust-doc + side image in a grid inside the trust section
const bodyWithExtras = rawBody.replace(
  /<section id="trust">([\s\S]*?)<\/section>/,
  (_m, inner) => {
    const idx = inner.indexOf('<div class="trust-doc">');
    if (idx === -1) return `<section id="trust">${inner}</section>`;
    const head = inner.slice(0, idx);
    const doc = inner.slice(idx);
    return `<section id="trust">${head}<div class="trust-row">${doc}<div class="trust-side" aria-hidden="true"></div></div></section>`;
  }
);

function Index() {
  useEffect(() => {
    const form = document.querySelector<HTMLFormElement>(".form-box form");
    const phone = document.querySelector<HTMLInputElement>("#phone");
    if (!form || !phone) return;

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
    return () => {
      phone.removeEventListener("input", onInput);
      form.removeEventListener("submit", onSubmit);
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
