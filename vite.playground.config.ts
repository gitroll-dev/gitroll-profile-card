import { defineConfig } from 'vite'


export default defineConfig({
  build: {
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
    outDir: 'playground', // Specifies the output directory for the build.
  },
  base: 'gitroll-profile-card/',
})
