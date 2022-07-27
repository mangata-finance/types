import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.mjs",
        format: "es",
        plugins: [terser()]
      },
      {
        file: "dist/index.js",
        format: "cjs",
        plugins: [terser()]
      }
    ],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })]
  }
];
