/**
 * @fileoverview rollup config
 * @author liuduan
 * @Date 2020-05-17 15:16:46
 * @LastEditTime 2020-05-17 15:19:14
 */
export default {
    input: 'src/index.ts',
    output: {
        file: 'lib/h5monitor.min.js',
        format: 'iife',
        sourcemap: false,
    }
}