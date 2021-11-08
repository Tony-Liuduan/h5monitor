import { version } from '../package.json';
import type { MonitorOptions } from './types';

export default class Monitor {
    private v = version;
    constructor(options: MonitorOptions) {
        const logUrl = options.logUrl;
        console.log(options, this.v);
        if (!logUrl) {
            throw new Error(`系统监控平台${this.v}提示未传递logUrl`);
        }
        this.main();
    }

    main() {}
}
