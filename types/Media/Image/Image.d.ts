declare namespace KuaiShouWebMinigame {
    /**
     * chooseImage 成功回调中 tempFiles 项的结构
     */
    interface ChooseImageTempFile {
        /** 本地临时文件路径 (本地路径) */
        path: string;
        /** 本地临时文件大小，单位 B */
        size: number;
    }

    /**
     * chooseImage 成功回调的参数
     */
    interface ChooseImageSuccessResult {
        /** 图片的本地临时文件路径列表 (本地路径) */
        tempFilePaths: string[];
        /** 图片的本地临时文件列表 */
        tempFiles: ChooseImageTempFile[];
    }

    /**
     * chooseImage 接口的入参
     */
    interface ChooseImageOptions {
        /** 最多可以选择的图片张数 @default 9 */
        count?: number;
        /** 
         * 所选的图片的尺寸
         * @default ['original', 'compressed']
         * @description 合法值：original(原图)、compressed(压缩图)
         */
        sizeType?: ('original' | 'compressed')[];
        /** 
         * 选择图片的来源
         * @default ['album', 'camera']
         * @description 合法值：album(从相册选图)、camera(使用相机)
         */
        sourceType?: ('album' | 'camera')[];
        /** 接口调用成功的回调函数 */
        success?: (res: ChooseImageSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * saveImageToPhotosAlbum 成功回调的参数
     */
    interface SaveImageToPhotosAlbumSuccessResult {
        /** 状态码，成功返回 1 */
        code: number;
    }

    /**
     * saveImageToPhotosAlbum 失败回调的参数
     */
    interface SaveImageToPhotosAlbumFailResult {
        /** 错误码 */
        code: number;
        /** 错误信息 */
        msg: string;
    }

    /**
     * saveImageToPhotosAlbum 接口的入参
     */
    interface SaveImageToPhotosAlbumOptions {
        /** 
         * 图片文件路径（必填）
         * @description 可以是临时文件路径（如 ks.downloadFile 返回的路径）、永久文件路径；不支持网络路径
         */
        filePath: string;
        /** 接口调用成功的回调函数 */
        success?: (res: SaveImageToPhotosAlbumSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: SaveImageToPhotosAlbumFailResult) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }
}