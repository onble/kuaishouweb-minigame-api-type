declare namespace KuaiShouWebMinigame {
    /**
     * setStorage 接口的入参
     */
    interface SetStorageOptions {
        /** 本地缓存中指定的 key（必填） */
        key: string;
        /** 
         * 需要存储的内容（必填）
         * @description 只支持原生类型、Date、及能够通过JSON.stringify序列化的对象；单个key最大1MB，所有数据上限10MB
         */
        data: any;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * removeStorage 接口的入参
     */
    interface RemoveStorageOptions {
        /** 本地缓存中指定的 key（必填） */
        key: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * getStorage 成功回调的参数
     */
    interface GetStorageSuccessResult {
        /** key对应的内容 */
        data: any;
    }

    /**
     * getStorage 接口的入参
     */
    interface GetStorageOptions {
        /** 本地缓存中指定的 key（必填） */
        key: string;
        /** 接口调用成功的回调函数 */
        success?: (res: GetStorageSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * getStorageInfo 成功回调的参数
     */
    interface GetStorageInfoSuccessResult {
        /** 当前 storage 中所有的 key */
        keys: string[];
        /** 当前占用的空间大小, 单位 KB */
        currentSize: number;
        /** 限制的空间大小，单位 KB */
        limitSize: number;
    }

    /**
     * getStorageInfo 接口的入参
     */
    interface GetStorageInfoOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: GetStorageInfoSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * clearStorage 接口的入参
     */
    interface ClearStorageOptions {
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }
}