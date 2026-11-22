// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
	site: "https://opervia.host",
	output: "static",
	integrations: [sitemap()],
	build: { inlineStylesheets: "never" },
	vite: { build: { assetsInlineLimit: 0 } },
});
