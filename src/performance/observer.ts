import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'web-vitals';
import { onElement } from './listenrs/element';
import { onFirstInput } from './listenrs/first-input';
import { onLargestContentfulPaint } from './listenrs/largest-contentful-paint';
import { onLayoutShift } from './listenrs/layout-shift';
import { onNavigation } from './listenrs/navigation';
import { onPaint } from './listenrs/paint';
import { onResource } from './listenrs/resource';

export const initPerformanceObserver = () => {
    console.log('⏰ 性能收集开始', Math.random());
    po('navigation', onNavigation); // dns、白屏时间
    po('paint', onPaint); // fp、fcp + (long-task)
    po('largest-contentful-paint', onLargestContentfulPaint); // 可视区域内可见的最大图像或文本块完成渲染的相对时间，https://web.dev/i18n/zh/lcp/
    po('element', onElement, true); // TODO: 测量不到数据，https://developer.mozilla.org/en-US/docs/Web/API/Element_timing_API
    po('resource', onResource, true); // 收集页面加载资源性能数据
    po('layout-shift', onLayoutShift, true); // 累计布局便宜测量，https://web.dev/i18n/zh/cls/ TODO: 测量不到数据，页面布局变化会触发
    po('first-input', onFirstInput, true); // 首次用户交互延迟，https://web.dev/fid/

    getTTFB(data => {
        // 白屏时间
        console.log('web-vitals-ttfb:', data.value);
    });
    getFCP(data => {
        // 测量 FCP
        console.log('web-vitals-fcp:', data.value);
    });
    getLCP(data => {
        // 测量 LCP
        console.log('web-vitals-lcp:', data.value);
    });
    getFID(data => {
        // 测量 FID
        console.log('web-vitals-fid:', data.value);
    });
    getCLS(data => {
        // 累计布局便宜测量
        console.log('web-vitals-cls:', data.value);
    });
};

/**
 * @description 开启 performance 性能监控
 * @param {string} entryType: window.performance.getEntries() --> entryType 属性
 * @param {function} cb
 * @return {PerformanceObserver} observer
 */
export const po = (
    entryType: string,
    listenr: (entryList: PerformanceEntryList, observer: PerformanceObserver) => void,
    buffered?: boolean
) => {
    const observer = new PerformanceObserver((entries: PerformanceObserverEntryList, observer: PerformanceObserver) => {
        listenr(entries.getEntries(), observer);
    });
    observer.observe({
        type: entryType,
        buffered: buffered ?? false, // 是否向 observer 的 buffer 中添加该条目（的 buffer），默认值是 false，监控 long-task 时需要开启 buffered
    });
    return observer;
};
