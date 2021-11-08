/**
 * @description Moniter class config
 */
export interface MonitorConfig {
    /**
     * @description report log address
     */
    logUrl: string;
    /**
     * @description 是否开启错误追踪
     */
    openErrorTracker?: boolean;
    /**
     * @description 是否开启性能追踪
     */
    openPerformanceTracker?: boolean;
}

/**
 * @description 核心性能数据指标 observer 对象 map
 */
export interface PerformanceObserverMap {
    [key: number]: PerformanceObserver;
}
