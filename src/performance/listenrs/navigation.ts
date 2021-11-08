export const onNavigation = (entryList: PerformanceEntryList, observer: PerformanceObserver) => {
    observer.disconnect();

    const n = entryList.slice(-1)[0] as PerformanceNavigationTiming;

    if (!n) {
        return;
    }

    const responseStart = n.responseStart;
    const responseEnd = n.responseEnd;

    const timing = {
        // fetchStart marks when the browser starts to fetch a resource
        // responseEnd is when the last byte of the response arrives
        fetchTime: responseEnd - n.fetchStart,
        // Service worker time plus response time
        workerTime: n.workerStart > 0 ? responseEnd - n.workerStart : 0,
        // Request plus response time (network only)
        totalTime: responseEnd - n.requestStart,
        // Response time only (download)
        downloadTime: responseEnd - responseStart,
        // Time to First Byte (TTFB)
        timeToFirstByte: responseStart - n.requestStart,
        // HTTP header size
        headerSize: n.transferSize - n.encodedBodySize || 0,
        //DNS解析时间
        dnsLookupTime: n.domainLookupEnd - n.domainLookupStart,
        //TCP建立时间
        tcpTime: n.connectEnd - n.connectStart || 0,
        // 白屏时间
        whiteTime: n.responseStart - n.startTime || 0,
        //dom渲染完成时间
        domTime: n.domContentLoadedEventEnd - n.startTime || 0,
        //页面onload时间
        loadTime: n.loadEventEnd - n.startTime || 0,
        //页面解析dom耗时
        parseDomTime: n.domComplete - n.domInteractive || 0,
    };

    console.log(timing);

    return timing;
};
