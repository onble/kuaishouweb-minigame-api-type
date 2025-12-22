declare namespace KuaiShouWebMinigame {
    /**
     * showToast 接口的入参
     */
    interface ShowToastOptions {
        /** 提示的内容（必填） */
        title: string;
        /** 
         * 图标
         * @default 'success'
         * @description 合法值：success（显示成功图标，title最多7个汉字）、error（失败图标，title最多7个汉字）、loading（加载图标，title最多7个汉字）、none（无图标，title最多两行）
         */
        icon?: 'success' | 'error' | 'loading' | 'none';
        /** 自定义图标的本地路径，image 的优先级高于 icon */
        image?: string;
        /** 提示的延迟时间（单位：ms）@default 1500 */
        duration?: number;
        /** 是否显示透明蒙层，防止触摸穿透 @default false */
        mask?: boolean;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * showModal 成功回调的参数
     */
    interface ShowModalSuccessResult {
        /** editable 为 true 时，用户输入的文本 */
        content?: string;
        /** 为 true 时，表示用户点击了确定按钮 */
        confirm: boolean;
        /** 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭） */
        cancel: boolean;
    }

    /**
     * showModal 接口的入参
     */
    interface ShowModalOptions {
        /** 提示的标题（必填） */
        title: string;
        /** 提示的内容 */
        content?: string;
        /** 是否显示取消按钮 @default true */
        showCancel?: boolean;
        /** 取消按钮的文字，最多 4 个字符 @default '取消' */
        cancelText?: string;
        /** 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 @default '#000000' */
        cancelColor?: string;
        /** 确认按钮的文字，最多 4 个字符 @default '确定' */
        confirmText?: string;
        /** 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 @default '#576B95' */
        confirmColor?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: ShowModalSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * showLoading 接口的入参
     */
    interface ShowLoadingOptions {
        /** 提示的内容（必填） */
        title: string;
        /** 是否显示透明蒙层，防止触摸穿透 @default false */
        mask?: boolean;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * showActionSheet 成功回调的参数
     */
    interface ShowActionSheetSuccessResult {
        /** 用户点击的按钮序号，从上到下的顺序，从0开始 */
        tapIndex: number;
    }

    /**
     * showActionSheet 接口的入参
     */
    interface ShowActionSheetOptions {
        /** 警示文案 */
        alertText?: string;
        /** 按钮的文字数组，数组长度最大为 6（必填） */
        itemList: string[];
        /** 按钮的文字颜色 @default '#000000' */
        itemColor?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: ShowActionSheetSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * hideToast/hideLoading 接口的入参
     */
    interface HideToastLoadingOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

}