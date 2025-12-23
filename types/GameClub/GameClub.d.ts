declare namespace KuaiShouWebMinigame {
    /**
     * 发布目标类型枚举（快手/游戏圈）
     */
    type PublishTargetType = 1 | 2; // 1=发布到快手，2=发布到快手并同步至游戏圈

    /**
     * jumpToGameClub 成功回调参数
     */
    interface JumpToGameClubSuccessResult {
        /** 1=成功，-10005=暂不支持，-100010=游戏圈未开通 */
        code: 1 | -10005 | -100010;
        /** 成功信息 */
        msg: 'jumpToGameClub:ok';
    }

    /**
     * jumpToGameClub 失败回调参数
     */
    interface JumpToGameClubFailResult {
        /** 异常错误码 */
        code: number;
        /** 失败信息 */
        msg: 'jumpToGameClub:fail';
    }

    /**
     * jumpToGameClub 接口入参
     */
    interface JumpToGameClubOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: JumpToGameClubSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: JumpToGameClubFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * shareImageToGameClub 成功回调参数
     */
    interface ShareImageToGameClubSuccessResult {
        /** 1=成功，-10005=暂不支持，-100010=游戏圈未开通 */
        code: 1 | -10005 | -100010;
        /** 成功信息 */
        msg: 'shareImageToGameClub:ok';
    }

    /**
     * shareImageToGameClub 失败回调参数
     */
    interface ShareImageToGameClubFailResult {
        /** 异常错误码 */
        code: number;
        /** 失败信息 */
        msg: 'shareImageToGameClub:fail';
    }

    /**
     * shareImageToGameClub 接口入参
     * @description Android支持cdn格式，iOS支持cdn/ksfile格式
     */
    interface ShareImageToGameClubOptions {
        /** 图片地址（非必填） */
        path?: string;
        /** 分享文案模板ID（非必填，需开放平台配置审核） */
        mouldId?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: ShareImageToGameClubSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: ShareImageToGameClubFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * GameRecorder.publishVideo 扩展入参（新增 type 字段）
     */
    interface GameRecorderPublishVideoOptions {
        /** 发布目标类型（必填） */
        type: PublishTargetType;
        /** 回调函数（成功时 error 为 undefined/null） */
        callback: (error?: {
            code: number;
            msg: string;
        }) => void;
        /** 分享文案模板ID（非必填） */
        mouldId?: string;
        /** 待发布视频ID/ID数组（非必填，默认最后一次录制） */
        video?: number | number[];
        /** 携带字段（aaa=bbb&ccc=ddd 格式） */
        query?: string;
    }

    /**
     * chooseVideoAndPublish 成功回调参数
     * @description 支持版本 >= 13.3.40
     */
    interface ChooseVideoAndPublishSuccessResult {
        /** 1=成功，-10005=版本不支持 */
        code: 1 | -10005;
        /** 成功信息 */
        msg: 'chooseVideoAndPublish:ok';
    }

    /**
     * chooseVideoAndPublish 失败回调参数
     */
    interface ChooseVideoAndPublishFailResult {
        /** 异常错误码 */
        code: number;
        /** 失败信息 */
        msg: 'chooseVideoAndPublish:fail';
    }

    /**
     * chooseVideoAndPublish 接口入参
     * @description 从相册选择视频+图片发布，支持版本 >= 13.3.40
     */
    interface ChooseVideoAndPublishOptions {
        /** 发布目标类型（非必填） */
        type?: PublishTargetType;
        /** 分享文案模板ID（非必填） */
        mouldId?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: ChooseVideoAndPublishSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: ChooseVideoAndPublishFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
}