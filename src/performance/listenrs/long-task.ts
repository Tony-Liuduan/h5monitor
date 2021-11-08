export const onLongTask = (entryList: PerformanceEntryList, observer: PerformanceObserver) => {
    let totalBlockingTime = 0; // 总阻塞时长
    entryList.forEach(({ name, startTime, duration }) => {
        // 从fcp -> tti获取长耗时任务（name = self表示耗时长任务来自于渲染帧），非 self 可能来自 performance.mark()
        if (name !== 'self') {
            return;
        }
        // TODO: 开始时间小于 fcp 的不记录
        if (startTime < 0) {
            return;
        }

        //https://developer.mozilla.org/zh-CN/docs/Web/API/Long_Tasks_API
        //长耗时任务意味着执行时间超过50ms的
        const blockingTime = duration - 50;
        if (blockingTime > 0) {
            totalBlockingTime += blockingTime;
        }
    });
    observer.disconnect();
    // TODO: 收集性能日志 fcp
    console.log('totalBlockingTime', totalBlockingTime);
};
