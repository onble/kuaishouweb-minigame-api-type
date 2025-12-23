declare namespace KuaiShouWebMinigame {
    /**
     * GameRecorder 错误码枚举（文档定义的所有错误码）
     */
    enum GameRecorderErrorCode {
        UnknownError = 'GameRecorder_UnknownError', // 未知错误
        InternalFailed = 'GameRecorder_InternalFailed', // SDK 内部错误
        NotSupported = 'GameRecorder_NotSupported', // 当前设备不支持录制
        StartWhileAlreadyStartRecording = 'GameRecorder_StartWhileAlreadyStartRecording', // 已开始录制时调用 start
        StartWhilePaused = 'GameRecorder_StartWhilePaused', // 暂停状态调用 start（应调用 resume）
        PauseWhileNotStartRecording = 'GameRecorder_PauseWhileNotStartRecording', // 未开始录制时调用 pause
        PauseWhileAlreadyPaused = 'GameRecorder_PauseWhileAlreadyPaused', // 已暂停时调用 pause
        ResumeWhileNotStartRecording = 'GameRecorder_ResumeWhileNotStartRecording', // 未开始录制时调用 resume
        ResumeWhileRecording = 'GameRecorder_ResumeWhileRecording', // 录制中调用 resume（仅暂停态可调用）
        AbortWhileNotStartRecording = 'GameRecorder_AbortWhileNotStartRecording', // 未开始录制时调用 abort
        StopWhileNotStartRecording = 'GameRecorder_StopWhileNotStartRecording', // 未开始录制时调用 stop
        RecordFailedTimeRangeTooShort = 'GameRecorder_RecordFailedTimeRangeTooShort', // 录制时间太短
        RecordFailedTimeRangeTooLong = 'GameRecorder_RecordFailedTimeRangeTooLong', // 录制时间太长
        RecordFailedNoVideo = 'GameRecorder_RecordFailedNoVideo', // 未录制到视频
        PublishVideoFailed = 'GameRecorder_PublishVideoFailed' // 发布录屏失败
    }

    /**
     * GameRecorder 事件类型枚举
     */
    type GameRecorderEvent = 'start' | 'stop' | 'pause' | 'resume' | 'abort' | 'error';

    /**
     * Error 事件的回调参数
     */
    interface GameRecorderErrorEvent {
        error: {
            code: GameRecorderErrorCode;
            msg: string;
        };
    }

    /**
     * Stop 事件的回调参数
     */
    interface GameRecorderStopEvent {
        videoID: string; // 录屏成功时的视频ID
    }

    /**
     * publishVideo 接口的入参
     */
    interface PublishVideoOptions {
        /** 发布目标类型（必填） */
        type: PublishTargetType;
        /** 回调函数（成功时 error 为 undefined/null） */
        callback: (error?: {
            code: number;
            msg: string;
        }) => void;
        /** 分享文案模板 ID（非必填，需开放平台配置并审核） */
        mouldId?: string;
        /** 待发布视频ID/ID数组（非必填，默认最后一次录制的视频） */
        video?: number | number[];
        /** 携带字段（aaa=bbb&ccc=ddd 格式，可通过 ks.getLaunchOptionsSync 获取） */
        query?: string;
    }

    /**
     * 游戏画面录制对象
     */
    interface GameRecorder {
        /**
         * 开始录制游戏画面
         */
        start(): void;

        /**
         * 结束录制游戏画面（结束后可发起分享）
         * @returns 录制结束的 Promise
         */
        stop(): Promise<void>;

        /**
         * 暂停录制游戏画面
         * @returns 录制暂停的 Promise
         */
        pause(): Promise<void>;

        /**
         * 恢复录制游戏画面
         * @returns 录制恢复的 Promise
         */
        resume(): Promise<void>;

        /**
         * 放弃录制游戏画面（已录制内容会被丢弃）
         * @returns 录制中断的 Promise
         */
        abort(): Promise<void>;

        /**
         * 注册监听录制事件的回调函数
         * @param event - 事件名
         * @param callback - 事件回调（error/stop 有参数，其他事件无参）
         */
        on(
            event: 'error',
            callback: (res: GameRecorderErrorEvent) => void
        ): void;
        on(
            event: 'stop',
            callback: (res: GameRecorderStopEvent) => void
        ): void;
        on(
            event: Exclude<GameRecorderEvent, 'error' | 'stop'>,
            callback: () => void
        ): void;

        /**
         * 取消监听录制事件
         * @param event - 事件名
         * @param callback - 要取消的回调函数
         */
        off(
            event: 'error',
            callback: (res: GameRecorderErrorEvent) => void
        ): void;
        off(
            event: 'stop',
            callback: (res: GameRecorderStopEvent) => void
        ): void;
        off(
            event: Exclude<GameRecorderEvent, 'error' | 'stop'>,
            callback: () => void
        ): void;

        /**
         * 发布录屏到快手
         * @param object - 发布参数
         * @example
         * ```js
         * GameRecorder.publishVideo({  
         * 	video: videoID,  
         * 	callback: (error) => {  
         * 		if (error != null && error != undefined) {  
         * 			console.log("分享录屏失败: " + JSON.stringiwfy(error));  
         * 			return;  
         * 		}  
         * 		console.log("分享录屏成功");  
         * 	}  
         * });  
         * ```
         */
        publishVideo(object: PublishVideoOptions): void;
    }
}