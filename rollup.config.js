import fs from 'fs';
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import replace from 'rollup-plugin-replace';
// import babel from 'rollup-plugin-babel';
// import path from 'path';
// import eslint from 'rollup-plugin-eslint';
// import uglify from 'rollup-plugin-uglify';

import deepAssign from 'deep-assign';
// const env = process.env.NODE_ENV || 'development';

const pkg = JSON.parse(fs.readFileSync('./package.json'));
const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];
console.log('external', external);

// const external = [];
const now = new Date();

const banner = `/*!
* ${pkg.name} v${pkg.version}
* https://github.com/${pkg.repository.url}
*
* Copyright (c) ${now.getFullYear()} Sönke Kluth
* Released under the ${pkg.license} license
*
* Date: ${now.toISOString()}
*/
`;

const resolver = {
  jsnext: true,
  main: true,
  browser: false,
  // customResolveOptions: {
  //   moduleDirectory: 'node_modules',
  // },
};

// const globals = {
//   // jquery: 'jQuery', // Ensure we use jQuery which is always available even in noConflict mode
//   // 'popper.js': 'Popper',
// };

const commonOutput = {
  banner,
  sourcemap: true,
  exports: 'named',
};

const defaults = config =>
  deepAssign(
    {},
    {
      input: './src/index.js',
      plugins: [
        commonjs(),
        resolve(resolver),
        // resolve(),
        // resolve({
        //   // pass custom options to the resolve plugin
        //   customResolveOptions: {
        //     moduleDirectory: 'node_modules',
        //   },
        // }),
        // replace({
        //   'process.env.NODE_ENV': JSON.stringify(env),
        // }),
        // buble({ transform: { module: false } }),
        buble(),
        // babel({
        //   exclude: "node_modules/**"
        // }),
      ],
    },
    config,
  );

const configs = [
  defaults({
    external,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        ...commonOutput,
      },
      {
        file: pkg.module,
        format: 'es',
        ...commonOutput,
      },
    ],
  }),
  defaults({
    output: [
      {
        file: pkg['umd:main'],
        format: 'umd',
        name: pkg.name,
        ...commonOutput,
      },
    ],
  }),
];

export default configs;
