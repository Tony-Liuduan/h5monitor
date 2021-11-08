export const onLayoutShift = (entryList: PerformanceEntryList, observer: PerformanceObserver) => {
    let value = 0;
    entryList.forEach((entry: any) => {
        if (entry && !entry.hadRecentInput && entry.value) {
            console.log('cls', entry.value);
            value += entry.value;
        }
    });
    console.log(value);
    observer.disconnect();
};
