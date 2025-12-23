declare namespace KuaiShouWebMinigame {

    /**
     * navigateToScene 错误码枚举（文档定义的核心错误码）
     */
    enum NavigateSceneErrorCode {
        UNSUPPORTED_VERSION = -10005, // 低于支持版本（安卓<13.4.40/iOS<13.5.40）
        INTERNAL_ERROR = -20001, // 系统内部异常
        FREQUENCY_LIMIT = -20041, // API调用次数超频控
        GAME_NOT_REGISTERED = -20042, // 游戏未备案
        SCENE_ILLEGAL = -20043, // scene参数不合法
    }

    /**
     * checkSliderBarIsAvailable 成功回调参数
     */
    interface CheckSliderBarIsAvailableSuccessResult {
        /** 侧边栏是否可用（true=可用，false=不可用） */
        available: boolean;
    }

    /**
     * checkSliderBarIsAvailable 失败回调参数
     */
    interface CheckSliderBarIsAvailableFailResult {
        /** 异常错误码 */
        code: number;
        /** 错误信息 */
        msg: string;
    }

    /**
     * checkSliderBarIsAvailable 接口入参
     * @description 支持版本：安卓>=12.11.10、iOS>=12.11.10，低版本需兼容
     */
    interface CheckSliderBarIsAvailableOptions {
        /** 接口调用成功的回调函数 */
        success?: (result: CheckSliderBarIsAvailableSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (error: CheckSliderBarIsAvailableFailResult) => void;
    }

    /**
     * navigateToScene 成功回调参数
     */
    interface NavigateToSceneSuccessResult {
        /** 跳转成功标识 */
        msg: 'success';
    }

    /**
     * navigateToScene 失败回调参数
     */
    interface NavigateToSceneFailResult {
        /** 异常错误码（参考 NavigateSceneErrorCode） */
        code: NavigateSceneErrorCode | number;
        /** 错误信息（如 "only for kuaishou system version >= 13.4.40..."） */
        msg: string;
    }

    /**
     * navigateToScene 接口入参
     * @description 支持版本：安卓>=13.4.40、iOS>=13.5.40，低版本需兼容
     */
    interface NavigateToSceneOptions {
        /** 
         * 要跳转的入口场景（仅支持 'sidebar'）
         * 侧边栏场景（最低版本：安卓13.4.40/iOS13.5.40）
         */
        scene: 'sidebar';
        /** 接口调用成功的回调函数 */
        success?: (res: NavigateToSceneSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: NavigateToSceneFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

}