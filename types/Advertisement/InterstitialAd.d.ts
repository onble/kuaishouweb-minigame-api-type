declare namespace KuaiShouWebMinigame {
    /**
     * 创建插屏广告组件的入参
     */
    interface CreateInterstitialAdOptions {
        /** 广告id（必填） */
        adUnitId: string;
    }

    /**
     * onError 回调函数的参数（插屏广告）
     */
    interface InterstitialAdErrorResult {
        /** 错误信息 */
        msg: string;
        /** 
         * 错误码
         * @description 合法值：-20037（插屏播放失败）、-10005（当前app版本不支持插屏广告）
         */
        code: number;
    }

    /**
     * 插屏广告组件
     * @description 插屏广告组件是一个原生组件，层级比普通组件高。插屏广告组件每次创建都会返回一个全新的实例，默认是隐藏的，需要调用 InterstitialAd.show() 将其显示
     */
    interface InterstitialAd {
        /**
         * 显示插屏广告
         * @returns 插屏广告显示操作的结果，如果插屏广告显示失败，会返回一个rejected Promise
         */
        show: () => Promise<any>;

        /** 销毁插屏广告实例 */
        destroy: () => void;

        /**
         * 监听插屏错误事件
         * @param callback - 插屏错误事件的回调函数
         */
        onError: (callback: (res: InterstitialAdErrorResult) => void) => void;

        /**
         * 取消监听插屏错误事件
         * @param callback - 插屏错误事件的回调函数
         */
        offError: (callback: (res: InterstitialAdErrorResult) => void) => void;

        /**
         * 监听用户点击 关闭广告 按钮的事件
         * @param callback - 用户点击 关闭广告 按钮的事件的回调函数
         */
        onClose: (callback: (res?: any) => void) => void;

        /**
         * 取消监听用户点击 关闭广告 按钮的事件
         * @param callback - 用户点击 关闭广告 按钮的事件的回调函数
         */
        offClose: (callback: (res?: any) => void) => void;
    }
}