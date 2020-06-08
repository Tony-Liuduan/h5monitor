/**
 * @fileoverview rollup config
 * @author liuduan
 * @Date 2020-05-17 15:16:46
 * @LastEditTime 2020-06-08 11:18:25
 * 参考：https://juejin.im/post/5bf823b96fb9a049e93c61a8
 */
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import typescript from 'rollup-plugin-typescript2';
import buble from '@rollup/plugin-buble';
// import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';


const projectRootDir = path.resolve(__dirname);
export default {
    input: 'src/index.ts',
    output: {
        file: `lib/${pkg.version}/h5monitor.min.js`,
        format: 'umd',
        name: 'H5monitor',
        sourcemap: true,
        treeshake: true,
        globals: {
            window: window,
        }
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        // babel({
        //     exclude: 'node_modules/**',
        //     runtimeHelpers: true,
        //     babelHelpers: 'bundled'
        // }),
        buble({
            transforms: { dangerousForOf: true }
        }),
        alias({
            entries: [
                {
                    find: '@',
                    replacement: path.resolve(projectRootDir, 'src')
                },
            ],
        }),
        // terser({
        //     output: {
        //         ascii_only: true // 仅输出ascii字符
        //     },
        //     compress: {
        //         pure_funcs: ['console.log'] // 去掉console.log函数
        //     }
        // }),
    ],
    watch: {
        exclude: 'node_modules/**'
    },
}
