declare namespace KuaiShouWebMinigame {
    /**
     * request 接口成功回调的参数
     */
    interface RequestSuccessResult {
        /** 开发者服务器返回的数据 */
        data: string | Record<string, any> | ArrayBuffer;
        /** 开发者服务器返回的 HTTP 状态码 */
        statusCode: number;
        /** 开发者服务器返回的 HTTP Response Header */
        header: Record<string, string>;
        /** 开发者服务器返回的 cookies，格式为字符串数组 */
        cookies: string[];
    }

    /**
     * request 接口的入参
     */
    interface RequestOptions {
        /** 开发者服务器接口地址（必填） */
        url: string;
        /** 
         * 请求的参数
         * @description 最终发送给服务器的数据是 String 类型，非 String 类型会按规则转换：
         * - GET 方法：转换成 query string（encodeURIComponent(k)=encodeURIComponent(v)...）
         * - POST + application/json：JSON 序列化
         * - POST + application/x-www-form-urlencoded：转换成 query string
         */
        data?: string | Record<string, any> | ArrayBuffer;
        /** 
         * 设置请求的 header
         * @description header 中不能设置 Referer，content-type 默认为 application/json
         */
        header?: Record<string, string>;
        /** 超时时间，单位为毫秒 */
        timeout?: number;
        /** HTTP 请求方法 @default GET */
        method?: 'GET' | 'POST';
        /** 
         * 返回的数据格式 @default json
         * @description json：返回的数据为 JSON，会进行一次 JSON.parse；其他：不对返回内容进行 JSON.parse
         */
        dataType?: 'json' | string;
        /** 
         * 响应的数据类型 @default text
         * @description text：响应为文本；arraybuffer：响应为 ArrayBuffer
         */
        responseType?: 'text' | 'arraybuffer';
        /** 接口调用成功的回调函数 */
        success?: (res: RequestSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * 网络请求任务对象
     */
    interface RequestTask {
        /** 中断请求任务 */
        abort: () => void;
    }
}