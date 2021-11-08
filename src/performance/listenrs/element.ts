export const onElement = (entryList: PerformanceEntryList, observer: PerformanceObserver) => {
    entryList.forEach(entry => {
        console.log('onElement', entry);
    });
    observer.disconnect();
};
