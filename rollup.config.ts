import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2'
import sourceMaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'
import camelCase from 'lodash.camelcase'

const moduleName = camelCase(pkg.name).replace('Select', '')

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      name: pkg.name,
      extend: true,
      sourcemap: true
    },
    {
      file: pkg.browser,
      name: moduleName,
      format: 'iife',
      sourcemap: true
    }
  ],
  external: [],
  watch: {
    include: 'src/**'
  },
  plugins: [
    terser(),
    typescript({ useTsconfigDeclarationDir: false }),
    sourceMaps()
  ]
}

export default config
