/**
 * @fileoverview 脚本加载入口文件
 * @author liuduan
 * @Date 2020-05-17 15:06:23
 * @LastEditTime 2020-06-08 11:24:46
 */
import './performance';
import './error';

const tracker = {
    a: 'trs',
};

export default tracker;

for (const item of [1, 3, 3]) {
    console.log(item);
}

document.body.addEventListener('click', e => {
    // e.preventDefault();
    // alert(e.target);
    window.navigator.sendBeacon('http://localhost:9000/sendBeacon', 'test');
});
