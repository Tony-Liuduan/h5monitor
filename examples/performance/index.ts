import Monitor from '../../src/';

new Monitor({
    logUrl: 'http://localhost:9000/api/log'
});

// 模拟一个长任务
const start = Date.now();
while (Date.now() - start < 1000) { }
