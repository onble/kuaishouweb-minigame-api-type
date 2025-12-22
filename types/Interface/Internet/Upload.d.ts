declare namespace KuaiShouWebMinigame {
    /**
    * uploadFile 接口成功回调的参数
    */
    interface UploadFileSuccessResult {
        /** 开发者服务器返回的数据 */
        data: string;
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number;
    }

    /**
     * uploadFile 接口的入参
     */
    interface UploadFileOptions {
        /** 开发者服务器接口地址（必填） */
        url: string;
        /** 要上传文件资源的路径 (本地路径) */
        filePath?: string;
        /** 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容（必填） */
        name: string;
        /** 
         * HTTP 请求 Header
         * @description Header 中不能设置 Referer
         */
        header?: Record<string, string>;
        /** 超时时间，单位为毫秒 */
        timeout?: number;
        /** 额外的表单数据（示例中出现，补充该字段） */
        formData?: Record<string, any>;
        /** 接口调用成功的回调函数 */
        success?: (res: UploadFileSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * 上传进度变化事件的回调参数
     */
    interface UploadProgressUpdateResult {
        /** 上传进度百分比 */
        progress: number;
        /** 已经上传的数据长度，单位 Bytes */
        totalBytesSent: number;
        /** 预期需要上传的数据总长度，单位 Bytes */
        totalBytesExpectedToSend: number;
    }

    /**
     * 上传任务对象
     * @description 可以监听上传进度变化事件，以及取消上传任务的对象
     */
    interface UploadTask {
        /** 中断上传任务 */
        abort: () => void;

        /**
         * 监听上传进度变化事件
         * @param callback - 上传进度变化事件的回调函数
         */
        onProgressUpdate: (callback: (res: UploadProgressUpdateResult) => void) => void;

        /**
         * 取消监听上传进度变化事件
         * @param callback - 上传进度变化事件的回调函数（不传此参数则移除所有监听函数）
         */
        offProgressUpdate: (callback?: (res: UploadProgressUpdateResult) => void) => void;
    }
}