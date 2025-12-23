declare namespace KuaiShouWebMinigame {
    /**
     * showKeyboard 中 confirmType 的合法值
     */
    type KeyboardConfirmType = 'done' | 'next' | 'search' | 'go' | 'send';

    /**
     * 键盘事件回调的参数（输入/确认/收起）
     */
    interface KeyboardEventResult {
        /** 键盘输入的当前值 */
        value: string;
    }

    /**
     * updateKeyboard 接口的入参
     */
    interface UpdateKeyboardOptions {
        /** 键盘输入框的当前值（必填） */
        value: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * showKeyboard 接口的入参
     */
    interface ShowKeyboardOptions {
        /** 键盘输入框显示的默认值（必填） */
        defaultValue: string;
        /** 键盘中文本的最大长度（必填） */
        maxLength: number;
        /** 是否为多行输入（必填） */
        multiple: boolean;
        /** 点击完成时键盘是否收起（必填） */
        confirmHold: boolean;
        /** 
         * 键盘右下角 confirm 按钮的类型（必填）
         * @description 仅影响按钮文本，合法值：done(完成)、next(下一个)、search(搜索)、go(前往)、send(发送)
         */
        confirmType: KeyboardConfirmType;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }

    /**
     * hideKeyboard 接口的入参
     */
    interface HideKeyboardOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（成功/失败都会执行） */
        complete?: () => void;
    }
}