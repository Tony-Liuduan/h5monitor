import { numRound2 } from '../../tools';
import { po } from '../observer';
import { onLongTask } from './long-task';

export const onPaint = (entryList: PerformanceEntryList, observer: PerformanceObserver) => {
    entryList.forEach(({ name, startTime }) => {
        switch (name) {
            case 'first-paint':
                // TODO: 收集性能日志 fp
                console.log(numRound2(startTime), 'fp');
                break;
            case 'first-contentful-paint':
                // TODO: 收集性能日志 fcp
                console.log(numRound2(startTime), 'fcp');
                // 开启长任务监控
                po('longtask', onLongTask, true);
                break;
            default:
                break;
        }
    });
    // 用于断开观察，清空 buffer，释放性能
    observer.disconnect();
};
