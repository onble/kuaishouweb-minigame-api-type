declare namespace KuaiShouWebMinigame {
    /**
    * WebGL 上下文属性（仅当 contextType 为 webgl 时有效）
    */
    interface WebGLContextAttributes {
        /** 是否抗锯齿，默认值：false */
        antialias?: boolean;
        /** 绘图完成后是否保留绘图缓冲区，默认值：false */
        preserveDrawingBuffer?: boolean;
        /** 
         * 抗锯齿样本数（最小值为 2，最大不超过系统限制数量，仅 iOS 支持）
         * @default 2
         */
        antialiasSamples?: number;
        /** 是否开启透明通道，仅当 contextType 为 webgl 时有效，默认值：false */
        alpha?: boolean;
    }

    /** 画布绘图上下文（2d/webgl 通用占位类型） */
    type RenderingContext = any;

    /**
     * 画布对象
     */
    interface Canvas {
        /** 画布的宽度 */
        width: number;
        /** 画布的高度 */
        height: number;

        /**
         * 获取画布对象的绘图上下文
         * @param contextType - 上下文类型，可选值：2d、webgl
         * @param contextAttributes - webgl 上下文属性（仅当 contextType 为 webgl 时有效）
         * @returns 绘图上下文对象
         */
        getContext: (
            contextType: '2d' | 'webgl',
            contextAttributes?: WebGLContextAttributes
        ) => RenderingContext;
    }

    /**
     * 图片对象
     */
    interface Image {
        /** 图片的 URL */
        src: string;
        /** 图片的真实宽度 */
        width: number;
        /** 图片的真实高度 */
        height: number;
        /** 图片加载完成后触发的回调函数 */
        onload?: () => void;
        /** 图片加载发生错误后触发的回调函数 */
        onerror?: (err?: any) => void;
    }

}