declare namespace KuaiShouWebMinigame {
    /**
     * 设备方向变化事件的回调参数
     */
    interface DeviceMotionChangeResult {
        /** 
         * 绕Z轴转动夹角
         * @description 手机X/Y与地球X/Y重合时，范围 [0, 2*PI)，逆时针转动为正
         */
        alpha: number;
        /** 
         * 绕X轴转动夹角
         * @description 手机Y/Z与地球Y/Z重合时，范围 [-1*PI, PI)，顶部朝地球表面转动为正
         */
        beta: number;
        /** 
         * 绕Y轴转动夹角
         * @description 手机X/Z与地球X/Z重合时，范围 [-1*PI/2, PI/2)，右边朝地球表面转动为正
         */
        gamma: number;
    }

    /**
     * startDeviceMotionListening 接口的入参
     */
    interface StartDeviceMotionListeningOptions {
        /** 
         * 监听回调执行频率 @default normal
         * @description 合法值：game(20ms/次)、ui(60ms/次)、normal(200ms/次)
         */
        interval?: 'game' | 'ui' | 'normal';
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * stopDeviceMotionListening 接口的入参
     */
    interface StopDeviceMotionListeningOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
}