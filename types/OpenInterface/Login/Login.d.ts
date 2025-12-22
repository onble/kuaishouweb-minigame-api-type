declare namespace KuaiShouWebMinigame {
    /**
     * login 成功回调的参数
     */
    interface LoginSuccessResult {
        /** 登录临时凭证 */
        code: string;
    }

    /**
     * login 接口的入参
     */
    interface LoginOptions {
        /** 登录成功回调 */
        success?: (res: LoginSuccessResult) => void;
        /** 登录失败回调 */
        fail?: (error: any) => void;
        /** 无论成功失败都会执行的完成回调 */
        complete?: () => void;
    }

    /**
     * checkSession 失败回调的参数
     */
    interface CheckSessionFailResult {
        /** 
         * 错误码
         * @description -20038：未登录或登录态失效，需重新登录；-20001：未知错误（如网络连接失败等），请重试
         */
        code: -20038 | -20001 | number;
        /** 错误信息 */
        msg: string;
    }

    /**
     * checkSession 接口的入参
     */
    interface CheckSessionOptions {
        /** 登录态未过期的回调函数 */
        success?: () => void;
        /** 登录态失效的回调函数 */
        fail?: (res: CheckSessionFailResult) => void;
        /** 登录态检查完成回调（无论是否有效都会执行） */
        complete?: () => void;
    }
}