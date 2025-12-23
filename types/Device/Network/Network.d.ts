declare namespace KuaiShouWebMinigame {
    /**
     * 网络类型枚举值
     */
    type NetworkType = 'wifi' | '2g' | '3g' | '4g' | '5g' | 'unknown' | 'none';

    /**
     * getNetworkType 成功回调参数
     */
    interface GetNetworkTypeSuccessResult {
        /** 网络类型 */
        networkType: NetworkType;
    }

    /**
     * getNetworkType 失败回调参数
     */
    interface GetNetworkTypeFailResult {
        /** 错误信息，格式为 "getNetworkType:fail " + 详细错误信息 */
        errMsg: string;
    }

    /**
     * getNetworkType 接口入参
     */
    interface GetNetworkTypeOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: GetNetworkTypeSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: GetNetworkTypeFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * 网络状态变化事件回调参数
     */
    interface NetworkStatusChangeResult {
        /** 网络类型 */
        networkType: NetworkType;
        /** 当前是否有网络连接 */
        isConnected: boolean;
    }

}