import { terser } from 'rollup-plugin-terser'
import del from 'rollup-plugin-delete'
/**
 * @type { import('rollup').InputOptions[] }
 */
export default {
  input: 'index.js',
  plugins: [del({ targets: 'dist/*' })],
  output: [
    {
      sourcemap: true,
      file: 'dist/tinydateformat.js',
      format: 'iife',
      name: 'tinydateformat',
      plugins: [terser()]
    },
    {
      file: 'dist/tinydateformat.mjs',
      format: 'esm'
    },
    {
      file: 'dist/tinydateformat.cjs',
      format: 'cjs'
    }
  ]
}
