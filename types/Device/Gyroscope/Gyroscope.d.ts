declare namespace KuaiShouWebMinigame {
    /**
     * startGyroscope 中 interval 的合法值
     */
    type GyroscopeInterval = 'game' | 'ui' | 'normal';

    /**
     * 陀螺仪数据变化事件的回调参数
     */
    interface GyroscopeChangeResult {
        /** X 轴的角速度 */
        x: number;
        /** Y 轴的角速度 */
        y: number;
        /** Z 轴的角速度 */
        z: number;
    }

    /**
     * startGyroscope 接口的入参
     */
    interface StartGyroscopeOptions {
        /** 
         * 监听回调执行频率 @default normal
         * @description 合法值：game(20ms/次)、ui(60ms/次)、normal(200ms/次)
         */
        interval?: GyroscopeInterval;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * stopGyroscope 接口的入参
     */
    interface StopGyroscopeOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

}