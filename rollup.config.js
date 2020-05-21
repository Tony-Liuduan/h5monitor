/**
 * @fileoverview rollup config
 * @author liuduan
 * @Date 2020-05-17 15:16:46
 * @LastEditTime 2020-05-21 19:01:34
 */
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default {
    input: 'src/index.ts',
    output: {
        file: 'lib/h5monitor.min.js',
        format: 'iife',
        sourcemap: false,
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env'],
        }),
        typescript(),

    ],
}