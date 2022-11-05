// yarn add -D @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-alias @rollup/plugin-replace @rollup/plugin-eslint @rollup/plugin-typescript @rollup/plugin-babel rollup-plugin-terser rollup-plugin-clear @rollup/plugin-json
import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs' // cjs => esm
import replace from '@rollup/plugin-replace'
import eslint from '@rollup/plugin-eslint'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import clear from 'rollup-plugin-clear'
import json from '@rollup/plugin-json'
import filesize from 'rollup-plugin-filesize'

const path = require('path')

import packageJson from './package.json'

const { name, version, author } = packageJson

// 打包处理的文件，添加的备注信息
const banner =
  '/*!\n' +
  ` * ${name} v${version}\n` +
  ` * (c) 2022-${new Date().getFullYear()} ${author}\n` +
  ' * Released under the MIT License.\n' +
  ' */'

const customResolver = resolve({
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss'],
})

const projectRootDir = path.resolve(__dirname)

export default {
  input: 'src/index.ts',
  // 同时打包多种规范的产物
  output: [
    {
      file: `dist/${name}.js`,
      format: 'umd',
      name: name,
      banner,
    },
    {
      file: `dist/${name}.min.js`,
      format: 'umd',
      name: name,
      banner,
      plugins: [terser()],
    },
    {
      file: `dist/${name}.esm.js`,
      format: 'es',
      name: name,
      banner,
      plugins: [terser()],
    },
  ],
  // 注意 plugin 的使用顺序
  plugins: [
    json(),
    clear({
      targets: ['dist'],
    }),
    typescript(),
    alias({
      entries: [
        {
          find: '@/',
          replacement: path.resolve(projectRootDir, 'src/'),
          // OR place `customResolver` here. See explanation below.
        },
      ],
    }),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      preventAssignment: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    eslint({
      throwOnError: true, // 抛出异常并阻止打包
      include: ['src/**'],
      exclude: ['node_modules/**'],
    }),
    babel({ babelHelpers: 'bundled' }),
    filesize(),
  ],
}
