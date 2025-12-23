declare namespace KuaiShouWebMinigame {
    /**
     * vibrateShort 中震动强度类型的合法值
     */
    type VibrateShortType = 'heavy' | 'medium' | 'light';

    /**
     * vibrateShort 失败回调参数
     */
    interface VibrateShortFailResult {
        /** 错误信息 */
        errMsg: string;
    }

    /**
     * vibrateShort 接口入参
     */
    interface VibrateShortOptions {
        /** 震动强度类型（必填），有效值：heavy、medium、light */
        type: VibrateShortType;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: VibrateShortFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * vibrateLong 接口入参
     */
    interface VibrateLongOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
}