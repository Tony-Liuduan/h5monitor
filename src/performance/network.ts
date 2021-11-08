import { WN } from '../tools/constants';
import { isNavigationConnectionSupported } from '../tools/supported';

// https://www.zhangxinxu.com/wordpress/2021/04/navigator-connection-downlink/
export const getNetworkInformation = () => {
    if (isNavigationConnectionSupported()) {
        const { effectiveType, saveData, downlink, rtt } = WN.connection as unknown as {
            downlink: number;
            effectiveType: string; // 4g
            rtt: number;
            saveData: boolean;
        };

        // WN.connection.onchange = (e: any) => {
        //     console.log('onchange', e, WN.connection); // 网络类型切换触发
        // };

        // 4g false 4 100
        console.log(effectiveType, saveData, (downlink / 8) * 1024 + ' kb/s', rtt);

        return {
            downlink: (downlink / 8) * 1024 + 'kb/s', // 以 mbite/s 为单位的有效带宽，没啥用
            effectiveType, // 网络类型
            rtt, // 表示延时，表示当前连接下大致的往返时延（RTT, round-trip time ）
            saveData, // 表示用户是否设置了减少数据使用的选项，也就是设置了节流
        };
    } else {
        getSpeedWithAjax(
            'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/2076a5792e53755d069fd2c9b0edfdac.svg'
        );
    }
    return {};
};

function getSpeedWithAjax(url: string) {
    return new Promise(resolve => {
        let start = new Date().getTime();
        let end = 0;
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                end = new Date().getTime();
                // content-length = Buffer.byteLength('content'); 返回的是字节长度
                const size = Number(xhr.getResponseHeader('Content-Length')) / 1024;
                const speed = (size * 1000) / (end - start);
                console.log('speed', speed + ' kb/s');
                resolve(speed);
            }
        };
        xhr.open('GET', url);
        xhr.send();
    });
}
