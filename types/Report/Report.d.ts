declare namespace KuaiShouWebMinigame {
    /**
     * reportScene 错误码枚举（文档定义的核心错误码）
     */
    enum ReportSceneErrorCode {
        PARAM_VALIDATE_FAILED = 20001, // 参数校验失败（类型/重复上报/长度超限等）
        INTERNAL_ERROR = -20001, // 系统内部异常
    }

    /**
     * reportScene 成功回调参数
     */
    interface ReportSceneSuccessResult {
        /** 成功标识 */
        errMsg: 'reportScene:ok';
        /** 开发者上报的原始数据 */
        data: {
            sceneId: number;
            costTime?: number;
            dimension?: Record<string, string>;
            metric?: Record<string, string>;
        };
    }

    /**
     * reportScene 失败回调参数
     */
    interface ReportSceneFailResult {
        /** 异常错误码（参考 ReportSceneErrorCode） */
        errNo: ReportSceneErrorCode | number;
        /** 错误信息（如参数校验失败、重复上报等） */
        errMsg: string;
    }

    /**
     * reportScene 接口入参
     * @description 支持版本：安卓>=13.5.40、iOS>=13.5.40，低版本需兼容处理
     */
    interface ReportSceneOptions {
        /** 场景ID（必填，游戏每次启动仅可上报一次） */
        sceneId: number;
        /** 场景耗时（单位ms，默认0，非必填） */
        costTime?: number;
        /**
         * 自定义维度数据（非必填）
         * @description key从「小程序管理后台」获取；需可JSON.stringify序列化，长度≤1024字符；每个字段为非空字符串
         */
        dimension?: Record<string, string>;
        /**
         * 自定义指标数据（非必填）
         * @description key从「小程序管理后台」获取；需可JSON.stringify序列化，长度≤1024字符；每个字段为可解析为数字的非空字符串
         */
        metric?: Record<string, string>;
        /** 接口调用成功的回调函数 */
        success?: (res: ReportSceneSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: ReportSceneFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
}