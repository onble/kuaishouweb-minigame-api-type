declare namespace KuaiShouWebMinigame {
    /**
     * 创建激励视频广告组件的入参
     */
    interface CreateRewardedVideoAdOptions {
        /** 广告id（必填） */
        adUnitId: string;
        /** 
         * 是否开启再得广告模式（只支持安卓系统的快手和快手极速版）
         * @default false
         * @since 11.11.40
         */
        multiton?: boolean;
        /** 
         * 再得广告的奖励文案，玩家每看完一个广告会展示，如【再看1个获得xx】；xx就multitonRewardMsg中的文案，按顺序依次展示，单个文案最大长度为 7 ；multiton为true时必填
         * @since 11.11.40
         */
        multitonRewardMsg?: string[];
        /** 
         * 额外观看广告的次数，合法的数据范围为1-4，multiton为true时必填
         * @since 11.11.40
         */
        multitonRewardTimes?: number;
        /** 进度提示开关（示例代码中出现，补充该字段） */
        progressTip?: boolean;
    }

    /**
     * onClose 回调函数的参数
     */
    interface RewardedVideoAdCloseResult {
        /** 视频是否是在用户完整观看的情况下被关闭的 */
        isEnded: boolean;
        /** 
         * 用户完整的播放了几次视频
         * @description 在支持多例模式的版本上会返回该字段，并且是否返回该字段与multiton是否为true无关
         */
        count?: number;
    }

    /**
     * onError 回调函数的参数
     */
    interface RewardedVideoAdErrorResult {
        /** 错误信息 */
        msg: string;
        /** 
         * 错误码
         * @description 合法值：-20024（激励视频播放失败）
         */
        code: number;
    }

    /**
     * 激励视频广告组件
     * @description 激励视频广告组件是一个原生组件，层级比普通组件高。激励视频广告是一个单例（小游戏端是全局单例），默认是隐藏的，需要调用 RewardedVideoAd.show() 将其显示
     */
    interface RewardedVideoAd {
        /**
         * 显示激励视频广告
         * @description 激励视频广告将从屏幕下方推入
         * @returns 激励视频广告显示操作的结果，如果激励视频广告显示失败，会返回一个rejected Promise
         */
        show: (object?: Record<string, any>) => Promise<any>;

        /** 销毁激励视频广告实例 */
        destroy: () => void;

        /**
         * 监听激励视频错误事件
         * @param callback - 激励视频错误事件的回调函数
         */
        onError: (callback: (res: RewardedVideoAdErrorResult) => void) => void;

        /**
         * 取消监听激励视频错误事件
         * @param callback - 激励视频错误事件的回调函数
         */
        offError: (callback: (res: RewardedVideoAdErrorResult) => void) => void;

        /**
         * 监听用户点击 关闭广告 按钮的事件
         * @param callback - 用户点击 关闭广告 按钮的事件的回调函数
         * @example
         * ```javascript
         * let param = {};
         * param.adUnitId = "从平台获取的广告id";
         * let video = ks.createRewardedVideoAd(param);
         * video.onClose(res => {
         *     // 用户点击了【关闭广告】按钮
         *     if (res && res.isEnded) {
         *       // 正常播放结束，可以下发游戏奖励
         *       if (res.count) {
         *       //在支持多例模式的版本上会返回该字段，并且是否返回该字段与multiton是否为true无关
         *       //判断观看了几次广告
         *       }
         *     }
         *     else {
         *         // 播放中途退出，不下发游戏奖励
         *     }
         * })
         * ```
         */
        onClose: (callback: (res: RewardedVideoAdCloseResult) => void) => void;

        /**
         * 取消监听用户点击 关闭广告 按钮的事件
         * @param callback - 用户点击 关闭广告 按钮的事件的回调函数
         */
        offClose: (callback: (res: RewardedVideoAdCloseResult) => void) => void;
    }

}