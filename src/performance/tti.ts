/**
 * @fileoverview 性能监控脚本入口文件
 * @author liuduan
 * @Date 2020-05-17 15:25:04
 * @LastEditTime 2021-11-08 19:52:08
 * @performance https://developer.mozilla.org/zh-CN/docs/Web/API/Performance/mark
 * @performanceObserver https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceObserver
 * @caniuse https://caniuse.com/#search=PerformanceObserver
 * @参考 https://blog.csdn.net/weixin_42098339/article/details/105872809?fps=1&locationNum=2
 */
import ttiPolyfill from 'tti-polyfill';

// get tti
ttiPolyfill.getFirstConsistentlyInteractive().then(console.log);
