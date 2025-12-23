declare namespace KuaiShouWebMinigame {
    /**
     * addShortcut 成功回调参数
     */
    interface AddShortcutSuccessResult {
        /** 1 表示成功 */
        code: 1;
        /** 成功信息 */
        msg: 'addShortcut:ok';
    }

    /**
     * addShortcut 失败回调参数
     */
    interface AddShortcutFailResult {
        /** 异常错误码（如 -10005 表示暂不支持该功能） */
        code: number;
        /** 失败信息 */
        msg: 'addShortcut:fail';
    }

    /**
     * addShortcut 接口入参
     */
    interface AddShortcutOptions {
        /** 接口调用成功的回调函数（iOS 不支持回调） */
        success?: (res: AddShortcutSuccessResult) => void;
        /** 接口调用失败的回调函数（iOS 不支持回调） */
        fail?: (err: AddShortcutFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行，iOS 不支持） */
        complete?: () => void;
    }

    /**
     * checkShortcut 成功回调参数
     */
    interface CheckShortcutSuccessResult {
        /** 1 表示成功 */
        code: 1;
        /** 是否已添加快捷方式（快捷方式/mini apk 任一安装则为 true） */
        installed: boolean;
    }

    /**
     * checkShortcut 失败回调参数
     */
    interface CheckShortcutFailResult {
        /** 异常错误码（如 -10005 表示暂不支持该功能） */
        code: number;
        /** 错误信息（如 "apk info is invalid"） */
        msg: string;
    }

    /**
     * checkShortcut 接口入参（仅 Android 支持）
     */
    interface CheckShortcutOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: CheckShortcutSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: CheckShortcutFailResult) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
}