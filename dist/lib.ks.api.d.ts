/** KuaiShouWeb的变量命名空间 */
declare namespace KuaiShouWebMinigame {
    /**
     * 全局 ks 对象接口定义
     */
    interface KS {
        /**
         * 异步获取平台基础信息
         * @param object - 入参选项
         * @example
         * ```javascript
         * ks.getSystemInfo({
         *   success (res) {
         *     console.log(res.model)
         *     console.log(res.pixelRatio)
         *     console.log(res.windowWidth)
         *     console.log(res.windowHeight)
         *     console.log(res.language)
         *     console.log(res.version)
         *     console.log(res.platform)
         *   }
         * })
         * ```
         */
        getSystemInfo: (object: GetSystemInfoOptions) => void;

        /**
         * 同步获取平台基础信息（ks.getSystemInfo 的同步版本）
         * @returns 系统信息对象
         * @throws 调用失败时抛出错误
         * @example
         * ```javascript
         * try {
         *   const res = ks.getSystemInfoSync()
         *   console.log(res.model)
         *   console.log(res.pixelRatio)
         *   console.log(res.windowWidth)
         *   console.log(res.windowHeight)
         *   console.log(res.language)
         *   console.log(res.version)
         *   console.log(res.platform)
         * } catch (e) {
         *   // Do something when catch error
         * }
         * ```
         */
        getSystemInfoSync: () => SystemInfoResult;

        /**
         * 异步获取系统信息（增强版）
         * @description 需要一定的客户端版本支持，在不支持的客户端上，会使用同步实现来返回
         * @param object - 入参选项
         * @example
         * ```javascript
         * ks.getSystemInfoAsync({
         *   success (res) {
         *     console.log('系统信息：', res)
         *   },
         *   fail (err) {
         *     console.error('获取系统信息失败：', err)
         *   }
         * })
         * ```
         */
        getSystemInfoAsync: (object: GetSystemInfoOptions) => void;
    }
    /**
     * 安全区域信息
     */
    interface SafeArea {
        /** 安全区域左上角横坐标 */
        left: number;
        /** 安全区域右下角横坐标 */
        right: number;
        /** 安全区域左上角纵坐标 */
        top: number;
        /** 安全区域右下角纵坐标 */
        bottom: number;
        /** 安全区域宽度 */
        width: number;
        /** 安全区域高度 */
        height: number;
    }

    /**
     * 当前小游戏运行的宿主环境信息
     */
    interface HostInfo {
        /** 宿主 app 对应的 appId */
        appId: string;
        /** 宿主类型，可选值：快手，快手极速版，快看点 */
        env: string;
        /** 游戏版本 */
        gameVersion: string;
    }

    /**
     * getSystemInfo 接口返回的系统信息
     */
    interface SystemInfoResult {
        /** 设备品牌 */
        brand: string;
        /** 设备型号 */
        model: string;
        /** 设备像素比 */
        pixelRatio: number;
        /** 屏幕宽度，单位px */
        screenWidth: number;
        /** 屏幕高度，单位px */
        screenHeight: number;
        /** 可使用窗口宽度，单位px */
        windowWidth: number;
        /** 可使用窗口高度，单位px */
        windowHeight: number;
        /** 状态栏的高度，单位px */
        statusBarHeight: number;
        /** 快手设置的语言 */
        language: string;
        /** 快手小游戏版本号 */
        version: string;
        /** 操作系统及版本 */
        system: string;
        /** 客户端平台 */
        platform: string;
        /** 允许使用相册的开关（仅 iOS 有效） */
        albumAuthorized: boolean;
        /** 允许使用摄像头的开关 */
        cameraAuthorized: boolean;
        /** 允许使用定位的开关 */
        locationAuthorized: boolean;
        /** 允许使用麦克风的开关 */
        microphoneAuthorized: boolean;
        /** 允许通知的开关 */
        notificationAuthorized: boolean;
        /** 允许通知带有提醒的开关（仅 iOS 有效） */
        notificationAlertAuthorized: boolean;
        /** 允许通知带有标记的开关（仅 iOS 有效） */
        notificationBadgeAuthorized: boolean;
        /** 允许通知带有声音的开关（仅 iOS 有效） */
        notificationSoundAuthorized: boolean;
        /** 蓝牙的系统开关 */
        bluetoothEnabled: boolean;
        /** 地理位置的系统开关 */
        locationEnabled: boolean;
        /** Wi-Fi 的系统开关 */
        wifiEnabled: boolean;
        /** 在竖屏正方向下的安全区域 */
        safeArea: SafeArea;
        /** 当前小游戏运行的宿主环境 */
        host: HostInfo;
    }

    /**
     * getSystemInfo 接口的入参选项
     */
    interface GetSystemInfoOptions {
        /** 接口调用成功的回调函数 */
        success?: (res: SystemInfoResult) => void;
        /** 接口调用失败的回调函数 */
        fail?: (err: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }
}

/** 将KuaiShouWeb的ks变量声明为全局变量 */
declare const ks: KuaiShouWebMinigame.KS;
