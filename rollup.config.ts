// import { RollupOptions } from 'rollup'
import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2'
import sourceMaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      name: pkg.name,
      extend: true,
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
