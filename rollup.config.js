import dts from "rollup-plugin-dts";

export default [
  {
    input: "build/index.js",
    output: [
      {
        file: "index.mjs",
        format: "es"
      },
      {
        file: "index.js",
        format: "cjs"
      }
    ]
  },
  {
    input: "build/index.d.ts",
    output: {
      file: "index.d.ts"
    },
    plugins: [dts()]
  }
];
