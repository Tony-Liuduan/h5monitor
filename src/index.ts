import { version } from '../package.json';
import { monitorDefaultConfig } from './configs/monitor.config';
import { getNetworkInformation } from './performance/network';
import { initPerformanceObserver } from './performance/observer';
import { isPerformanceObserverSupported, isPerformanceSupported } from './tools/supported';
import type { MonitorConfig } from './types';

export default class Monitor {
    private readonly version = version;

    private readonly options: MonitorConfig;

    constructor(options: MonitorConfig) {
        const { logUrl } = options;
        if (!logUrl) {
            throw new Error(`monitor-${this.version} sdk options require need logUrl`);
        }
        this.options = { ...monitorDefaultConfig, ...options };
        this.main();
    }

    main() {
        if (this.options.openPerformanceTracker) {
            this.performanceTracker();
        }
        if (this.options.openErrorTracker) {
            this.errorTracker();
        }
    }

    performanceTracker() {
        // 如果浏览器不支持性能指标只能放弃
        if (!isPerformanceSupported()) {
            console.warn(
                '%c [Supported] %c sorry, your browser is not supported performance api, can not tracking performance',
                'color:yellow'
            );
            return;
        }

        // 开启性能核心指标统计
        if (isPerformanceObserverSupported()) {
            initPerformanceObserver();
        }

        // 记录用户网速
        getNetworkInformation();

        // TODO: 上报数据 requestAnimation

        // TODO: 管理离线缓存数据
        // if (WN && WN.storage && typeof WN.storage.estimate === 'function') {
        // }
    }

    errorTracker() {}
}
