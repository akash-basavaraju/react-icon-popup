import typescript from "rollup-plugin-typescript2";
import styles from "rollup-plugin-styles";
import del from "rollup-plugin-delete";
import resolve from "@rollup/plugin-node-resolve";
import commonToES6 from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import pkg from "./package.json";

const { argv } = process;

export default !argv.includes("--testbundle")
  ? {
      input: "./src/index.tsx",
      output: [
        {
          file: pkg.main,
          format: "cjs",
        },
        {
          file: pkg.module,
          format: "es",
        },
      ],
      external: [...Object.keys(pkg.peerDependencies || {})],
      plugins: [del({ targets: "dist/*" }), typescript(), styles()],
    }
  : {
      input: "./test/index.tsx",
      output: {
        file: "test/testBundle.js",
        format: "iife",
        name: "bundle",
        sourcemap: true,
      },
      plugins: [
        resolve(),
        commonToES6({ include: "node_modules/**" }),
        replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
        styles(),
        typescript({
          tsconfigOverride: {
            compilerOptions: {
              declaration: false,
              outDir: "/test",
              sourceMap: true,
            },
            include: ["test/*"],
          },
        }),
      ],
    };
