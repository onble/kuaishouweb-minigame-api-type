declare namespace KuaiShouWebMinigame {
    /**
     * Android 端罗盘精度枚举值
     */
    type AndroidCompassAccuracy = 'high' | 'medium' | 'low' | 'no-contact' | 'unreliable' | `unknow ${string}`;

    /**
     * 罗盘数据变化事件的回调参数
     */
    interface CompassChangeResult {
        /** 面对的方向度数 */
        direction: number;
        /** 
         * 精度（平台差异）
         * @description iOS：number 类型，相对于磁北极的偏差（0=磁北、90=东、180=南...）；Android：string 枚举值（high/medium/low/no-contact/unreliable/unknow ${value}）
         */
        accuracy: number | AndroidCompassAccuracy;
    }

    /**
     * startCompass 接口的入参
     */
    interface StartCompassOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * stopCompass 接口的入参
     */
    interface StopCompassOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
}