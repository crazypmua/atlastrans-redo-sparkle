import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import siteHtml from "../content/site.html?raw";
import logoUrl from "../assets/logo.png";
import heroUrl from "../assets/hero-logistics.jpg";
import trustUrl from "../assets/trust-broker.jpg";
import clientsBgUrl from "../assets/clients-bg.jpg";
import {
  applyAssetPaths,
  buildOverrideStyles,
  buildSiteBody,
  extractSiteParts,
  initSiteInteractions,
} from "../lib/site-markup";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atlas Trans — Відділ ЗЕД на аутсорсі" },
      {
        name: "description",
        content:
          "Митне оформлення, імпорт під ключ та сертифікація. Atlas Trans — ваш зовнішньоекономічний відділ на аутсорсі.",
      },
      { property: "og:title", content: "Atlas Trans — Відділ ЗЕД на аутсорсі" },
      {
        property: "og:description",
        content: "Митне оформлення, імпорт під ключ та сертифікація.",
      },
    ],
  }),
  component: Index,
});

const assets = {
  logo: logoUrl,
  hero: heroUrl,
  trust: trustUrl,
  clientsBg: clientsBgUrl,
};

const { rawStyles, rawBody } = extractSiteParts(siteHtml);
const bodyWithExtras = applyAssetPaths(buildSiteBody(rawBody), assets);
const overrideStyles = buildOverrideStyles(assets);

function Index() {
  useEffect(() => initSiteInteractions(), []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: rawStyles }} />
      <style dangerouslySetInnerHTML={{ __html: overrideStyles }} />
      <div dangerouslySetInnerHTML={{ __html: bodyWithExtras }} />
    </>
  );
}
