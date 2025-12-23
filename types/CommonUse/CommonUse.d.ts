declare namespace KuaiShouWebMinigame {
    /**
     * addCommonUse 成功回调参数
     */
    interface AddCommonUseSuccessResult {
        /** 1 表示设为常用成功 */
        code: 1;
        /** 成功提示信息 */
        msg: 'addCommonUse:ok';
    }

    /**
     * addCommonUse 失败回调参数
     */
    interface AddCommonUseFailResult {
        /** 异常错误码（如 -10005 表示暂不支持该功能） */
        code: number;
        /** 失败提示信息 */
        msg: 'addCommonUse:fail';
    }

    /**
     * addCommonUse 接口入参
     */
    interface AddCommonUseOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: AddCommonUseSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: AddCommonUseFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
    /**
     * checkCommonUse 成功回调参数
     */
    interface CheckCommonUseSuccessResult {
        /** 1 表示查询成功 */
        code: 1;
        /** 成功提示信息 */
        msg: 'checkCommonUse:ok';
        /** true=已设为常用，false=未设为常用 */
        isCommonUse: boolean;
    }

    /**
     * checkCommonUse 失败回调参数
     */
    interface CheckCommonUseFailResult {
        /** 异常错误码（如 -10005 表示暂不支持该功能） */
        code: number;
        /** 失败提示信息 */
        msg: 'checkCommonUse:fail';
    }

    /**
     * checkCommonUse 接口入参
     */
    interface CheckCommonUseOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: CheckCommonUseSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: CheckCommonUseFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

}