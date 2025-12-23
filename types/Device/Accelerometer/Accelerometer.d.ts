declare namespace KuaiShouWebMinigame {
    /**
    * startAccelerometer 中 interval 的合法值
    */
    type AccelerometerInterval = 'game' | 'ui' | 'normal';

    /**
     * 加速度数据事件的回调参数
     */
    interface AccelerometerChangeResult {
        /** X 轴加速度 */
        x: number;
        /** Y 轴加速度 */
        y: number;
        /** Z 轴加速度 */
        z: number;
    }

    /**
     * startAccelerometer 接口的入参
     */
    interface StartAccelerometerOptions {
        /** 
         * 监听回调执行频率 @default normal
         * @description 合法值：game(20ms/次)、ui(60ms/次)、normal(200ms/次)
         */
        interval?: AccelerometerInterval;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * stopAccelerometer 接口的入参
     */
    interface StopAccelerometerOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
}