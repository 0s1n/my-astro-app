import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";

export default defineWorkersConfig({
  test: {
    poolOptions: {
      workers: {
        // Usar la configuración de Wrangler existente
        wrangler: { configPath: "./wrangler.jsonc" },
        // Especificar el punto de entrada del Worker generado por Astro
        main: "./dist/_worker.js/index.js",
        miniflare: {
          // Configuraciones específicas de Miniflare si las necesitas
          compatibilityDate: "2024-01-01",
        },
      },
    },
  },
});
