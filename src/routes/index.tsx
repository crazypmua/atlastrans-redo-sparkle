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
  .replace(/\/logo\.png/g, logoUrl)
  .replace(/\/hero-logistics\.jpg/g, heroUrl);

function Index() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: rawStyles }} />
      <div dangerouslySetInnerHTML={{ __html: rawBody }} />
    </>
  );
}
