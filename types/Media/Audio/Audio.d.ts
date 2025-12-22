declare namespace KuaiShouWebMinigame {
    /**
     * 音频播放错误事件的回调参数
     */
    interface InnerAudioErrorResult {
        /** 错误信息 */
        errMsg: string;
        /** 
         * 错误码
         * @description 合法值：10001(系统错误)、10002(AudioPlayer未就绪)、10003(文件错误)、-1(未知错误)
         */
        errCode: 10001 | 10002 | 10003 | -1;
    }

    /**
     * 内部音频上下文对象
     * @description 可通过 ks.createInnerAudioContext() 获取实例；支持音频格式：wav(iOS/Android)、mp3(iOS/Android)
     */
    interface InnerAudioContext {
        /** 音频资源的地址，用于直接播放 */
        src: string;
        /** 开始播放的位置（单位：s），默认为 0 */
        startTime: number;
        /** 是否自动开始播放，默认为 false */
        autoplay: boolean;
        /** 是否循环播放，默认为 false */
        loop: boolean;
        /** 
         * 是否遵循系统静音开关，默认为 true
         * @description 当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音
         */
        obeyMuteSwitch: boolean;
        /** 音量。范围 0~1，默认为 1 */
        volume: number;
        /** 
         * 播放速度。范围 0.5-2.0，默认为 1
         * @description Android 需要 6 及以上版本
         */
        playbackRate: number;

        /** 当前音频的长度（单位 s），只有在当前有合法的 src 时返回（只读） */
        readonly duration: number;
        /** 当前音频的播放位置（单位 s），只有在当前有合法的 src 时返回，时间保留小数点后 6 位（只读） */
        readonly currentTime: number;
        /** 当前是是否暂停或停止状态（只读） */
        readonly paused: boolean;
        /** 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读） */
        readonly buffered: number;

        /** 播放音频 */
        play: () => void;
        /** 暂停音频（暂停后播放从暂停处开始） */
        pause: () => void;
        /** 停止音频（停止后播放从头开始） */
        stop: () => void;
        /**
         * 跳转到指定位置播放
         * @param position - 跳转的时间（单位：s），精确到小数点后 3 位（ms 级别）
         */
        seek: (position: number) => void;
        /** 销毁当前音频实例 */
        destroy: () => void;

        /**
         * 监听音频进入可以播放状态的事件（不保证后续流畅播放）
         * @param callback - 事件回调函数
         */
        onCanplay: (callback: () => void) => void;
        /**
         * 取消监听音频进入可以播放状态的事件
         * @param callback - 需取消的回调函数（不传则移除所有）
         */
        offCanplay: (callback?: () => void) => void;

        /**
         * 监听音频播放事件
         * @param callback - 事件回调函数
         */
        onPlay: (callback: () => void) => void;
        /**
         * 取消监听音频播放事件
         * @param callback - 需取消的回调函数（不传则移除所有）
         */
        offPlay: (callback?: () => void) => void;

        /**
         * 监听音频暂停事件
         * @param callback - 事件回调函数
         */
        onPause: (callback: () => void) => void;
        /**
         * 取消监听音频暂停事件
         * @param callback - 需取消的回调函数（不传则移除所有）
         */
        offPause: (callback?: () => void) => void;

        /**
         * 监听音频停止事件
         * @param callback - 事件回调函数
         */
        onStop: (callback: () => void) => void;
        /**
         * 取消监听音频停止事件
         * @param callback - 需取消的回调函数（不传则移除所有）
         */
        offStop: (callback?: () => void) => void;

        /**
         * 监听音频自然播放至结束的事件
         * @param callback - 事件回调函数
         */
        onEnded: (callback: () => void) => void;
        /**
         * 取消监听音频自然播放至结束的事件
         * @param callback - 需取消的回调函数（不传则移除所有）
         */
        offEnded: (callback?: () => void) => void;

        /**
         * 监听音频播放进度更新事件
         * @param callback - 事件回调函数（可通过 currentTime 获取实时进度）
         */
        onTimeUpdate: (callback: () => void) => void;
        /**
         * 取消监听音频播放进度更新事件
         * @param callback - 需取消的回调函数（不传则移除所有）
         */
        offTimeUpdate: (callback?: () => void) => void;

        /**
         * 监听音频播放错误事件
         * @param callback - 错误事件回调函数
         */
        onError: (callback: (res: InnerAudioErrorResult) => void) => void;
        /**
         * 取消监听音频播放错误事件
         * @param callback - 需取消的回调函数（不传则移除所有）
         */
        offError: (callback?: (res: InnerAudioErrorResult) => void) => void;
    }
}