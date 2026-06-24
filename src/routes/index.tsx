import { createFileRoute } from "@tanstack/react-router";
import siteHtml from "../../public/site.html?raw";
import logoUrl from "../assets/logo.png";
import heroUrl from "../assets/hero-logistics.jpg";

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
`;

function Index() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: rawStyles }} />
      <style dangerouslySetInnerHTML={{ __html: overrideStyles }} />
      <div dangerouslySetInnerHTML={{ __html: rawBody }} />
    </>
  );
}
