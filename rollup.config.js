import alias from '@rollup/plugin-alias';
import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import summary from 'rollup-plugin-summary';

export default {
  input: ['index.js'],
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    alias({
      entries: [
        {
          find: 'lit-html/lib/shady-render.js',
          replacement: 'node_modules/lit-html/lit-html.js',
        },
      ],
    }),
    nodeResolve(),
    terser(),
    summary(),
  ],
  preserveEntrySignatures: false,
};
