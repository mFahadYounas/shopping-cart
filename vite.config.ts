import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
});

// // vite.config.ts

// import { defineConfig } from "vite";
// // import { resolve } from "path";

// export default defineConfig({

//   build: {
//     outDir: "dist",
//     assetsDir: "",
//     sourcemap: true,
//   },
//   resolve: {
//     extensions: [".ts", ".js", ".scss"],
//   },
//   server: {
//     open: true,
//   },
// });
