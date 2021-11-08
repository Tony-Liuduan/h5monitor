import type { PerformanceObserverMap } from '../types';

export const W = window;
export const C = W.console;
export const D = document;
export const WN = window.navigator;
export const WP = W.performance;

// navigator.deviceMemory 属性返回当前计算机的内存数量（单位为 GB），该属性只读，只在 HTTPS 环境下可用
export const getDM = () => (WN as Navigator & { deviceMemory?: number }).deviceMemory ?? 0;

// cpu 核数
export const getHC = () => WN.hardwareConcurrency ?? 0;

// 维护的核心性能数据指标监控对象
export const performanceObserverMap: PerformanceObserverMap = {};
