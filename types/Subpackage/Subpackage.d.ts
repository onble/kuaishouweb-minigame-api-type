declare namespace KuaiShouWebMinigame {
    /**
     * loadSubpackage 成功回调的参数
     */
    interface LoadSubpackageSuccessResult {
        /** 子包名称 */
        name: string;
        /** 子包相对路径 */
        path: string;
    }

    /**
     * loadSubpackage 失败回调的参数
     */
    interface LoadSubpackageFailResult {
        /** 错误代码 */
        code: number;
        /** 错误信息 */
        errorMsg: string;
    }

    /**
     * loadSubpackage 接口的入参
     */
    interface LoadSubpackageOptions {
        /** 子包名称 */
        name: string;
        /** 成功回调 */
        success?: (res: LoadSubpackageSuccessResult) => void;
        /** 失败回调 */
        fail?: (err: LoadSubpackageFailResult) => void;
    }

    /**
     * onProgressUpdate 回调的参数（分包加载进度）
     */
    interface SubpackageProgressUpdateResult {
        /** 子包名称 */
        name: string;
        /** 进度(0~100) */
        progress: number;
        /** 已下载的文件大小 */
        downloadedSize: number;
        /** 总文件大小 */
        totalSize: number;
    }

    /**
     * 加载分包任务实例（用于获取分包加载状态）
     */
    interface LoadSubpackageTask {
        /**
         * 监听分包加载进度变化事件
         * @param callback - 进度回调函数，参数包含加载进度、文件大小等信息
         */
        onProgressUpdate: (callback: (res: SubpackageProgressUpdateResult) => void) => void;
    }
}