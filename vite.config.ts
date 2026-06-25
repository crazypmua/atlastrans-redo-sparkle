import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { readFileSync, writeFileSync, readdirSync, unlinkSync, existsSync } from "node:fs";
import { join } from "node:path";
import { buildStaticHtml } from "./src/lib/site-markup";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      {
        name: "generate-static-index",
        closeBundle() {
          const clientDir = join(process.cwd(), "dist", "client");
          const assetsDir = join(clientDir, "assets");
          if (!existsSync(assetsDir)) return;

          const findAsset = (prefix: string, ext: string) => {
            const file = readdirSync(assetsDir).find(
              (name) => name.startsWith(prefix) && name.endsWith(ext),
            );
            if (!file) throw new Error(`Asset not found: ${prefix}*${ext}`);
            return `./assets/${file}`;
          };

          const assets = {
            logo: findAsset("logo-", ".png"),
            hero: findAsset("hero-logistics-", ".jpg"),
            trust: findAsset("trust-broker-", ".jpg"),
            clientsBg: findAsset("clients-bg-", ".jpg"),
          };

          const siteHtml = readFileSync(
            join(process.cwd(), "src", "content", "site.html"),
            "utf8",
          );
          const html = buildStaticHtml(siteHtml, assets);
          writeFileSync(join(clientDir, "index.html"), html, "utf8");

          for (const stale of [
            "site.html",
            "client-preview.html",
            "logo.png",
            "hero-logistics.jpg",
            "trust-broker.jpg",
            "clients-bg.jpg",
          ]) {
            const path = join(clientDir, stale);
            if (existsSync(path)) unlinkSync(path);
          }

          console.log("✓ Generated dist/client/index.html (static, Lovable layout)");
        },
      },
    ],
  },
});
