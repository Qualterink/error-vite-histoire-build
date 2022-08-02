import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
// @ts-ignore
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "vite-plugin-dts";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  base: "/test-for-reprod/",
  server: {
    port: 3000
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/entry.ts"),
      name: "test-for-reprod",
      fileName: (format) => `test-for-reprod.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        }
      },
      plugins: [
        peerDepsExternal(),
        babel({
          exclude: "node_modules/**",
          // BABEL EXTENSIONS ERROR STYLE TAG ".vue"
          extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
          babelHelpers: "bundled",
          skipPreflightCheck: true,
          presets: [["@babel/preset-env"], "@babel/preset-typescript"]
        }),
        commonjs()
      ]
    }
  },
  plugins: [
    /**
     * DTS is responsible for creating .d.ts.
     * We used this, because vue-tsc doesn't generate index.d.ts file which
     * is responsible for good recognition in default project.
     */
    dts({
      staticImport: true,
      // skipDiagnostics: false,
      // logDiagnostics: true,
      insertTypesEntry: true,
      rollupTypes: false
    }),
    vue(),
  ],
  css: {
    postcss: {
      plugins: []
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
