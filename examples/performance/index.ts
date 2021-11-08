import Monitor from '../../src/';

new Monitor({
    logUrl: 'http://localhost:9000/api/log',
});

const prefix = fix => input => `${fix}${input}`;

const prefixStart = prefix('start');

const prefixEnd = prefix('end');

performance.mark(prefixStart('test'));

// 模拟一个长任务
const start = Date.now();
while (Date.now() - start < 300) {}

performance.mark(prefixEnd('test'));
