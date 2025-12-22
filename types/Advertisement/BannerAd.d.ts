declare namespace KuaiShouWebMinigame {
    /**
     * Banner 广告组件的样式配置
     */
    interface BannerAdStyle {
        /** banner 广告组件的左上角横坐标（必填） */
        left: number;
        /** banner 广告组件的左上角纵坐标（必填） */
        top: number;
        /** 
         * banner 广告组件的宽度（必填）
         * @description 最小 308，最大至屏幕宽度（屏幕宽度可通过 ks.getSystemInfoSync() 获取）
         */
        width: number;
        /** banner 广告组件的高度（必填） */
        height: number;
    }

    /**
     * 创建 Banner 广告组件的入参
     */
    interface CreateBannerAdOptions {
        /** 广告单元 id（必填） */
        adUnitId: string;
        /** 
         * 广告自动刷新的间隔时间（单位：秒）
         * @description 参数值必须大于等于30，不传入时 Banner 广告不会自动刷新
         */
        adIntervals?: number;
        /** banner 广告组件的样式（必填） */
        style: BannerAdStyle;
    }

    /**
     * Banner 广告尺寸变化事件的回调参数
     */
    interface BannerAdResizeResult {
        /** banner 广告组件的左上角横坐标 */
        left: number;
        /** banner 广告组件的左上角纵坐标（文档标注为 ltop，保持与官方一致） */
        ltop: number;
        /** 调整后的宽度 */
        width: number;
        /** 调整后的高度 */
        height: number;
    }

    /**
     * Banner 广告错误事件的回调参数
     */
    interface BannerAdErrorResult {
        /** 错误信息 */
        errMsg: string;
        /** 错误码 */
        errCode: number;
    }

    /**
     * Banner 广告组件
     * @description banner 广告组件是一个原生组件，层级比普通组件高。默认是隐藏的，需要调用 BannerAd.show() 将其显示。banner 广告会根据开发者设置的宽度进行调整，调整后的尺寸将通过 BannerAd.onResize() 事件中提供
     */
    interface BannerAd {
        /** 广告单元 id */
        adUnitId: string;
        /** 
         * 广告自动刷新的间隔时间（单位：秒）
         * @description 参数值必须大于等于30，不传入时 Banner 广告不会自动刷新
         */
        adIntervals?: number;
        /** 
         * banner 广告组件的样式
         * @description style 上的属性的值仅为开发者设置的值，调整后的真实尺寸需要通过 BannerAd.onResize() 事件获得
         */
        style: BannerAdStyle;

        /**
         * 显示 banner 广告
         * @returns banner 广告显示操作的结果
         */
        show: () => Promise<any>;

        /** 隐藏 banner 广告 */
        hide: () => void;

        /** 销毁 banner 广告 */
        destroy: () => void;

        /**
         * 监听 banner 广告尺寸变化事件
         * @param listener - 尺寸变化事件的监听函数
         */
        onResize: (listener: (res: BannerAdResizeResult) => void) => void;

        /**
         * 移除 banner 广告尺寸变化事件的监听函数
         * @param listener - onResize 传入的监听函数，不传此参数则移除所有监听函数
         * @example
         * ```javascript
         * const listener = function (res) { console.log(res) }
         * BannerAd.onResize(listener)
         * BannerAd.offResize(listener) // 需传入与监听时同一个的函数对象
         * ```
         */
        offResize: (listener?: (res: BannerAdResizeResult) => void) => void;

        /**
         * 监听 banner 广告加载事件
         * @param listener - 加载事件的监听函数
         */
        onLoad: (listener: () => void) => void;

        /**
         * 移除 banner 广告加载事件的监听函数
         * @param listener - onLoad 传入的监听函数，不传此参数则移除所有监听函数
         * @example
         * ```javascript
         * const listener = function (res) { console.log(res) }
         * BannerAd.onLoad(listener)
         * BannerAd.offLoad(listener) // 需传入与监听时同一个的函数对象
         * ```
         */
        offLoad: (listener?: () => void) => void;

        /**
         * 监听 banner 广告错误事件
         * @param listener - 错误事件的监听函数
         */
        onError: (listener: (res: BannerAdErrorResult) => void) => void;

        /**
         * 移除 banner 广告错误事件的监听函数
         * @param listener - onError 传入的监听函数，不传此参数则移除所有监听函数
         * @example
         * ```javascript
         * const listener = function (res) { console.log(res) }
         * BannerAd.onError(listener)
         * BannerAd.offError(listener) // 需传入与监听时同一个的函数对象
         * ```
         */
        offError: (listener?: (res: BannerAdErrorResult) => void) => void;

        /**
         * 监听Banner广告关闭事件
         * @param listener - 原生Banner广告关闭事件的监听函数
         */
        onClose: (listener: () => void) => void;

        /**
         * 移除Banner广告关闭事件的监听函数
         * @param listener - onClose 传入的监听函数，不传此参数则移除所有监听函数
         * @example
         * ```javascript
         * const listener = function (res) { console.log(res) }
         * Banner.onClose(listener)
         * ```
         */
        offClose: (listener?: () => void) => void;
    }

}