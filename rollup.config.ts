import { main, unpkg, name, module } from './package.json'
import typescript from 'rollup-plugin-typescript2'
import sourceMaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'
import camelCase from 'lodash.camelcase'

const moduleName = camelCase(name)

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: module,
      format: 'es',
      sourcemap: true
    },
    {
      file: unpkg,
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
