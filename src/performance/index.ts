/**
 * @fileoverview 性能监控脚本入口文件
 * @author liuduan
 * @Date 2020-05-17 15:25:04
 * @LastEditTime 2020-06-08 00:40:00
 * @performance https://developer.mozilla.org/zh-CN/docs/Web/API/Performance/mark
 * @performanceObserver https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceObserver
 * @caniuse https://caniuse.com/#search=PerformanceObserver
 * @参考 https://blog.csdn.net/weixin_42098339/article/details/105872809?fps=1&locationNum=2
 */
import ttiPolyfill from 'tti-polyfill';
import { add } from '@/tools';

// get tti
ttiPolyfill.getFirstConsistentlyInteractive().then(console.log);

let a: any = '12';
console.log(a);
add(a);

a = () => {
    console.log('test');
};
