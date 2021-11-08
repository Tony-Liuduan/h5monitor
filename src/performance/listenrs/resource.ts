export const onResource = (entryList: PerformanceEntryList, observer: PerformanceObserver) => {
    entryList.forEach(entry => {
        const { decodedBodySize, initiatorType, name } = entry as PerformanceResourceTiming;
        if (initiatorType) {
            // TODO: 收集性能日志 fp
            const bodySize = decodedBodySize / 1000;
            console.log('bodySize', name, initiatorType, bodySize);
        }
    });
    observer.disconnect();
};
