function aaa() {
    // console.log('start aaaa ________________')
    var ls = new Array(10000);
    ls.fill('1');

    for (let index = 0; index < ls.length; index++) {
        let span = document.createElement('span');
        span.innerHTML = index + 1;
        document.body.appendChild(span);
    }
    // console.log('end aaaa ________________')
}

aaa();

console.warn('-----------async script: 加载阶段不会阻塞dom解析，加载完会立即执行，执行阶段阻塞dom解析，document.readyState is', document.readyState);
