declare namespace KuaiShouWebMinigame {
    /**
     * 描述文件状态的对象
     */
    interface Stats {
        /** 文件的类型和存取的权限，对应 POSIX stat.st_mode */
        mode: string;
        /** 文件大小，单位：B，对应 POSIX stat.st_size */
        size: number;
        /** 文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime */
        lastAccessedTime: number;
        /** 文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime */
        lastModifiedTime: number;

        /** 判断当前文件是否一个目录 */
        isDirectory(): boolean;
        /** 判断当前文件是否一个普通文件 */
        isFile(): boolean;
    }

    /**
     * access 失败回调参数
     */
    interface FileSystemAccessFailResult {
        /** 错误信息，合法值：fail no such file or directory ${path} */
        errMsg: string;
    }

    /**
     * appendFile 接口入参
     */
    interface FileSystemAppendFileOptions {
        /** 要追加内容的文件路径（必填） */
        filePath: string;
        /** 要追加的文本或二进制数据（必填） */
        data: string | ArrayBuffer;
        /** 
         * 指定写入文件的字符编码 @default utf8
         * @description 合法值：base64、binary、utf-8、utf8
         */
        encoding?: 'base64' | 'binary' | 'utf-8' | 'utf8';
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * copyFile 接口入参
     */
    interface FileSystemCopyFileOptions {
        /** 源文件路径（必填） */
        srcPath: string;
        /** 目标文件路径（必填） */
        destPath: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * getFileInfo 成功回调参数
     */
    interface FileSystemGetFileInfoSuccessResult {
        /** 文件大小，以字节为单位 */
        size: number;
    }

    /**
     * getFileInfo 接口入参
     */
    interface FileSystemGetFileInfoOptions {
        /** 要读取的文件路径（必填） */
        filePath: string;
        /** 接口调用成功的回调函数 */
        success?: (res: FileSystemGetFileInfoSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * mkdir 接口入参
     */
    interface FileSystemMkdirOptions {
        /** 创建的目录路径（必填） */
        dirPath: string;
        /** 
         * 是否递归创建上级目录 @default false
         * @description 如 dirPath 为 a/b/c/d 且 recursive 为 true，会递归创建上级目录直至 d
         */
        recursive?: boolean;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * readdir 成功回调参数
     */
    interface FileSystemReaddirSuccessResult {
        /** 指定目录下的文件名数组 */
        files: string[];
    }

    /**
     * readdir 接口入参
     */
    interface FileSystemReaddirOptions {
        /** 要读取的目录路径（必填） */
        dirPath: string;
        /** 接口调用成功的回调函数 */
        success?: (res: FileSystemReaddirSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * readFile 成功回调参数
     */
    interface FileSystemReadFileSuccessResult {
        /** Stats 对象，包含文件状态信息 */
        stats: Stats;
    }

    /**
     * readFile 接口入参
     */
    interface FileSystemReadFileOptions {
        /** 要读取的文件路径（必填） */
        filePath: string;
        /** 
         * 指定读取文件的字符编码
         * @description 不传则以 ArrayBuffer 读取二进制内容；合法值：base64、binary、utf-8、utf8
         */
        encoding?: 'base64' | 'binary' | 'utf-8' | 'utf8';
        /** 
         * 读取起始位置（byte）
         * @description 有效范围 [0, fileLength - 1]，默认从文件头开始
         */
        position?: number;
        /** 
         * 读取长度（byte）
         * @description 有效范围 [1, fileLength]，默认读到文件末尾
         */
        length?: number;
        /** 接口调用成功的回调函数 */
        success?: (res: FileSystemReadFileSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * rename 接口入参
     */
    interface FileSystemRenameOptions {
        /** 源文件路径（必填） */
        oldPath: string;
        /** 新文件路径（必填） */
        newPath: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * rmdir 接口入参
     */
    interface FileSystemRmdirOptions {
        /** 要删除的目录路径（必填） */
        dirPath: string;
        /** 
         * 是否递归删除目录 @default false
         * @description 为 true 时删除目录及所有子目录和文件
         */
        recursive?: boolean;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * saveFile 成功回调参数
     */
    interface FileSystemSaveFileSuccessResult {
        /** 存储后的文件路径 */
        savedFilePath: string;
    }

    /**
     * saveFile 接口入参
     */
    interface FileSystemSaveFileOptions {
        /** 临时存储文件路径（必填） */
        tempFilePath: string;
        /** 要存储的文件路径（可选） */
        filePath?: string;
        /** 接口调用成功的回调函数 */
        success?: (res: FileSystemSaveFileSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * stat 成功回调参数
     */
    interface FileSystemStatSuccessResult {
        /** 
         * Stats 对象/目录Stats映射
         * @description recursive=false 时为 Stats 对象；recursive=true 且为目录时，key为相对路径，value为Stats
         */
        stats: Stats | Record<string, Stats>;
    }

    /**
     * stat 接口入参
     */
    interface FileSystemStatOptions {
        /** 文件/目录路径（必填） */
        path: string;
        /** 是否递归获取目录下文件的Stats信息 @default false */
        recursive?: boolean;
        /** 接口调用成功的回调函数 */
        success?: (res: FileSystemStatSuccessResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * unlink 接口入参
     */
    interface FileSystemUnlinkOptions {
        /** 要删除的文件路径（必填） */
        filePath: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * unzip 接口入参
     */
    interface FileSystemUnzipOptions {
        /** 源zip压缩文件路径（必填） */
        zipFilePath: string;
        /** 目标目录路径（必填） */
        targetPath: string;
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * writeFile 接口入参
     */
    interface FileSystemWriteFileOptions {
        /** 要写入的文件路径（必填） */
        filePath: string;
        /** 要写入的文本或二进制数据（必填） */
        data: string | ArrayBuffer;
        /** 
         * 指定写入文件的字符编码 @default utf8
         * @description 合法值：base64、binary、utf-8、utf8
         */
        encoding?: 'base64' | 'binary' | 'utf-8' | 'utf8';
        /** 接口调用成功的回调函数 */
        success?: () => void;
        /** 接口调用失败的回调函数 */
        fail?: (res: { errMsg: string }) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }

    /**
     * 文件管理器对象
     * @description 全局唯一，可通过 ks.getFileSystemManager() 获取
     */
    interface FileSystemManager {
        /**
         * 判断文件/目录是否存在（异步）
         * @param object - 入参选项
         */
        access(object: {
            path: string;
            success?: () => void;
            fail?: (res: FileSystemAccessFailResult) => void;
            complete?: () => void;
        }): void;

        /**
         * 判断文件/目录是否存在（同步）
         * @param path - 要判断的文件/目录路径
         * @throws {Error} 文件/目录不存在时抛出异常
         */
        accessSync(path: string): void;

        /**
         * 在文件结尾追加内容（异步）
         * @param object - 入参选项
         */
        appendFile(object: FileSystemAppendFileOptions): void;

        /**
         * 在文件结尾追加内容（同步）
         * @param filePath - 要追加内容的文件路径
         * @param data - 要追加的文本/二进制数据
         * @param encoding - 字符编码（可选）
         * @throws {Error} 文件不存在/是目录/无写权限时抛出异常
         */
        appendFileSync(filePath: string, data: string | ArrayBuffer, encoding?: 'base64' | 'binary' | 'utf-8' | 'utf8'): void;

        /**
         * 复制文件（异步）
         * @param object - 入参选项
         */
        copyFile(object: FileSystemCopyFileOptions): void;

        /**
         * 复制文件（同步）
         * @param srcPath - 源文件路径
         * @param destPath - 目标文件路径
         * @throws {Error} 无权限/文件不存在/存储空间不足时抛出异常
         */
        copyFileSync(srcPath: string, destPath: string): void;

        /**
         * 获取本地文件信息（异步）
         * @param object - 入参选项
         */
        getFileInfo(object: FileSystemGetFileInfoOptions): void;

        /**
         * 创建目录（异步）
         * @param object - 入参选项
         */
        mkdir(object: FileSystemMkdirOptions): void;

        /**
         * 创建目录（同步）
         * @param dirPath - 要创建的目录路径
         * @param recursive - 是否递归创建上级目录
         * @throws {Error} 上级目录不存在/无权限/同名文件已存在时抛出异常
         */
        mkdirSync(dirPath: string, recursive?: boolean): void;

        /**
         * 读取目录内文件列表（异步）
         * @param object - 入参选项
         */
        readdir(object: FileSystemReaddirOptions): void;

        /**
         * 读取目录内文件列表（同步）
         * @param dirPath - 要读取的目录路径
         * @returns 指定目录下的文件名数组
         * @throws {Error} 目录不存在/不是目录/无读权限时抛出异常
         */
        readdirSync(dirPath: string): string[];

        /**
         * 读取本地文件内容（异步）
         * @param object - 入参选项
         */
        readFile(object: FileSystemReadFileOptions): void;

        /**
         * 读取本地文件内容（同步）
         * @param filePath - 要读取的文件路径
         * @param encoding - 字符编码（可选）
         * @param position - 读取起始位置（byte，可选）
         * @param length - 读取长度（byte，可选）
         * @returns 文件内容（字符串/ArrayBuffer）
         * @throws {Error} 文件不存在/无读权限时抛出异常
         */
        readFileSync(filePath: string, encoding?: 'base64' | 'binary' | 'utf-8' | 'utf8', position?: number, length?: number): string | ArrayBuffer;

        /**
         * 重命名/移动文件（异步）
         * @param object - 入参选项
         */
        rename(object: FileSystemRenameOptions): void;

        /**
         * 重命名/移动文件（同步）
         * @param oldPath - 源文件路径
         * @param newPath - 新文件路径
         * @throws {Error} 无权限/文件不存在时抛出异常
         */
        renameSync(oldPath: string, newPath: string): void;

        /**
         * 删除目录（异步）
         * @param object - 入参选项
         */
        rmdir(object: FileSystemRmdirOptions): void;

        /**
         * 删除目录（同步）
         * @param dirPath - 要删除的目录路径
         * @param recursive - 是否递归删除
         * @throws {Error} 目录不存在/不为空/无权限时抛出异常
         */
        rmdirSync(dirPath: string, recursive?: boolean): void;

        /**
         * 保存临时文件到本地（异步）
         * @description 调用成功后 tempFilePath 不可用
         * @param object - 入参选项
         */
        saveFile(object: FileSystemSaveFileOptions): void;

        /**
         * 保存临时文件到本地（同步）
         * @param tempFilePath - 临时文件路径
         * @param filePath - 目标存储路径（可选）
         * @returns 存储后的文件路径
         * @throws {Error} 临时文件不存在/无权限/存储空间不足时抛出异常
         */
        saveFileSync(tempFilePath: string, filePath?: string): string;

        /**
         * 获取文件 Stats 对象（异步）
         * @param object - 入参选项
         */
        stat(object: FileSystemStatOptions): void;

        /**
         * 获取文件 Stats 对象（同步）
         * @param path - 文件/目录路径
         * @param recursive - 是否递归获取目录下文件的Stats
         * @returns Stats 对象/目录Stats映射
         * @throws {Error} 无权限/文件不存在时抛出异常
         */
        statSync(path: string, recursive?: boolean): Stats | Record<string, Stats>;

        /**
         * 删除文件（异步）
         * @param object - 入参选项
         */
        unlink(object: FileSystemUnlinkOptions): void;

        /**
         * 删除文件（同步）
         * @param filePath - 要删除的文件路径
         * @throws {Error} 文件不存在/是目录/无权限时抛出异常
         */
        unlinkSync(filePath: string): void;

        /**
         * 解压文件（异步）
         * @param object - 入参选项
         */
        unzip(object: FileSystemUnzipOptions): void;

        /**
         * 写文件（异步）
         * @param object - 入参选项
         */
        writeFile(object: FileSystemWriteFileOptions): void;

        /**
         * 写文件（同步）
         * @param filePath - 要写入的文件路径
         * @param data - 要写入的文本/二进制数据
         * @param encoding - 字符编码（可选）
         * @throws {Error} 目录不存在/无权限/存储空间不足时抛出异常
         */
        writeFileSync(filePath: string, data: string | ArrayBuffer, encoding?: 'base64' | 'binary' | 'utf-8' | 'utf8'): void;
    }
}