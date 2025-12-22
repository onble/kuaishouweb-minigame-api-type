declare namespace KuaiShouWebMinigame {
    /**
     * authorize 接口的权限范围类型
     */
    type AuthorizeScope = 'scope.userInfo' | 'scope.writePhotosAlbum';

    /**
     * authorize/fail 回调的参数
     */
    interface AuthorizeFailResult {
        /** 错误码 */
        code: number;
        /** 错误描述 */
        msg: string;
    }

    /**
     * authorize 接口的入参
     */
    interface AuthorizeOptions {
        /** 
         * 需要获取权限的scope
         * @description 合法值：scope.userInfo(用户信息)、scope.writePhotosAlbum(保存到相册权限)
         */
        scope: AuthorizeScope;
        /** 申请授权成功的回调 */
        success?: () => void;
        /** 申请授权失败的回调 */
        fail?: (error: AuthorizeFailResult) => void;
        /** 申请授权完成的回调（无论成功失败都会被调用） */
        complete?: () => void;
    }

    /**
     * getSetting 成功回调中 result 的结构
     */
    interface GetSettingResult {
        /** 是否授权用户信息权限 */
        'scope.userInfo'?: boolean;
        /** 是否授权保存到相册权限 */
        'scope.writePhotosAlbum'?: boolean;
    }

    /**
     * getSetting 成功回调的参数
     */
    interface GetSettingSuccessResult {
        /** 查询结果（仅包含已请求过的权限） */
        result: GetSettingResult;
    }

    /**
     * getSetting fail 回调的参数
     */
    interface GetSettingFailResult {
        /** 错误码 */
        code: number;
        /** 错误描述 */
        msg: string;
    }

    /**
     * getSetting 接口的入参
     */
    interface GetSettingOptions {
        /** 接口调用成功的回调 */
        success?: (res: GetSettingSuccessResult) => void;
        /** 接口调用失败的回调 */
        fail?: (error: GetSettingFailResult) => void;
        /** 接口调用完成的回调（无论成功失败都会执行） */
        complete?: () => void;
    }

}