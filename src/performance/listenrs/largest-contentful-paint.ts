export const onLargestContentfulPaint = (entryList: PerformanceEntryList, observer: PerformanceObserver) => {
    const lastEntry = entryList.slice(-1)[0] as any;
    if (lastEntry) {
        const time = Math.max(lastEntry.renderTime, lastEntry.loadTime); // 当有图片时计算图片加载时间 loadTime
        // TODO: 收集性能日志 fmp
        console.log(time, 'lcp');
    }
    observer.disconnect();
};
