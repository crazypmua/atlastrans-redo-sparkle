import { createFileRoute } from "@tanstack/react-router";
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
  #trust { display: grid; grid-template-columns: 1.1fr .9fr; gap: 3rem; align-items: center; }
  #trust .trust-side {
    border-radius: 16px; overflow: hidden;
    background: url(${trustUrl}) center/cover no-repeat;
    min-height: 420px;
    box-shadow: 0 20px 50px -20px rgba(11,26,46,.35);
  }
  @media (max-width: 860px) {
    #trust { grid-template-columns: 1fr; }
    #trust .trust-side { min-height: 240px; }
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

// Inject trust-side div into #trust
const bodyWithExtras = rawBody.replace(
  /<section id="trust">([\s\S]*?)<\/section>/,
  `<section id="trust"><div class="trust-main">$1</div><div class="trust-side" aria-hidden="true"></div></section>`
);

function Index() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: rawStyles }} />
      <style dangerouslySetInnerHTML={{ __html: overrideStyles }} />
      <div dangerouslySetInnerHTML={{ __html: bodyWithExtras }} />
    </>
  );
}
