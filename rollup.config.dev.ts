// yarn add -D rollup-plugin-serve rollup-plugin-livereload
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import baseConfig from './rollup.config'

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    serve({
      port: '3000',
      contentBase: ['dist', 'examples/brower'],
      openPage: 'index.html',
    }),
    livereload({
      watch: 'examples/brower',
    }),
  ],
}
