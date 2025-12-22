declare namespace KuaiShouWebMinigame {
    /**
     * onTimeUpdate 回调函数的参数
     */
    interface VideoTimeUpdateResult {
        /** 视频当前播放到的时长（单位：s） */
        position: number;
        /** 视频总时长（单位：s） */
        duration: number;
    }

    /**
     * onProgress 回调函数的参数
     */
    interface VideoProgressResult {
        /** 当前的缓冲进度，区间为 (0~100]，100表示缓冲完成 */
        buffered: number;
        /** 视频的总时长（单位：s），首次缓冲进度为0时无此字段 */
        duration?: number;
    }

    /**
     * createVideo 接口的入参
     */
    interface CreateVideoOptions {
        /** 视频的左上角横坐标 @default 0 */
        x?: number;
        /** 视频的左上角纵坐标 @default 0 */
        y?: number;
        /** 视频的宽度（必填） */
        width: number;
        /** 视频的高度（必填） */
        height: number;
        /** 
         * 视频的资源地址（必填）
         * @description 支持CDN链接、本地路径（本地路径需通过 ks.downloadFile 下载）
         */
        src: string;
        /** 视频的封面 */
        poster?: string;
        /** 视频的初始播放位置（单位：s） @default 0 */
        initialTime?: number;
        /** 
         * 视频的缩放模式 @default contain
         * @description fill(填充)、contain(包含)、cover(覆盖)
         */
        objectFit?: 'fill' | 'contain' | 'cover';
        /** 视频背景颜色 @default #000000 */
        backgroundColor?: string;
        /** 是否自动播放 @default false */
        autoplay?: boolean;
        /** 是否循环播放 @default false */
        loop?: boolean;
        /** 是否禁音播放 @default false */
        muted?: boolean;
        /** 
         * 视频是否显示在游戏画布之下
         * @description 配合 Canvas.getContext('webgl', {alpha: true}) 使主屏canvas透明；透明canvas仅支持cocos引擎，暂不支持unity
         * @default false
         */
        underGameView?: boolean;
    }

    /**
     * 视频实例对象
     * @description 可通过 ks.createVideo() 创建；视频组件支持快手双端版本>=12.11.20
     */
    interface Video {
        /** 播放视频 */
        play: () => void;
        /** 暂停视频 */
        pause: () => void;
        /** 停止播放视频 */
        stop: () => void;
        /**
         * 跳转到视频指定位置
         * @param time - 跳转时间（单位：s）；超出总时长则停在当前帧，小于0无效
         */
        seek: (time: number) => void;
        /** 销毁视频实例 */
        destroy: () => void;

        /**
         * 监听视频首帧事件
         * @param callback - 回调函数参数 scale 为 video.videoWidth / video.videoHeight
         */
        onCandraw: (callback: (scale: number) => void) => void;

        /** 监听视频播放事件 */
        onPlay: (callback: () => void) => void;

        /** 监听视频暂停事件 */
        onPause: (callback: () => void) => void;

        /** 监听视频停止事件 */
        onStop: (callback: () => void) => void;

        /**
         * 监听视频进度更新/跳转事件
         * @param callback - 回调参数包含当前播放位置和总时长
         */
        onTimeUpdate: (callback: (res: VideoTimeUpdateResult) => void) => void;

        /** 监听视频自然播放结束事件 */
        onEnded: (callback: () => void) => void;

        /**
         * 监听视频播放错误事件
         * @param callback - 回调参数为错误信息文本（不支持的资源/下载失败/解码失败）
         */
        onError: (callback: (errorMessage: string) => void) => void;

        /** 监听视频缓冲等待事件（需缓冲下一帧而停止） */
        onWaiting: (callback: () => void) => void;

        /**
         * 监听视频缓冲进度事件
         * @param callback - 回调参数包含缓冲进度，首次缓冲0时无duration字段
         */
        onProgress: (callback: (res: VideoProgressResult) => void) => void;
    }
}