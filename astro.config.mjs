import { defineConfig } from "astro/config";

import frontendistahtmlMinify from "@frontendista/astro-html-minify";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [
		icon(),
		frontendistahtmlMinify({
			// https://github.com/frontendista/astro-html-minify#13-customize-minifiers-options
			html: {
				// customise terser options
				// strip out the comments
				removeComments: true,
			},
		}),
	],
	vite: {
		esbuild: {
			// uncomment this for production!!
			// drop: ["console", "debugger"],
		},
	},
});
