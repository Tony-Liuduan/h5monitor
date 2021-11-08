import { W, WN, WP } from './constants';

/**
 * @description 浏览器是否支持 performance api
 */
export const isPerformanceSupported = () => {
    return WP && !!WP.getEntriesByType && !!WP.now && !!WP.mark;
};

/**
 * @description 浏览器是否支持 PerformanceObserver
 */
export const isPerformanceObserverSupported = () => {
    return 'PerformanceObserver' in W;
};

/**
 * @description 浏览器是否支持网速测速
 */
export const isNavigationConnectionSupported = () => {
    return 'connection' in WN;
};
