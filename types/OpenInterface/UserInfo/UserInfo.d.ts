declare namespace KuaiShouWebMinigame {
    /**
     * UserInfo 数据结构（用户信息对象）
     */
    interface UserInfo {
        /** 昵称 */
        nickName: string;
        /** 头像 */
        avatarUrl: string;
        /** 性别，M-男，F-女 */
        gender: 'M' | 'F';
        /** 城市 */
        userCity: string;
        /** 年龄 */
        age: number;
    }

    /**
     * getUserInfo 成功回调的参数
     */
    interface GetUserInfoSuccessResult {
        /** 用户信息对象，不包含 openid 等敏感信息 */
        userInfo: UserInfo;
        /** 不包含敏感信息的原始数据字符串，用于计算签名 */
        rawData: string;
        /** 使用 sha1( rawData + sessionkey ) 得到的字符串，用于校验用户信息 */
        signature: string;
    }

    /**
     * getUserInfo 失败回调的参数
     */
    interface GetUserInfoFailResult {
        /** 错误码 */
        code: number;
        /** 错误描述 */
        msg: string;
    }

    /**
     * getUserInfo 接口的入参
     */
    interface GetUserInfoOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: GetUserInfoSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: GetUserInfoFailResult) => void;
        /** 接口调用完成的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
}