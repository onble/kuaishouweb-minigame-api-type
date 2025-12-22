declare namespace KuaiShouWebMinigame {
    /**
     * connectSocket 接口的入参
     */
    interface ConnectSocketOptions {
        /** 开发者服务器接口地址（必填） */
        url: string;
        /** 
         * 设置请求的 header
         * @description header 中不能设置 Referer，content-type 默认为 application/json
         */
        header?: Record<string, string>;
        /** 子协议数组 */
        protocols?: string[];
        /** 建立 TCP 连接的时候的 TCP_NODELAY 设置 @default false */
        tcpNoDelay?: boolean;
        /** 超时时间，单位为毫秒 */
        timeout?: number;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * SocketTask.close 接口的入参
     */
    interface SocketCloseOptions {
        /** 
         * 关闭连接的状态号
         * @default 1000（表示正常关闭连接）
         * @description 表示连接被关闭的原因
         */
        code?: number;
        /** 
         * 连接被关闭的原因
         * @description 可读的字符串，必须是不长于 123 字节的 UTF-8 文本（不是字符）
         */
        reason?: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * SocketTask.send 接口的入参
     */
    interface SocketSendOptions {
        /** 需要发送的内容（必填） */
        data: string | ArrayBuffer;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * onClose 回调函数的参数
     */
    interface SocketCloseResult {
        /** 关闭连接的状态号，表示连接被关闭的原因 */
        code: number;
        /** 连接被关闭的原因（可读字符串） */
        reason: string;
    }

    /**
     * onError 回调函数的参数
     */
    interface SocketErrorResult {
        /** 错误信息 */
        errMsg: string;
    }

    /**
     * onMessage 回调函数的参数
     */
    interface SocketMessageResult {
        /** 服务器返回的消息 */
        data: string | ArrayBuffer;
    }

    /**
     * onOpen 回调函数的参数
     */
    interface SocketOpenResult {
        /** 连接成功的 HTTP 响应 Header */
        header: Record<string, string>;
    }

    /**
     * WebSocket 任务对象
     * @description 可通过 ks.connectSocket() 接口创建返回
     */
    interface SocketTask {
        /**
         * 通过 WebSocket 连接发送数据
         * @param object - 发送参数
         */
        send: (object: SocketSendOptions) => void;

        /**
         * 关闭 WebSocket 连接
         * @param object - 关闭参数
         */
        close: (object?: SocketCloseOptions) => void;

        /**
         * 监听 WebSocket 连接打开事件
         * @param callback - 连接打开事件的回调函数
         */
        onOpen: (callback: (res: SocketOpenResult) => void) => void;

        /**
         * 监听 WebSocket 连接关闭事件
         * @param callback - 连接关闭事件的回调函数
         */
        onClose: (callback: (res: SocketCloseResult) => void) => void;

        /**
         * 监听 WebSocket 错误事件
         * @param callback - 错误事件的回调函数
         */
        onError: (callback: (res: SocketErrorResult) => void) => void;

        /**
         * 监听 WebSocket 接受到服务器的消息事件
         * @param callback - 接收消息事件的回调函数
         */
        onMessage: (callback: (res: SocketMessageResult) => void) => void;
    }
}