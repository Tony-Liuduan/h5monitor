/**
 * @fileoverview FPS (每秒帧率检测)
 * @author liuduan
 * @Date 2020-05-18 00:40:14
 * @LastEditTime 2020-05-18 21:03:25
 * 
 * @衡量标准
 * 帧率能够达到 50 ～ 60 FPS 的动画将会相当流畅，让人倍感舒适
 * 帧率在 30 ～ 50 FPS 之间的动画，因各人敏感程度不同，舒适度因人而异
 * 帧率在 30 FPS 以下的动画，让人感觉到明显的卡顿和不适感
 * 帧率波动很大的动画，亦会使人感觉到卡顿
 */
var lastTime = performance.now();
var frame = 0;
var lastFameTime = performance.now();
var loop = function (time) {
    var now = performance.now();
    var fs = (now - lastFameTime);
    var fps = Math.round(1000 / fs);
    frame++;
    if (now - lastTime > 1000) {
        fps = Math.round((frame * 1000) / (now - lastTime));
        lastTime = now;
        frame = 0;
    }

    lastFameTime = now;

    if (fps < 30) {
        // console.log('//////////// fps //////////', fps);
    }

    window.requestAnimationFrame(loop);
};
loop();
