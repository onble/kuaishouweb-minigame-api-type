declare namespace KuaiShouWebMinigame {
    /**
     * downloadFile 接口成功回调的参数
     */
    interface DownloadFileSuccessResult {
        /** 临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件 */
        tempFilePath?: string;
        /** 用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致 */
        filePath?: string;
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number;
    }

    /**
     * downloadFile 接口的入参
     */
    interface DownloadFileOptions {
        /** 开发者服务器接口地址（必填） */
        url: string;
        /** 
         * 设置请求的 header
         * @description header 中不能设置 Referer，content-type 默认为 application/json
         */
        header?: Record<string, string>;
        /** 超时时间，单位为毫秒 */
        timeout?: number;
        /** 指定文件下载后存储的路径 (本地路径) */
        filePath?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: DownloadFileSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * 下载进度变化事件的回调参数
     */
    interface DownloadProgressUpdateResult {
        /** 下载进度百分比 */
        progress: number;
        /** 已经下载的数据长度，单位 Bytes（文档标注为 totalBytesSent，保持与官方一致） */
        totalBytesSent: number;
        /** 预期需要下载的数据总长度，单位 Bytes（文档标注为 totalBytesExpectedToSend，保持与官方一致） */
        totalBytesExpectedToSend: number;
    }

    /**
     * 下载任务对象
     * @description 可以监听下载进度变化事件，以及取消下载任务的对象
     */
    interface DownloadTask {
        /** 中断下载任务 */
        abort: () => void;

        /**
         * 监听下载进度变化事件
         * @param callback - 下载进度变化事件的回调函数
         */
        onProgressUpdate: (callback: (res: DownloadProgressUpdateResult) => void) => void;

        /**
         * 取消监听下载进度变化事件
         * @param callback - 下载进度变化事件的回调函数（不传此参数则移除所有监听函数）
         */
        offProgressUpdate: (callback?: (res: DownloadProgressUpdateResult) => void) => void;
    }

}