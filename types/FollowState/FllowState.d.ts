declare namespace KuaiShouWebMinigame {
    /**
     * 官方帐号类型枚举
     */
    type OfficialAccountType = 'CPServiceAccount' | 'MiniGameOfficialAccount';

    /**
     * checkFollowState 回调参数
     */
    interface CheckFollowStateResult {
        /** 错误码：1=成功，-10005=暂不支持该功能 */
        errorCode: number;
        /** 错误信息 */
        errorMsg: string;
        /** 是否关注该官方帐号 */
        hasFollow: boolean;
    }

    /**
     * checkFollowState 接口入参
     */
    interface CheckFollowStateOptions {
        /** 要查询的帐号类型（CPServiceAccount/ MiniGameOfficialAccount） */
        accountType: OfficialAccountType;
        /** 回调函数 */
        callback: (result: CheckFollowStateResult) => void;
    }

    /**
     * openUserProfile 回调参数
     */
    interface OpenUserProfileResult {
        /** 错误码：1=成功，其他值为失败（如 -10005=暂不支持） */
        errorCode: number;
        /** 错误信息 */
        errorMsg: string;
    }

    /**
     * openUserProfile 接口入参
     */
    interface OpenUserProfileOptions {
        /** 要打开的帐号类型（CPServiceAccount/ MiniGameOfficialAccount） */
        accountType: OfficialAccountType;
        /** 回调函数 */
        callback: (result: OpenUserProfileResult) => void;
    }
}