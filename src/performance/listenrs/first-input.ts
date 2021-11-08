/**
 * @description 首次输入延迟 (FID)
 * https://web.dev/fid/
 * FID 只测量事件处理过程中的"延迟"。FID 既不测量事件处理本身所花费的时间，也不测量浏览器在运行事件处理程序后更新用户界面所花费的时间
 */
export const onFirstInput = (entryList: PerformanceEntryList, observer: PerformanceObserver) => {
    const lastEntry = entryList.slice(-1)[0] as PerformanceEventTiming;
    if (lastEntry) {
        const { processingStart, startTime, duration } = lastEntry;
        // 测量输入事件的延迟操作
        const delay = processingStart - startTime;
        console.log('FID candidate:', delay, duration);
    }
    // 销毁对 FID 的注册回调 避免过多的观察者造成内存泄露
    observer.disconnect();
};
