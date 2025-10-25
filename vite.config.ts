import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";

import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	// Base URL pour GitHub Pages - à modifier selon votre repo
	// Si le repo s'appelle "site", utilisez "/site/"
	// Si c'est un repo username.github.io, utilisez "/"
	base: "/site",
	plugins: [
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
		}),
		viteReact(),
		tailwindcss(),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	build: {
		// Optimisations pour la performance
		target: "esnext",
		minify: "terser",
		cssMinify: "lightningcss",
		terserOptions: {
			compress: {
				drop_console: true, // Supprime les console.log en production
				drop_debugger: true,
				pure_funcs: ["console.log", "console.info", "console.debug"], // Supprime les fonctions console spécifiques
				passes: 2, // Multiple passes pour meilleure compression
			},
			mangle: {
				safari10: true, // Compatibilité Safari
			},
			format: {
				comments: false, // Supprime tous les commentaires
			},
		},
		// Code splitting optimisé
		rollupOptions: {
			output: {
				// Séparation intelligente des chunks
				manualChunks: {
					// Vendor chunks
					react: ["react", "react-dom"],
					router: ["@tanstack/react-router"],
					// Garde les chunks petits pour un chargement plus rapide
				},
				// Nommage des fichiers optimisé pour le cache
				chunkFileNames: "assets/js/[name]-[hash].js",
				entryFileNames: "assets/js/[name]-[hash].js",
				assetFileNames: (assetInfo) => {
					const info = assetInfo.name?.split(".") || [];
					const ext = info[info.length - 1];
					if (/\.(png|jpe?g|svg|gif|webp|avif|ico)$/i.test(assetInfo.name || "")) {
						return "assets/images/[name]-[hash][extname]";
					}
					if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || "")) {
						return "assets/fonts/[name]-[hash][extname]";
					}
					if (ext === "css") {
						return "assets/css/[name]-[hash][extname]";
					}
					return "assets/[name]-[hash][extname]";
				},
			},
			// Optimisations Rollup
			treeshake: {
				moduleSideEffects: false,
				preset: "recommended",
			},
		},
		// Optimisations de performance
		reportCompressedSize: false, // Désactive le rapport pour build plus rapide
		chunkSizeWarningLimit: 1000, // Augmente la limite pour éviter les warnings
		sourcemap: false, // Désactive les sourcemaps en production pour fichiers plus légers
		// Optimisation CSS
		cssCodeSplit: true, // Split CSS par route pour chargement optimal
	},
	// Optimisations dev pour animations fluides
	server: {
		hmr: {
			overlay: false, // Désactive l'overlay d'erreur pour ne pas bloquer les animations
		},
	},
	// Optimisations générales
	optimizeDeps: {
		include: ["react", "react-dom", "@tanstack/react-router"],
		exclude: [], // Exclure les deps qui causent des problèmes
	},
	// Configuration pour images et assets
	assetsInclude: ["**/*.webp", "**/*.avif"],
});
